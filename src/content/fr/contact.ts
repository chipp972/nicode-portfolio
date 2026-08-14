import type { Contact, SocialProfile } from '../schema';

export const contact: Contact = {
  eyebrow: 'Contact',
  title: 'Un chantier front à cadrer ?',
  methods: [
    {
      label: 'E-mail',
      value: 'nicolas@nicode.fr',
      detail: 'Réponse sous 24 h en général.',
      href: 'mailto:nicolas@nicode.fr',
    },
    {
      label: 'Téléphone',
      value: '06 85 31 64 99',
      detail: 'Du lundi au vendredi, entre 16 h et 18 h.',
      href: 'tel:+33685316499',
    },
    {
      label: 'Réseau',
      value: 'LinkedIn',
      detail: 'Pour une mise en relation ou un premier échange.',
      href: 'https://www.linkedin.com/in/nicolas-pierre-charles/',
    },
  ],
};

export const social: SocialProfile[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nicolas-pierre-charles/',
  },
  { id: 'github', label: 'GitHub', href: 'https://github.com/chipp972' },
  { id: 'npm', label: 'npm', href: 'https://www.npmjs.com/~chipp972' },
  {
    id: 'cv',
    label: 'Mon CV',
    href: 'https://drive.google.com/file/d/1buFrOHiUPOAzWzPzUGmba0Qn_WFXVOi6/view?usp=sharing',
  },
];
