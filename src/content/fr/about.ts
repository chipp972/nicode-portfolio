import type { About } from '../schema';

export const about: About = {
  eyebrow: 'Approche',
  title: "Neuf ans sur des applications que l'on ne peut pas éteindre",
  paragraphs: [
    "Développeur front-end depuis 2017, en continu, sur des applications web critiques à fort trafic : l'espace client d'OVHcloud, celui d'Axa France, l'interface embarquée des décodeurs Canal+.",
    'Je travaille avec des grands comptes et des scale-ups : les organisations où plusieurs équipes produit avancent en parallèle sur la même base de code, où la performance et la conformité ne se négocient pas, et où une migration doit se faire sans jamais couper le service.',
    'Mon cœur de métier tient en trois choses. Faire migrer des bases de code legacy vers React et TypeScript sans interrompre le service. Concevoir des composants réutilisables et les distribuer à des équipes qui les consomment. Répondre du coût réel de ce qui part dans le navigateur.',
    "J'intègre Claude Code et GitHub Copilot au quotidien : je structure les bases de code pour que la génération assistée reste maintenable, et je garde la revue humaine comme point de contrôle avant chaque PR.",
  ],
  note: "J'ai contribué à ces chantiers au sein d'équipes, jamais seul. Je n'ai pas de titre d'architecte et je ne m'en réclame pas : ce que j'apporte, c'est une montée en compétence rapide sur une base de code existante, et du code qui reste lisible après mon départ.",
  portraitAlt: 'Nicolas Pierre-Charles, développeur full stack React et TypeScript',
  services: [
    {
      index: '01',
      label: 'Migration',
      title: 'Sortir du legacy',
      body: "AngularJS, jQuery, JavaScript natif vers React et TypeScript. J'ai contribué à ce type de chantier chez OVHcloud et Axa France, sur des espaces clients en production, sans coupure de service.",
    },
    {
      index: '02',
      label: 'Performance',
      title: "Rendre la main à l'utilisateur",
      body: "Core Web Vitals, taille de bundle, code splitting, lazy loading, rendu serveur avec Next.js. Le poste où l'on récupère le plus de temps de chargement pour le moins d'effort.",
    },
    {
      index: '03',
      label: 'Architecture',
      title: 'Faire tenir plusieurs équipes',
      body: "Design systems, micro-frontends, monorepos, librairies internes publiées sur registry privé. De quoi laisser chaque équipe produit livrer sans attendre les autres, y compris à l'échelle de plusieurs pays.",
    },
  ],
};
