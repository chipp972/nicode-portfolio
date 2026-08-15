import type { Projects } from '../schema';

export const projects: Projects = {
  eyebrow: 'Work',
  title: 'Four contexts, four different constraints',
  intro:
    'Three client engagements and one personal project. Open an entry for the detail: the context, what I did, the outcome, and what I took from it.',
  items: [
    {
      slug: 'ovhcloud',
      name: 'OVHcloud',
      role: 'Senior full stack developer',
      period: '2023 — 2026',
      sector: 'Cloud',
      kind: 'mission',
      tagline: 'AngularJS to React migration',
      context:
        "Modernisation of OVHcloud's customer portal, a business-critical application used by millions of customers, in an international multi-team environment.",
      challenges: [
        'Took part in migrating customer journeys from AngularJS to React and TypeScript, improving the maintainability of the codebase.',
        'Published and maintained internal libraries on a private registry: build chain, package versioning, and support for consuming teams during upgrades.',
        'Contributed to NestJS backend work (BFF), in collaboration with the API teams.',
        "Introduced Vite, Vitest and Tailwind CSS into the team's development stack.",
        'Set up and maintained Playwright end-to-end tests on critical journeys.',
      ],
      outcome:
        'Customer journeys moved off AngularJS and onto a stack the team can keep evolving, with end-to-end coverage on the critical paths.',
      takeaway:
        'The habit of evolving a codebase that millions of people rely on without ever interrupting the service, and daily work with API, design system and localisation teams spread across several countries.',
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
      sector: 'Insurance',
      kind: 'mission',
      tagline: 'Design system adopted by five teams',
      context:
        "Axa France's web customer portal: business-critical journeys across health, savings and motor insurance, with high traffic and strict quality and compliance constraints.",
      challenges: [
        'Contributed to a reusable design system, documented in Storybook and adopted by more than five product teams.',
        'Worked on a micro-frontend architecture allowing teams to deploy independently.',
        'Published internal libraries on a private registry: build chain configuration and maintenance, versioning, and support for consuming teams.',
        'Contributed to migrating the customer portal from vanilla JavaScript to React, TypeScript and Redux.',
        'Worked on front-end performance: Core Web Vitals, bundle size, code splitting, lazy loading.',
      ],
      outcome:
        'Five product teams working from a shared component base, with deployments decoupled from one another.',
      takeaway:
        'This is where my core skill set took shape: designing reusable components, shipping them to consuming teams, and owning the real cost of every byte sent to the client.',
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
      sector: 'Media',
      kind: 'mission',
      tagline: 'Embedded interface, constrained memory',
      context:
        'Web interface embedded in Canal+ set-top boxes, a consumer product under severe resource constraints.',
      challenges: [
        'Optimised the performance of the set-top box interface, with a measured reduction in VOD loading time.',
        'Developed under tight memory and processing constraints, across several generations of embedded hardware.',
        'Worked on navigation driven by a remote control, with no cursor and no touch surface.',
      ],
      outcome:
        'Measurably faster access to VOD content, including on the oldest set-top boxes in the fleet.',
      takeaway:
        'A lasting attention to the real cost of every dependency and every byte sent to the client: this is the context where I learned to measure it rather than estimate it.',
      stack: ['JavaScript', 'Embedded environment', 'Performance', 'Less', 'GraphQL'],
    },
    {
      slug: 'gymtribe',
      name: 'GymTribe',
      role: 'Personal project',
      period: '2025 — ongoing',
      sector: 'Mobile and web',
      kind: 'sideProject',
      tagline: 'Expo and SQLite, works offline',
      context:
        'A strength training and nutrition tracking monorepo: a mobile app for lifters, a web app for coaches, and shared packages between the two.',
      challenges: [
        'Expo and expo-router mobile app with a local SQLite database, fully usable offline.',
        'Coach web app built with Next.js and Supabase, tracking programmes and measurements.',
        'Packages shared between mobile and web: Zod schemas, migrations, design tokens, nutrition database.',
      ],
      outcome:
        'A mobile app that works without a network and a coach web app sharing the same data model, with no duplicated business logic.',
      takeaway:
        'The ground where I practise what I cannot attach to a client engagement: Expo, Supabase and Prisma, and integrating language models into a real product.',
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
