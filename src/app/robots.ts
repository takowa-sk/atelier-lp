import { MetadataRoute } from 'next';
import { siteInfo } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/static/'],
    },
    sitemap: `${siteInfo.url}/sitemap.xml`,
  };
}
