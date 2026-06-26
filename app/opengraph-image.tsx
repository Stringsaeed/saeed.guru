import { ImageResponse } from 'next/og';

import { getAbsoluteUrl } from '@/lib/site-url';

export const alt = 'Muhammed Saeed - React Native Engineer';
export const contentType = 'image/png';
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  const siteUrl = new URL(getAbsoluteUrl('/'));

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
            {siteUrl.host}
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
            Dubai, UAE
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 26,
            maxWidth: 900,
          }}
        >
          <div
            style={{
              fontSize: 86,
              fontWeight: 800,
              letterSpacing: 0,
              lineHeight: 0.95,
            }}
          >
            Muhammed Saeed
          </div>
          <div
            style={{
              color: '#d4d4d4',
              fontSize: 42,
              lineHeight: 1.18,
            }}
          >
            React Native engineer building fast, polished mobile products.
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
          <span>Portfolio</span>
          <span style={{ color: '#525252' }}>/</span>
          <span>Blog</span>
          <span style={{ color: '#525252' }}>/</span>
          <span>React Native</span>
        </div>
      </div>
    </div>,
    size
  );
}
