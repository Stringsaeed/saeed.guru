import type { MetadataRoute } from 'next';

import { getAbsoluteUrl } from '@/lib/site-url';

export const dynamic = 'force-dynamic';

export default async function robots(): Promise<MetadataRoute.Robots> {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: await getAbsoluteUrl('/sitemap.xml'),
  };
}
