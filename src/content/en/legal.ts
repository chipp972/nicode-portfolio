import type { LegalPage } from '../schema';

export const legal: LegalPage = {
  title: 'Legal notice',
  updatedAt: 'In force as of 1 January 2021',
  intro:
    'In accordance with articles 6-III and 19 of French law no. 2004-575 of 21 June 2004 on confidence in the digital economy, known as the L.C.E.N.',
  sections: [
    {
      heading: 'Publisher',
      paragraphs: [
        'This site is published by EURL Nicode, with share capital of 50 euros, registered with the Créteil trade register under number 877 783 902, with its registered office at 15 B avenue de la République, France.',
        'Phone: +33 6 85 31 64 99. Email: nicolas@nicode.fr.',
        'Intra-community VAT number: FR83877783902.',
        'The publication director is Nicolas Pierre-Charles.',
      ],
    },
    {
      heading: 'Host',
      paragraphs: [
        'This site is hosted by Netlify, whose registered office is at 610 22nd Street, Suite 315, San Francisco, CA 94107, United States.',
        'Phone: 844-899-7312.',
      ],
    },
    {
      heading: 'Access to the site',
      paragraphs: [
        'The site is accessible from anywhere, 24 hours a day and 7 days a week, except in cases of force majeure or interruption, scheduled or otherwise, arising from maintenance requirements.',
      ],
    },
    {
      heading: 'Cookies',
      paragraphs: [
        'A cookie is an element that does not identify the user but records information about their browsing session.',
        'This site sets no analytics or advertising cookies. The scheduling widget is loaded only after an explicit action on your part.',
      ],
    },
    {
      heading: 'Intellectual property',
      paragraphs: [
        'Any use, reproduction, distribution, commercialisation or modification of all or part of this site without the publisher’s permission is prohibited.',
      ],
    },
  ],
};

export const credits: LegalPage = {
  title: 'Credits',
  updatedAt: 'Updated August 2026',
  intro: 'The graphic and typographic resources used on this site.',
  sections: [
    {
      heading: 'Typefaces',
      paragraphs: [
        'Fraunces, by Undercase Type. Distributed under the SIL Open Font License.',
        'Inter Tight, by Rasmus Andersson. Distributed under the SIL Open Font License.',
        'JetBrains Mono, by JetBrains. Distributed under the SIL Open Font License.',
        'All three typefaces are self-hosted: no request is made to a third-party service when the page loads.',
      ],
    },
    {
      heading: 'Illustrations and photography',
      paragraphs: [
        'Icons and illustrations by Freepik, illustration by vectorjuice.',
        'Photography from Unsplash: Safar Safarov, Thomas Kelley, Adeolu Eletu, Marvin Meyer, Marek Szturc, Campaign Creators, Austin Distel, Murai .hr and Lars Kienle.',
      ],
    },
    {
      heading: 'Design and build',
      paragraphs: [
        'Design and development: Nicolas Pierre-Charles.',
        'The source code of this site is public: github.com/chipp972/nicode-portfolio.',
      ],
    },
  ],
};
