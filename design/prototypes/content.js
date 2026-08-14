/* Contenu partagé par les 4 prototypes.
   Rédigé à partir du positionnement freelance 2026 (claude-prospection-freelance/).
   Contraintes respectées : OVHcloud au passé (terminé mars 2026) · « contribué à »
   jamais « architecturé / piloté » · React Native intermédiaire · performance web
   rattachée à Axa France uniquement. */

const SITE = {
  eyebrow: "Développeur full stack React / TypeScript — Freelance",
  h1a: "Reprenez le contrôle de votre front-end,",
  h1b: "sans tout réécrire.",
  lede: "J'interviens quand la performance, la dette technique ou l'architecture front ralentissent la livraison produit : migration legacy, web performance, structuration du front au back.",
  avail: "Disponible pour mission — full remote ou hybride",
  about: [
    "Développeur front-end depuis 2017, en continu, sur des applications web critiques à fort trafic : l'espace client d'OVHcloud, celui d'Axa France, l'interface embarquée des décodeurs Canal+.",
    "Je travaille avec des grands comptes et des scale-ups : les organisations où plusieurs équipes produit avancent en parallèle sur la même base de code, où la performance et la conformité ne se négocient pas, et où une migration doit se faire sans jamais couper le service.",
    "Mon cœur de métier tient en trois choses. Faire migrer des bases de code legacy vers React et TypeScript sans interrompre le service. Concevoir des composants réutilisables et les distribuer à des équipes qui les consomment. Répondre du coût réel de ce qui part dans le navigateur.",
    "J'intègre Claude Code et GitHub Copilot au quotidien : je structure les bases de code pour que la génération assistée reste maintenable, et je garde la revue humaine comme point de contrôle avant chaque PR."
  ],
  note: "J'ai contribué à ces chantiers au sein d'équipes, jamais seul. Je n'ai pas de titre d'architecte et je ne m'en réclame pas — ce que j'apporte, c'est une montée en compétence rapide sur une base de code existante, et du code qui reste lisible après mon départ.",
  services: [
    { n: "01", label: "Migration", title: "Sortir du legacy", body: "AngularJS, jQuery, JavaScript natif vers React et TypeScript. J'ai contribué à ce type de chantier chez OVHcloud et Axa France, sur des espaces clients en production, sans coupure de service." },
    { n: "02", label: "Performance", title: "Rendre la main à l'utilisateur", body: "Core Web Vitals, taille de bundle, code splitting, lazy loading, rendu serveur avec Next.js. Le poste où l'on récupère le plus de temps de chargement pour le moins d'effort." },
    { n: "03", label: "Architecture", title: "Faire tenir plusieurs équipes", body: "Design systems, micro-frontends, monorepos, librairies internes publiées sur registry privé. De quoi laisser chaque équipe produit livrer sans attendre les autres, y compris à l'échelle de plusieurs pays." }
  ],
  contact: [
    { label: "E-mail", value: "nicolas@nicode.fr", detail: "Réponse sous 24 h en général.", href: "mailto:nicolas@nicode.fr" },
    { label: "Téléphone", value: "06 85 31 64 99", detail: "Du lundi au vendredi, entre 16 h et 18 h.", href: "tel:+33685316499" },
    { label: "Réseau", value: "LinkedIn", detail: "Pour une mise en relation ou un premier échange.", href: "https://www.linkedin.com/in/nicolas-pierre-charles/" }
  ]
};

