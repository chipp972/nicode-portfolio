import type { Projects } from '../schema';

/**
 * Contraintes de rédaction (source : ../claude-prospection-freelance/CLAUDE.md) :
 * OVHcloud au passé, « j'ai contribué à » jamais « j'ai architecturé », performance
 * web rattachée à Axa France uniquement, React Native au niveau intermédiaire.
 */
export const projects: Projects = {
  eyebrow: 'Références',
  title: 'Quatre contextes, quatre contraintes différentes',
  intro:
    "Trois missions en entreprise et un projet personnel. Ouvrez une référence pour le détail : le contexte, ce que j'ai fait, le résultat, et ce que ça m'a apporté.",
  items: [
    {
      slug: 'ovhcloud',
      name: 'OVHcloud',
      role: 'Senior full stack developer',
      period: '2023 — 2026',
      sector: 'Cloud',
      kind: 'mission',
      tagline: 'Migration AngularJS vers React',
      context:
        "Modernisation de l'espace client OVHcloud, application critique utilisée par des millions de clients, en environnement international multi-équipes.",
      challenges: [
        "Participé à la migration de parcours client d'AngularJS vers React et TypeScript, en améliorant la maintenabilité de la base de code.",
        'Publié et maintenu des librairies internes sur registry privé : chaîne de build, versionnage des paquets, accompagnement des équipes consommatrices lors des montées de version.',
        'Contribué à des développements backend NestJS (BFF), en collaboration avec les équipes API.',
        "Intégré Vite, Vitest et Tailwind CSS dans la stack de développement de l'équipe.",
        'Mis en place et maintenu des tests end-to-end Playwright sur les parcours critiques.',
      ],
      outcome:
        "Des parcours client sortis d'AngularJS et repassés sous une stack que l'équipe peut faire évoluer, avec une couverture end-to-end sur les chemins critiques.",
      takeaway:
        "L'habitude de faire évoluer une base de code que des millions de personnes utilisent sans jamais interrompre le service, et le travail quotidien avec des équipes API, design system et localisation réparties sur plusieurs pays.",
      stack: [
        'React',
        'TypeScript',
        'Vite',
        'Vitest',
        'Playwright',
        'Tailwind CSS',
        'React Query',
        'NestJS',
        'Node.js',
        'GitLab CI/CD',
      ],
    },
    {
      slug: 'axa-france',
      name: 'Axa France',
      role: 'Senior frontend developer',
      period: '2018 — 2023',
      sector: 'Assurance',
      kind: 'mission',
      tagline: 'Design system adopté par cinq équipes',
      context:
        "Espace client web d'Axa France : parcours critiques multi-branches en santé, épargne et auto, à fort trafic et sous fortes contraintes de qualité et de conformité.",
      challenges: [
        "Contribué à la création d'un design system réutilisable, documenté sous Storybook et adopté par plus de cinq équipes produit.",
        'Travaillé sur une architecture micro-frontend permettant aux équipes de déployer indépendamment.',
        'Publié des librairies internes sur registry privé : configuration et maintenance de la chaîne de build, versionnage, support aux équipes consommatrices.',
        "Contribué à la migration de l'espace client de JavaScript natif vers React, TypeScript et Redux.",
        "Travaillé sur l'optimisation des performances : Core Web Vitals, taille de bundle, code splitting, lazy loading.",
      ],
      outcome:
        'Cinq équipes produit travaillant sur une base de composants commune, et des déploiements découplés les uns des autres.',
      takeaway:
        "C'est là que s'est construit mon cœur de métier : concevoir des composants réutilisables, les distribuer à des équipes consommatrices, et assumer le coût réel de chaque octet envoyé au client.",
      stack: [
        'React',
        'TypeScript',
        'Redux',
        'Jest',
        'Storybook',
        'Design system',
        'Micro-frontends',
        'Next.js',
        'GraphQL',
        'Webpack',
      ],
    },
    {
      slug: 'canal-plus',
      name: 'Canal+',
      role: 'Frontend developer',
      period: '2017 — 2018',
      sector: 'Média',
      kind: 'mission',
      tagline: 'Interface embarquée, mémoire contrainte',
      context:
        'Interface web embarquée sur les décodeurs Canal+, produit grand public soumis à de fortes contraintes de ressources.',
      challenges: [
        "Optimisé les performances de l'interface décodeur, avec une réduction mesurée du temps de chargement de la VOD.",
        'Développé sous contraintes fortes de mémoire et de puissance de calcul, sur plusieurs générations de matériel embarqué.',
        'Travaillé sur une navigation pilotée à la télécommande, sans curseur ni surface tactile.',
      ],
      outcome:
        "Un temps d'accès à la VOD réduit de façon mesurable, y compris sur les décodeurs les plus anciens du parc.",
      takeaway:
        "Une attention durable au coût réel de chaque dépendance et de chaque octet envoyé au client : c'est le contexte où j'ai appris à le mesurer plutôt qu'à l'estimer.",
      stack: ['JavaScript', 'Environnement embarqué', 'Performance', 'Less', 'GraphQL'],
    },
    {
      slug: 'gymtribe',
      name: 'GymTribe',
      role: 'Projet personnel',
      period: '2025 — en cours',
      sector: 'Mobile et web',
      kind: 'sideProject',
      tagline: 'Expo et SQLite, utilisable hors-ligne',
      context:
        'Monorepo de suivi musculation et nutrition : une application mobile pour les pratiquants, une webapp pour les coachs, et des paquets partagés entre les deux.',
      challenges: [
        'Application mobile Expo et expo-router avec base SQLite locale, utilisable entièrement hors-ligne.',
        'Webapp coach en Next.js et Supabase, avec suivi des programmes et des mesures.',
        'Paquets partagés entre mobile et web : schémas Zod, migrations, tokens de design, base nutritionnelle.',
      ],
      outcome:
        'Une application mobile qui fonctionne sans réseau et une webapp coach qui partage le même modèle de données, sans duplication de logique métier.',
      takeaway:
        "Le terrain sur lequel je pratique ce que je ne peux pas rattacher à une mission client : Expo, Supabase et Prisma, et l'intégration de modèles de langage dans un produit réel.",
      stack: [
        'React Native',
        'Expo',
        'SQLite',
        'Next.js',
        'Supabase',
        'TypeScript',
        'Zod',
        'Monorepo',
      ],
    },
  ],
};
