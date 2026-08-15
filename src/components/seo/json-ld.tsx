import type { Content } from '@/content';
import type { Locale } from '@/i18n/routing';

const BASE_URL = 'https://nicode.fr';

/**
 * Données structurées : une `Person` et le `ProfessionalService` qu'elle exerce.
 *
 * Le contenu vient de `src/content/`, donc le balisage ne peut pas diverger des
 * textes affichés. Les employeurs sont dérivés des références.
 */
export function JsonLd({ content, locale }: { content: Content; locale: Locale }) {
  const person = {
    '@type': 'Person',
    '@id': `${BASE_URL}/#nicolas`,
    name: 'Nicolas Pierre-Charles',
    jobTitle: content.hero.eyebrow,
    description: content.hero.lede,
    email: 'nicolas@nicode.fr',
    telephone: '+33685316499',
    url: `${BASE_URL}/${locale}`,
    sameAs: content.social.filter((p) => p.id !== 'cv').map((p) => p.href),
    knowsLanguage: ['fr', 'en'],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Université Paris Diderot',
    },
    worksFor: content.projects.items
      .filter((project) => project.kind === 'mission')
      .map((project) => ({ '@type': 'Organization', name: project.name })),
  };

  const service = {
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}/#service`,
    name: 'Nicode',
    description: content.hero.lede,
    url: `${BASE_URL}/${locale}`,
    provider: { '@id': `${BASE_URL}/#nicolas` },
    areaServed: { '@type': 'Country', name: 'France' },
    availableLanguage: ['fr', 'en'],
    knowsAbout: content.about.services.map((s) => s.title),
  };

  const graph = { '@context': 'https://schema.org', '@graph': [person, service] };

  // Le contenu est local et validé au build, mais un `<` dans un texte suffirait à
  // fermer la balise script. L'échappement rend la sortie inerte quoi qu'il arrive.
  const json = JSON.stringify(graph).replace(/</g, '\\u003c');

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
