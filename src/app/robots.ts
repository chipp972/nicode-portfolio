import type { MetadataRoute } from 'next';

/** Remplace `gatsby-plugin-robots-txt`. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/fr/mentions-legales', '/en/mentions-legales', '/fr/credits', '/en/credits'],
    },
    sitemap: 'https://nicode.fr/sitemap.xml',
  };
}
