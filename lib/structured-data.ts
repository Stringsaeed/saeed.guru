import { format } from 'date-fns';

import { getAbsoluteUrl } from '@/lib/site-url';

interface BlogPostStructuredDataInput {
  cover?: string;
  date: string;
  description: string;
  slug: string;
  tags?: string[];
  title: string;
}

const authorName = 'Muhammed Saeed';
const siteName = 'Muhammed Saeed';
const siteDescription =
  'Portfolio of Muhammed Saeed, React Native Engineer with 7+ years of experience in mobile development, UI/UX, and AI-driven applications.';
const sameAs = [
  'https://linkedin.com/in/stringsaeed',
  'https://github.com/stringsaeed',
  'https://x.com/stringsaeed',
  'https://bsky.app/profile/saeed.guru',
];

function getPersonId() {
  return `${getAbsoluteUrl('/')}#person`;
}

function getWebSiteId() {
  return `${getAbsoluteUrl('/')}#website`;
}

function getPersonStructuredData() {
  return {
    '@id': getPersonId(),
    '@type': 'Person',
    description:
      'React Native Engineer specializing in mobile development, UI/UX, and AI-driven applications.',
    jobTitle: 'React Native Engineer',
    name: authorName,
    sameAs,
    url: getAbsoluteUrl('/'),
  };
}

function getWebSiteStructuredData() {
  return {
    '@id': getWebSiteId(),
    '@type': 'WebSite',
    author: {
      '@id': getPersonId(),
    },
    description: siteDescription,
    inLanguage: 'en-US',
    name: siteName,
    publisher: {
      '@id': getPersonId(),
    },
    url: getAbsoluteUrl('/'),
  };
}

export function getBlogPostStructuredData(post: BlogPostStructuredDataInput) {
  const url = getAbsoluteUrl(`/blog/posts/${post.slug}`);
  const publishedDate = format(new Date(post.date), 'yyyy-MM-dd');

  return {
    '@context': 'https://schema.org',
    '@id': `${url}#article`,
    '@type': 'BlogPosting',
    articleSection: post.tags,
    author: {
      '@id': getPersonId(),
      '@type': 'Person',
      name: authorName,
      url: getAbsoluteUrl('/'),
    },
    dateModified: publishedDate,
    datePublished: publishedDate,
    description: post.description,
    headline: post.title,
    image: post.cover ? getAbsoluteUrl(post.cover) : undefined,
    inLanguage: 'en-US',
    isPartOf: {
      '@id': getWebSiteId(),
    },
    keywords: post.tags,
    mainEntityOfPage: {
      '@id': url,
      '@type': 'WebPage',
    },
    publisher: {
      '@id': getPersonId(),
      '@type': 'Person',
      name: authorName,
      url: getAbsoluteUrl('/'),
    },
    url,
  };
}

export function getRootStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [getPersonStructuredData(), getWebSiteStructuredData()],
  };
}
