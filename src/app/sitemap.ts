import type { MetadataRoute } from 'next';

const siteUrl = 'https://portfolio-rupam.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      images: [`${siteUrl}/images/rupam-profile.jpg`],
    },
  ];
}
