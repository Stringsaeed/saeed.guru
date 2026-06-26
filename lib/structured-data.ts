import { format } from 'date-fns';

import { getAbsoluteUrlForOrigin } from '@/lib/site-url';

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

function getPersonId(siteOrigin: string) {
  return `${getAbsoluteUrlForOrigin(siteOrigin, '/')}#person`;
}

function getWebSiteId(siteOrigin: string) {
  return `${getAbsoluteUrlForOrigin(siteOrigin, '/')}#website`;
}

function getPersonStructuredData(siteOrigin: string) {
  return {
    '@id': getPersonId(siteOrigin),
    '@type': 'Person',
    description:
      'React Native Engineer specializing in mobile development, UI/UX, and AI-driven applications.',
    jobTitle: 'React Native Engineer',
    name: authorName,
    sameAs,
    url: getAbsoluteUrlForOrigin(siteOrigin, '/'),
  };
}

function getWebSiteStructuredData(siteOrigin: string) {
  return {
    '@id': getWebSiteId(siteOrigin),
    '@type': 'WebSite',
    author: {
      '@id': getPersonId(siteOrigin),
    },
    description: siteDescription,
    inLanguage: 'en-US',
    name: siteName,
    publisher: {
      '@id': getPersonId(siteOrigin),
    },
    url: getAbsoluteUrlForOrigin(siteOrigin, '/'),
  };
}

export function getBlogPostStructuredData(post: BlogPostStructuredDataInput, siteOrigin: string) {
  const url = getAbsoluteUrlForOrigin(siteOrigin, `/blog/posts/${post.slug}`);
  const publishedDate = format(new Date(post.date), 'yyyy-MM-dd');

  return {
    '@context': 'https://schema.org',
    '@id': `${url}#article`,
    '@type': 'BlogPosting',
    articleSection: post.tags,
    author: {
      '@id': getPersonId(siteOrigin),
      '@type': 'Person',
      name: authorName,
      url: getAbsoluteUrlForOrigin(siteOrigin, '/'),
    },
    dateModified: publishedDate,
    datePublished: publishedDate,
    description: post.description,
    headline: post.title,
    image: post.cover ? getAbsoluteUrlForOrigin(siteOrigin, post.cover) : undefined,
    inLanguage: 'en-US',
    isPartOf: {
      '@id': getWebSiteId(siteOrigin),
    },
    keywords: post.tags,
    mainEntityOfPage: {
      '@id': url,
      '@type': 'WebPage',
    },
    publisher: {
      '@id': getPersonId(siteOrigin),
      '@type': 'Person',
      name: authorName,
      url: getAbsoluteUrlForOrigin(siteOrigin, '/'),
    },
    url,
  };
}

export function getRootStructuredData(siteOrigin: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [getPersonStructuredData(siteOrigin), getWebSiteStructuredData(siteOrigin)],
  };
}
