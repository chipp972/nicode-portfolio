'use client';

import { useTranslations } from 'next-intl';
import { useCallback } from 'react';
import { CloseIcon } from '@/components/icons';
import { useDialogBehavior } from '@/hooks/use-dialog-behavior';
import { useExitTransition } from '@/hooks/use-exit-transition';
import type { Project } from '@/content';

const EXIT_MS = 420;

/**
 * Panneau latéral droit occupant 80 % de la largeur, 100 % sous 768 px.
 *
 * Non indexé : le détail d'une référence n'a pas d'URL propre, c'est un choix
 * assumé. L'accessibilité est gérée à la main, le projet n'utilise pas shadcn.
 *
 * L'animation passe par des transitions CSS et non par Motion : voir
 * `useExitTransition`. L'entrée s'appuie sur `@starting-style`, la sortie sur un
 * démontage différé, et les deux respectent `prefers-reduced-motion`.
 */
export function ProjectDrawer({
  project,
  open,
  onClose,
}: {
  /** Contenu affiché. Reste renseigné pendant l'animation de sortie. */
  project: Project | null;
  open: boolean;
  onClose: () => void;
}) {
  const t = useTranslations('projects');
  const mounted = useExitTransition(open, EXIT_MS);

  const close = useCallback(() => onClose(), [onClose]);
  // `mounted` et non `open` : le hook doit voir l'élément dans le DOM pour y placer
  // le focus. Avec `open`, l'effet tournait un tick trop tôt et le focus restait dehors.
  const surfaceRef = useDialogBehavior<HTMLDivElement>(mounted, close);

  if (!mounted || !project) return null;

  return (
    <>
      <div
        onClick={close}
        className={`bg-ink/45 starting:opacity-0 fixed inset-0 z-90 backdrop-blur-[3px] transition-opacity duration-300 motion-reduce:transition-none ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div
        ref={surfaceRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        tabIndex={-1}
        style={{ transitionDuration: `${EXIT_MS}ms` }}
        className={`bg-paper border-rule starting:translate-x-full fixed top-0 right-0 z-100 h-[100dvh] w-screen overflow-y-auto overscroll-contain border-l transition-transform ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none md:w-[80vw] md:max-w-[1080px] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="p-[clamp(1.75rem,4vw,3.5rem)]">
          <div className="bg-paper border-rule sticky top-0 z-10 mb-9 flex items-start justify-between gap-6 border-b pb-5">
            <div>
              <p className="eyebrow">
                {project.period} · {project.sector}
              </p>
              <h2
                id="drawer-title"
                className="font-display mt-2 text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.05] font-light tracking-tight">
                {project.name}
              </h2>
              <p className="font-mono text-ink-2 mt-1 text-xs">{project.role}</p>
            </div>

            <button
              type="button"
              onClick={close}
              aria-label={t('close')}
              className="border-rule text-ink hover:bg-accent-soft hover:border-accent grid size-11 shrink-0 cursor-pointer place-items-center rounded-full border transition-colors">
              <CloseIcon className="size-4" />
            </button>
          </div>

          <Row label={t('context')}>{project.context}</Row>

          <Row label={t('challenges')}>
            <ul className="list-disc space-y-2.5 pl-5">
              {project.challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Row>

          <Row label={t('outcome')}>{project.outcome}</Row>
          <Row label={t('takeaway')}>{project.takeaway}</Row>

          <Row label={t('stack')} last>
            <ul className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="border-rule text-ink-2 font-mono rounded-[2px] border px-2 py-1 text-xs">
                  {tech}
                </li>
              ))}
            </ul>
          </Row>

          {project.links && project.links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="border-ink hover:bg-accent-soft hover:border-accent rounded-[2px] border px-5 py-2.5 text-sm no-underline transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function Row({
  label,
  children,
  last = false,
}: {
  label: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <dl
      className={`grid gap-x-10 gap-y-2 py-6 sm:grid-cols-[9rem_1fr] ${last ? '' : 'border-rule border-b'}`}>
      <dt className="eyebrow m-0">{label}</dt>
      <dd className="text-ink-2 m-0 max-w-[66ch]">{children}</dd>
    </dl>
  );
}
