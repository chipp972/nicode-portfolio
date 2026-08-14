import { describe, expect, it } from 'vitest';
import { getContent } from '../src/content';
import { routing } from '../src/i18n/routing';

describe('contenu éditorial', () => {
  it.each(routing.locales)('passe la validation Zod pour la locale « %s »', (locale) => {
    expect(() => getContent(locale)).not.toThrow();
  });

  it('expose les mêmes projets, dans le même ordre, dans les deux locales', () => {
    const slugs = routing.locales.map((locale) =>
      getContent(locale).projects.items.map((project) => project.slug),
    );

    expect(new Set(slugs.map((list) => list.join(','))).size).toBe(1);
  });

  it('expose les mêmes profils sociaux dans les deux locales', () => {
    const ids = routing.locales.map((locale) =>
      getContent(locale)
        .social.map((profile) => profile.id)
        .join(','),
    );

    expect(new Set(ids).size).toBe(1);
  });

  it("n'annonce jamais OVHcloud comme une mission en cours", () => {
    for (const locale of routing.locales) {
      const ovh = getContent(locale).projects.items.find((p) => p.slug === 'ovhcloud');

      expect(ovh).toBeDefined();
      expect(ovh?.period).toContain('2026');
      expect(ovh?.period).not.toMatch(/en cours|ongoing|présent|present/i);
    }
  });

  it("ne revendique jamais un rôle d'architecte ou de pilote", () => {
    const forbidden = /j'ai architecturé|j'ai piloté|j'ai défini|i architected|i led the/i;

    for (const locale of routing.locales) {
      const content = getContent(locale);
      const prose = [
        ...content.about.paragraphs,
        content.about.note,
        ...content.projects.items.flatMap((p) => [
          p.context,
          ...p.challenges,
          p.outcome,
          p.takeaway,
        ]),
      ];

      for (const text of prose) {
        expect(text).not.toMatch(forbidden);
      }
    }
  });
});
