import { z } from 'zod';

/**
 * Schémas du contenu éditorial.
 *
 * Le contenu vit dans `src/content/{fr,en}/` et n'est jamais écrit en dur dans un
 * composant. `getContent()` le valide au build : un contenu incomplet fait échouer
 * `next build` plutôt que de dégrader silencieusement la page en production.
 */

const nonEmpty = z.string().trim().min(1);

export const linkSchema = z.object({
  label: nonEmpty,
  href: z.string().url(),
});

export const heroSchema = z.object({
  eyebrow: nonEmpty,
  titleLead: nonEmpty,
  titleAccent: nonEmpty,
  lede: nonEmpty,
});

/** Une ligne du relevé de parcours affiché sous le hero. */
export const ledgerEntrySchema = z.object({
  period: nonEmpty,
  what: nonEmpty,
  who: nonEmpty,
});

export const serviceSchema = z.object({
  index: z.string().regex(/^\d{2}$/, 'index sur deux chiffres, ex. "01"'),
  label: nonEmpty,
  title: nonEmpty,
  body: nonEmpty,
});

export const aboutSchema = z.object({
  eyebrow: nonEmpty,
  title: nonEmpty,
  paragraphs: z.array(nonEmpty).min(1),
  portraitAlt: nonEmpty,
  services: z.array(serviceSchema).length(3),
});

export const projectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/, 'slug en minuscules, chiffres et tirets'),
  name: nonEmpty,
  role: nonEmpty,
  period: nonEmpty,
  sector: nonEmpty,
  /** Distingue une mission client d'un projet personnel : la nuance est affichée. */
  kind: z.enum(['mission', 'sideProject']),
  tagline: nonEmpty,
  context: nonEmpty,
  challenges: z.array(nonEmpty).min(1),
  outcome: nonEmpty,
  takeaway: nonEmpty,
  stack: z.array(nonEmpty).min(1),
  links: z.array(linkSchema).optional(),
});

export const projectsSchema = z.object({
  eyebrow: nonEmpty,
  title: nonEmpty,
  intro: nonEmpty,
  items: z.array(projectSchema).min(1),
});

export const contactMethodSchema = z.object({
  label: nonEmpty,
  value: nonEmpty,
  detail: nonEmpty,
  href: nonEmpty,
});

export const contactSchema = z.object({
  eyebrow: nonEmpty,
  title: nonEmpty,
  methods: z.array(contactMethodSchema).min(1),
});

export const socialProfileSchema = z.object({
  id: z.enum(['linkedin', 'github', 'npm', 'cv']),
  label: nonEmpty,
  href: z.string().url(),
});

/** Page de texte long : mentions légales, crédits. */
export const legalPageSchema = z.object({
  title: nonEmpty,
  updatedAt: nonEmpty,
  intro: nonEmpty.optional(),
  sections: z
    .array(
      z.object({
        heading: nonEmpty,
        paragraphs: z.array(nonEmpty).min(1),
      }),
    )
    .min(1),
});

export const contentSchema = z.object({
  hero: heroSchema,
  ledger: z.array(ledgerEntrySchema).min(1),
  about: aboutSchema,
  projects: projectsSchema,
  contact: contactSchema,
  social: z.array(socialProfileSchema).min(1),
  legal: legalPageSchema,
  credits: legalPageSchema,
});

export type Link = z.infer<typeof linkSchema>;
export type Hero = z.infer<typeof heroSchema>;
export type LedgerEntry = z.infer<typeof ledgerEntrySchema>;
export type Service = z.infer<typeof serviceSchema>;
export type About = z.infer<typeof aboutSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Projects = z.infer<typeof projectsSchema>;
export type ContactMethod = z.infer<typeof contactMethodSchema>;
export type Contact = z.infer<typeof contactSchema>;
export type SocialProfile = z.infer<typeof socialProfileSchema>;
export type LegalPage = z.infer<typeof legalPageSchema>;
export type Content = z.infer<typeof contentSchema>;
