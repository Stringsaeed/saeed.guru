import type { MetadataRoute } from 'next';

import { getAbsoluteUrl } from '@/lib/site-url';

export default async function robots(): Promise<MetadataRoute.Robots> {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: getAbsoluteUrl('/sitemap.xml'),
  };
}
