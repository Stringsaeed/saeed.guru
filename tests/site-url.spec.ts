import { expect, test } from '@playwright/test';

import { getAbsoluteUrl, getSiteUrl } from '@/lib/site-url';

const originalSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

test.describe.configure({ mode: 'serial' });

test.afterEach(() => {
  if (originalSiteUrl === undefined) {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    return;
  }

  process.env.NEXT_PUBLIC_SITE_URL = originalSiteUrl;
});

test.describe('site URL helper', () => {
  test('returns a valid site origin', () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'https://example.com';

    expect(getSiteUrl()).toBe('https://example.com');
    expect(getAbsoluteUrl('/blog')).toBe('https://example.com/blog');
  });

  test('normalizes a trailing slash', () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'https://example.com/';

    expect(getSiteUrl()).toBe('https://example.com');
  });

  test('throws when the site URL is missing', () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;

    expect(() => getSiteUrl()).toThrow(
      'NEXT_PUBLIC_SITE_URL must be set to an absolute http(s) origin.'
    );
  });

  test('throws when the site URL is invalid', () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'ftp://example.com';

    expect(() => getSiteUrl()).toThrow('NEXT_PUBLIC_SITE_URL must use the http or https protocol.');
  });

  test('throws when the site URL includes a path', () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'https://example.com/blog';

    expect(() => getSiteUrl()).toThrow(
      'NEXT_PUBLIC_SITE_URL must be an origin only, without a path, query, or hash.'
    );
  });
});
