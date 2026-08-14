import type { Hero, LedgerEntry } from '../schema';

export const hero: Hero = {
  eyebrow: 'Développeur full stack React / TypeScript — Freelance',
  titleLead: 'Reprenez le contrôle de votre front-end,',
  titleAccent: 'sans tout réécrire.',
  lede: "J'interviens quand la performance, la dette technique ou l'architecture front ralentissent la livraison produit : migration legacy, web performance, structuration du front au back.",
  availability: 'Disponible pour mission : full remote ou hybride',
};

/**
 * Le relevé de parcours : trois lignes datées sous le hero.
 * Volontairement factuel, pas de superlatif : c'est la signature de la direction éditoriale.
 */
export const ledger: LedgerEntry[] = [
  {
    period: '2023 — 2026',
    what: 'Espace client utilisé par des millions de personnes',
    who: 'OVHcloud',
  },
  {
    period: '2018 — 2023',
    what: 'Design system adopté par cinq équipes produit',
    who: 'Axa France',
  },
  {
    period: '2017 — 2018',
    what: 'Interface embarquée, mémoire contrainte',
    who: 'Canal+',
  },
];
