import { getAllPosts } from '@/lib/posts';
import { getAbsoluteUrlForOrigin, getSiteOriginFromHeaders } from '@/lib/site-url';

const FEED_TITLE = 'Muhammed Saeed';
const FEED_DESCRIPTION =
  'React Native engineering notes, portfolio updates, and technical writing by Muhammed Saeed.';
const FEED_LANGUAGE = 'en-US';

export const dynamic = 'force-dynamic';

const xmlEntities: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
};

function escapeXml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => xmlEntities[character]);
}

function formatRssDate(date: string): string {
  return new Date(date).toUTCString();
}

export function GET(request: Request): Response {
  const siteUrl = getSiteOriginFromHeaders(request.headers);
  const feedUrl = getAbsoluteUrlForOrigin(siteUrl, '/feed.xml');
  const posts = getAllPosts();
  const lastBuildDate = posts[0] ? formatRssDate(posts[0].date) : new Date().toUTCString();

  const items = posts
    .map((post) => {
      const postUrl = getAbsoluteUrlForOrigin(siteUrl, post.url);
      const categories =
        post.tags?.map((tag) => `      <category>${escapeXml(tag)}</category>`).join('\n') ?? '';

      return [
        '    <item>',
        `      <title>${escapeXml(post.title)}</title>`,
        `      <link>${postUrl}</link>`,
        `      <guid isPermaLink="true">${postUrl}</guid>`,
        `      <description>${escapeXml(post.description)}</description>`,
        `      <pubDate>${formatRssDate(post.date)}</pubDate>`,
        categories,
        '    </item>',
      ]
        .filter(Boolean)
        .join('\n');
    })
    .join('\n');

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${siteUrl}</link>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>${FEED_LANGUAGE}</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <ttl>60</ttl>
${items}
  </channel>
</rss>
`;

  return new Response(feed, {
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
