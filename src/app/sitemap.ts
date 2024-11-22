import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://example.com',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://example.com/en',
          nb: 'https://example.com/nb',
          ja: 'https://example.com/ja',
          ru: 'https://example.com/ru',
        },
      },
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://example.com/blog',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://example.com/en/blog',
          nb: 'https://example.com/nb/blog',
          ja: 'https://example.com/ja/blog',
          ru: 'https://example.com/ru/blog',
        },
      },
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}