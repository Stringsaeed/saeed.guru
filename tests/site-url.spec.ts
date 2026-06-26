import { expect, test } from '@playwright/test';

import { getAbsoluteUrlForOrigin, getSiteOriginFromHeaders } from '@/lib/site-url';

test.describe('site URL helper', () => {
  test('uses the request host as the site origin', () => {
    const headers = new Headers({ host: 'app1.com' });

    expect(getSiteOriginFromHeaders(headers)).toBe('https://app1.com');
    expect(getAbsoluteUrlForOrigin('https://app1.com', '/blog')).toBe('https://app1.com/blog');
  });

  test('prefers forwarded host and protocol headers', () => {
    const headers = new Headers({
      host: 'internal.vercel.app',
      'x-forwarded-host': 'app2.com',
      'x-forwarded-proto': 'https',
    });

    expect(getSiteOriginFromHeaders(headers)).toBe('https://app2.com');
  });

  test('uses http for localhost requests', () => {
    const headers = new Headers({ host: 'localhost:3000' });

    expect(getSiteOriginFromHeaders(headers)).toBe('http://localhost:3000');
  });

  test('falls back to the primary production domain when host is missing', () => {
    expect(getSiteOriginFromHeaders(new Headers())).toBe('https://saeed.guru');
  });
});
