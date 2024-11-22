import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Demian\'s Bolog',
    short_name: 'DD',
    description: 'Next.js App',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '../../public/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}