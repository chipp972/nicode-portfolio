import type { MetadataRoute } from 'next';

/** Remplace `gatsby-plugin-manifest`. Les couleurs suivent les tokens de `globals.css`. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nicode — Nicolas Pierre-Charles',
    short_name: 'Nicode',
    description:
      'Développeur full stack React et TypeScript freelance : migration legacy, web performance, architecture front.',
    start_url: '/',
    display: 'standalone',
    background_color: '#edeff3',
    theme_color: '#1f3be0',
    icons: [
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/maskable_icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
