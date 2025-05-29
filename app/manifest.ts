import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Muhammed Saeed',
    short_name: 'Saeed',
    description: 'Muhammed Saeed - React native engineer',
    start_url: '/',
    display: 'standalone',
    background_color: '#0C1D18',
    theme_color: '#0C1D18',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
