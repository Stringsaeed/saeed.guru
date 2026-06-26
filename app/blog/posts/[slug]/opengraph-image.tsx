import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';

import { getPostBySlug } from '@/lib/posts';
import { getAbsoluteUrl } from '@/lib/site-url';

export const alt = 'Blog post by Muhammed Saeed';
export const contentType = 'image/png';
export const dynamic = 'force-dynamic';
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image({ params }: PageProps<'/blog/posts/[slug]'>) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postUrl = new URL(await getAbsoluteUrl(post.url));

  return new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        background: '#0a0a0a',
        color: '#fafafa',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        padding: 72,
        width: '100%',
      }}
    >
      <div
        style={{
          border: '1px solid rgba(250, 250, 250, 0.14)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          padding: 56,
          width: '100%',
        }}
      >
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            style={{
              color: '#a3a3a3',
              fontSize: 28,
              letterSpacing: 0,
            }}
          >
            {postUrl.host}
          </div>
          <div
            style={{
              border: '1px solid rgba(250, 250, 250, 0.18)',
              borderRadius: 999,
              color: '#d4d4d4',
              fontSize: 24,
              padding: '12px 24px',
            }}
          >
            {post.readingTime}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
            maxWidth: 920,
          }}
        >
          <div
            style={{
              color: '#a3a3a3',
              fontSize: 30,
            }}
          >
            {post.formattedDate}
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: 0,
              lineHeight: 0.98,
            }}
          >
            {post.title}
          </div>
          <div
            style={{
              color: '#d4d4d4',
              fontSize: 34,
              lineHeight: 1.22,
            }}
          >
            {post.description}
          </div>
        </div>

        <div
          style={{
            alignItems: 'center',
            color: '#a3a3a3',
            display: 'flex',
            fontSize: 26,
            gap: 16,
          }}
        >
          <span>Muhammed Saeed</span>
          <span style={{ color: '#525252' }}>/</span>
          <span>React Native</span>
          <span style={{ color: '#525252' }}>/</span>
          <span>{post.tags?.[0] ?? 'Blog'}</span>
        </div>
      </div>
    </div>,
    size
  );
}
