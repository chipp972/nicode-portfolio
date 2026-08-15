import type { About } from '../schema';

export const about: About = {
  eyebrow: 'Approach',
  title: 'Nine years on applications you cannot switch off',
  paragraphs: [
    "Full stack developer since 2017, without interruption, on high-traffic business-critical web applications: OVHcloud's customer portal, Axa France's customer portal, and the embedded interface of Canal+ set-top boxes.",
    'I work with large organisations and scale-ups: the places where several product teams move in parallel on the same codebase, where performance and compliance are not negotiable, and where a migration has to happen without ever taking the service down.',
    'My core skill set comes down to three things. Migrating legacy codebases to React and TypeScript without interrupting the service. Designing reusable components and shipping them to the teams that consume them. Being accountable for the real cost of whatever reaches the browser.',
    "My centre of gravity is still the front end, but I do not stop at the browser boundary. I contributed to the NestJS work on the BFF behind OVHcloud's customer portal, and I have been working with Node.js and Next.js server rendering since Axa France and on my own projects. The shape of an API, the number of round trips it forces, what gets computed on the server rather than in the browser: those trade-offs are made on both sides of that boundary.",
    'I use Claude Code and GitHub Copilot daily: I structure codebases so that assisted generation stays maintainable, and I keep human review as the checkpoint before every PR.',
  ],
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
      body: 'Design systems, micro-frontends, monorepos, internal libraries published to a private registry, a BFF layer between the front end and the business APIs. Enough for each product team to ship without waiting on the others, including across several countries.',
    },
  ],
};