const PROJECTS = [
  {
    name: "OVHcloud", role: "Senior full stack developer", yr: "2023 — 2026", meta: "3 ans · Cloud",
    tag: "Migration AngularJS → React",
    context: "Modernisation de l'espace client OVHcloud, application critique utilisée par des millions de clients, en environnement international multi-équipes.",
    challenges: [
      "Participé à la migration de parcours client d'AngularJS vers React et TypeScript, en améliorant la maintenabilité de la base de code.",
      "Publié et maintenu des librairies internes sur registry privé : chaîne de build, versionnage des paquets, accompagnement des équipes consommatrices lors des montées de version.",
      "Contribué à des développements backend NestJS (BFF), en collaboration avec les équipes API.",
      "Intégré Vite, Vitest et Tailwind CSS dans la stack de développement de l'équipe.",
      "Mis en place et maintenu des tests end-to-end Playwright sur les parcours critiques."
    ],
    outcome: "Des parcours client sortis d'AngularJS et repassés sous une stack que l'équipe peut faire évoluer, avec une couverture end-to-end sur les chemins critiques.",
    takeaway: "L'habitude de faire évoluer une base de code que des millions de personnes utilisent sans jamais interrompre le service, et le travail quotidien avec des équipes API, design system et localisation réparties sur plusieurs pays.",
    stack: ["React", "TypeScript", "Vite", "Vitest", "Playwright", "Tailwind CSS", "React Query", "NestJS", "Node.js", "GitLab CI/CD"]
  },
  {
    name: "Axa France", role: "Senior frontend developer", yr: "2018 — 2023", meta: "4 ans ½ · Assurance",
    tag: "Design system · 5 équipes produit",
    context: "Espace client web d'Axa France : parcours critiques multi-branches (santé, épargne, auto), à fort trafic et sous fortes contraintes de qualité et de conformité.",
    challenges: [
      "Contribué à la création d'un design system réutilisable, documenté sous Storybook et adopté par plus de cinq équipes produit.",
      "Travaillé sur l'architecture micro-frontend permettant aux équipes de déployer indépendamment.",
      "Publié des librairies internes sur registry privé : configuration et maintenance de la chaîne de build, versionnage, support aux équipes consommatrices.",
      "Contribué à la migration de l'espace client de JavaScript natif vers React, TypeScript et Redux.",
      "Travaillé sur l'optimisation des performances : Core Web Vitals, taille de bundle, code splitting, lazy loading."
    ],
    outcome: "Cinq équipes produit travaillant sur une base de composants commune, et des déploiements découplés les uns des autres.",
    takeaway: "C'est là que s'est construit mon cœur de métier : concevoir des composants réutilisables, les distribuer à des équipes consommatrices, et assumer le coût réel de chaque octet envoyé au client.",
    stack: ["React", "TypeScript", "Redux", "Jest", "Storybook", "Design system", "Micro-frontends", "Next.js", "GraphQL", "Webpack"]
  },
  {
    name: "Canal+", role: "Frontend developer", yr: "2017 — 2018", meta: "1 an · Média",
    tag: "Interface embarquée, mémoire contrainte",
    context: "Interface web embarquée sur les décodeurs Canal+, produit grand public soumis à de fortes contraintes de ressources.",
    challenges: [
      "Optimisé les performances de l'interface décodeur, avec une réduction mesurée du temps de chargement de la VOD.",
      "Développé sous contraintes fortes de mémoire et de puissance de calcul, sur plusieurs générations de matériel embarqué.",
      "Conçu une navigation pilotée à la télécommande, sans curseur ni surface tactile."
    ],
    outcome: "Un temps d'accès à la VOD réduit de façon mesurable, y compris sur les décodeurs les plus anciens du parc.",
    takeaway: "Une attention durable au coût réel de chaque dépendance et de chaque octet envoyé au client — c'est le contexte où j'ai appris à la mesurer plutôt qu'à l'estimer.",
    stack: ["JavaScript", "Environnement embarqué", "Performance", "Less", "GraphQL"]
  },
  {
    name: "GymTribe", role: "Projet personnel", yr: "2025 — en cours", meta: "Monorepo · Mobile + web",
    tag: "Expo · SQLite hors-ligne",
    context: "Monorepo de suivi musculation et nutrition : une application mobile pour les pratiquants, une webapp pour les coachs, et des paquets partagés entre les deux.",
    challenges: [
      "Application mobile Expo et expo-router avec base SQLite locale, utilisable entièrement hors-ligne.",
      "Webapp coach en Next.js et Supabase, avec suivi des programmes et des mesures.",
      "Paquets partagés entre mobile et web : schémas Zod, migrations, tokens de design, base nutritionnelle."
    ],
    outcome: "Une application mobile qui fonctionne sans réseau et une webapp coach qui partage le même modèle de données, sans duplication de logique métier.",
    takeaway: "Le terrain sur lequel je pratique ce que je ne peux pas rattacher à une mission client : Expo, Supabase et Prisma, et l'intégration de modèles de langage dans un produit réel.",
    stack: ["React Native", "Expo", "SQLite", "Next.js", "Supabase", "TypeScript", "Zod", "Monorepo"]
  }
];
