import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kumari Rupam Portfolio',
    short_name: 'Kumari Rupam',
    description: 'Portfolio of Kumari Rupam, Data Analytics Professional.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#08090d',
    theme_color: '#08090d',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/images/rupam-profile-2.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
