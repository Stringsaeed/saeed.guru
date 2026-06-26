import type { MetadataRoute } from 'next';

import fs from 'fs';
import path from 'path';

import { getAllPosts } from '@/lib/posts';
import { getAbsoluteUrlForOrigin, getSiteOrigin } from '@/lib/site-url';

export const dynamic = 'force-dynamic';

function getFileLastModified(filePath: string) {
  return fs.statSync(path.join(process.cwd(), filePath)).mtime;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteOrigin = await getSiteOrigin();
  const posts = getAllPosts();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: getAbsoluteUrlForOrigin(siteOrigin, post.url),
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: getAbsoluteUrlForOrigin(siteOrigin),
      lastModified: getFileLastModified('app/page.tsx'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: getAbsoluteUrlForOrigin(siteOrigin, '/blog'),
      lastModified: getFileLastModified('app/blog/page.tsx'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: getAbsoluteUrlForOrigin(siteOrigin, '/husn-el-muslim'),
      lastModified: getFileLastModified('app/husn-el-muslim/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...postEntries,
  ];
}
