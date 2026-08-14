import type { Contact, SocialProfile } from '../schema';

export const contact: Contact = {
  eyebrow: 'Contact',
  title: 'A front-end project to scope?',
  methods: [
    {
      label: 'Email',
      value: 'nicolas@nicode.fr',
      detail: 'Usually a reply within 24 hours.',
      href: 'mailto:nicolas@nicode.fr',
    },
    {
      label: 'Phone',
      value: '+33 6 85 31 64 99',
      detail: 'Monday to Friday, between 4 pm and 6 pm CET.',
      href: 'tel:+33685316499',
    },
    {
      label: 'Network',
      value: 'LinkedIn',
      detail: 'For an introduction or a first conversation.',
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
    label: 'My résumé',
    href: 'https://drive.google.com/file/d/1buFrOHiUPOAzWzPzUGmba0Qn_WFXVOi6/view?usp=sharing',
  },
];
