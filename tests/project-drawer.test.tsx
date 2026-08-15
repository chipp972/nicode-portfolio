import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../messages/fr.json';
import { getContent } from '../src/content';
import { ProjectDrawer } from '../src/features/projects/project-drawer';

const project = getContent('fr').projects.items[0]!;

function renderDrawer(onClose = vi.fn()) {
  const result = render(
    <NextIntlClientProvider locale="fr" messages={messages}>
      <ProjectDrawer project={project} open onClose={onClose} />
    </NextIntlClientProvider>,
  );

  return { ...result, onClose };
}

describe('ProjectDrawer', () => {
  it('expose une boîte de dialogue modale nommée par le titre du projet', async () => {
    renderDrawer();

    const dialog = await screen.findByRole('dialog');

    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(screen.getByRole('heading', { name: project.name })).toBeInTheDocument();
  });

  it('affiche les cinq blocs du case study', async () => {
    renderDrawer();
    await screen.findByRole('dialog');

    for (const label of [
      'Contexte',
      "Ce que j'ai fait",
      'Résultat',
      "Ce que ça m'a apporté",
      'Stack',
    ]) {
      expect(screen.getByText(label)).toBeInTheDocument();
    }

    for (const challenge of project.challenges) {
      expect(screen.getByText(challenge)).toBeInTheDocument();
    }
  });

  it('ferme à la touche Échap', async () => {
    const user = userEvent.setup();
    const { onClose } = renderDrawer();
    await screen.findByRole('dialog');

    await user.keyboard('{Escape}');

    expect(onClose).toHaveBeenCalledOnce();
  });

  it('ferme au clic sur le bouton de fermeture', async () => {
    const user = userEvent.setup();
    const { onClose } = renderDrawer();
    await screen.findByRole('dialog');

    await user.click(screen.getByRole('button', { name: 'Fermer' }));

    expect(onClose).toHaveBeenCalledOnce();
  });

  it('déplace le focus dans la boîte de dialogue et verrouille le scroll', async () => {
    renderDrawer();
    const dialog = await screen.findByRole('dialog');

    await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true));
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('restaure le scroll de la page au démontage', async () => {
    const { unmount } = renderDrawer();
    await screen.findByRole('dialog');
    expect(document.body.style.overflow).toBe('hidden');

    unmount();

    expect(document.body.style.overflow).toBe('');
  });

  it("ne rend rien tant qu'aucun projet n'est sélectionné", () => {
    render(
      <NextIntlClientProvider locale="fr" messages={messages}>
        <ProjectDrawer project={null} open={false} onClose={vi.fn()} />
      </NextIntlClientProvider>,
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
