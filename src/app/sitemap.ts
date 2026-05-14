import { MetadataRoute } from 'next';
import { siteInfo } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteInfo.url;
  const lastModified = new Date('2026-05-14');

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies/branding-designer`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies/web-engineer`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies/writer`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
