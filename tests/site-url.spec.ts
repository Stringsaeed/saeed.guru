import { expect, test } from '@playwright/test';

import { getAbsoluteUrl, getSiteOrigin } from '@/lib/site-url';

const originalSiteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

test.describe.configure({ mode: 'serial' });

test.afterEach(() => {
  if (originalSiteUrl === undefined) {
    delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
    return;
  }

  process.env.VERCEL_PROJECT_PRODUCTION_URL = originalSiteUrl;
});

test.describe('site URL helper', () => {
  test('uses the Vercel production domain as the site origin', () => {
    process.env.VERCEL_PROJECT_PRODUCTION_URL = 'example.com';

    expect(getSiteOrigin()).toBe('https://example.com');
    expect(getAbsoluteUrl('/blog')).toBe('https://example.com/blog');
  });

  test('accepts an absolute URL value', () => {
    process.env.VERCEL_PROJECT_PRODUCTION_URL = 'https://example.com/';

    expect(getSiteOrigin()).toBe('https://example.com');
  });

  test('throws when the production domain is missing', () => {
    delete process.env.VERCEL_PROJECT_PRODUCTION_URL;

    expect(() => getSiteOrigin()).toThrow(
      'VERCEL_PROJECT_PRODUCTION_URL must be set to the production domain.'
    );
  });

  test('throws when the production domain includes a path', () => {
    process.env.VERCEL_PROJECT_PRODUCTION_URL = 'example.com/blog';

    expect(() => getSiteOrigin()).toThrow(
      'VERCEL_PROJECT_PRODUCTION_URL must be a domain only, without a path, query, or hash.'
    );
  });
});
