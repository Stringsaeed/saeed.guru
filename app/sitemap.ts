import type { MetadataRoute } from 'next';

import fs from 'fs';
import path from 'path';

import { getAllPosts } from '@/lib/posts';
import { getAbsoluteUrl } from '@/lib/site-url';

function getFileLastModified(filePath: string) {
  return fs.statSync(path.join(process.cwd(), filePath)).mtime;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: getAbsoluteUrl(post.url),
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: getAbsoluteUrl(),
      lastModified: getFileLastModified('app/page.tsx'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: getAbsoluteUrl('/blog'),
      lastModified: getFileLastModified('app/blog/page.tsx'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: getAbsoluteUrl('/husn-el-muslim'),
      lastModified: getFileLastModified('app/husn-el-muslim/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...postEntries,
  ];
}
