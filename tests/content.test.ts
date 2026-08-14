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
});
