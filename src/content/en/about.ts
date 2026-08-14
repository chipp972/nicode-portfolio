import type { About } from '../schema';

export const about: About = {
  eyebrow: 'Approach',
  title: 'Nine years on applications you cannot switch off',
  paragraphs: [
    "Front-end developer since 2017, without interruption, on high-traffic business-critical web applications: OVHcloud's customer portal, Axa France's customer portal, and the embedded interface of Canal+ set-top boxes.",
    'I work with large organisations and scale-ups: the places where several product teams move in parallel on the same codebase, where performance and compliance are not negotiable, and where a migration has to happen without ever taking the service down.',
    'My core skill set comes down to three things. Migrating legacy codebases to React and TypeScript without interrupting the service. Designing reusable components and shipping them to the teams that consume them. Being accountable for the real cost of whatever reaches the browser.',
    'I use Claude Code and GitHub Copilot daily: I structure codebases so that assisted generation stays maintainable, and I keep human review as the checkpoint before every PR.',
  ],
  note: 'I contributed to this work within teams, never alone. I have never held an architect title and I do not claim one: what I bring is getting up to speed quickly on an existing codebase, and code that stays readable after I leave.',
  portraitAlt: 'Nicolas Pierre-Charles, full stack React and TypeScript developer',
  services: [
    {
      index: '01',
      label: 'Migration',
      title: 'Moving off legacy',
      body: 'AngularJS, jQuery and vanilla JavaScript to React and TypeScript. I contributed to this kind of work at OVHcloud and Axa France, on customer portals in production, with no service interruption.',
    },
    {
      index: '02',
      label: 'Performance',
      title: 'Giving control back to the user',
      body: 'Core Web Vitals, bundle size, code splitting, lazy loading, server rendering with Next.js. The area where you recover the most loading time for the least effort.',
    },
    {
      index: '03',
      label: 'Architecture',
      title: 'Letting several teams coexist',
      body: 'Design systems, micro-frontends, monorepos, internal libraries published to a private registry. Enough for each product team to ship without waiting on the others, including across several countries.',
    },
  ],
};
