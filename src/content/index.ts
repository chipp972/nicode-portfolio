import type { Locale } from '@/i18n/routing';
import { contentSchema, type Content } from './schema';
import { frContent } from './fr';
import { enContent } from './en';

const SOURCES: Record<Locale, unknown> = {
  fr: frContent,
  en: enContent,
};

const cache = new Map<Locale, Content>();

/**
 * Charge et valide le contenu éditorial d'une locale.
 *
 * La validation Zod tourne au build, pendant la génération statique : un contenu
 * incomplet fait échouer `next build` au lieu de casser la page en production.
 */
export function getContent(locale: Locale): Content {
  const cached = cache.get(locale);
  if (cached) return cached;

  const result = contentSchema.safeParse(SOURCES[locale]);

  if (!result.success) {
    const details = result.error.issues
      .map((issue) => `  - ${issue.path.join('.')} : ${issue.message}`)
      .join('\n');

    throw new Error(`Contenu invalide pour la locale « ${locale} » :\n${details}`);
  }

  cache.set(locale, result.data);
  return result.data;
}

export * from './schema';
