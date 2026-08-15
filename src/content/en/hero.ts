import type { Hero, LedgerEntry } from '../schema';

export const hero: Hero = {
  eyebrow: 'Freelance full stack React / TypeScript developer',
  titleLead: 'Take back control of your front-end,',
  titleAccent: 'without rewriting it.',
  lede: 'I step in when performance, technical debt or frontend architecture slow down product delivery: legacy migration, web performance, front-to-back structuring.',
};

export const ledger: LedgerEntry[] = [
  {
    period: '2023 — 2026',
    what: 'Customer portal used by millions of people',
    who: 'OVHcloud',
  },
  {
    period: '2018 — 2023',
    what: 'Design system adopted by five product teams',
    who: 'Axa France',
  },
  {
    period: '2017 — 2018',
    what: 'Embedded interface, constrained memory',
    who: 'Canal+',
  },
];
