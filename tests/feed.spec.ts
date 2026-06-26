import { expect, test } from '@playwright/test';

test.describe('RSS feed', () => {
  test('serves published posts with absolute URLs', async ({ request }) => {
    const response = await request.get('/feed.xml');
    const body = await response.text();
    const siteUrl = 'https://saeed.guru';

    expect(response.ok()).toBe(true);
    expect(response.headers()['content-type']).toContain('application/rss+xml');
    expect(body).toContain('<rss version="2.0"');
    expect(body).toContain(`<atom:link href="${siteUrl}/feed.xml"`);
    expect(body).toContain('<title>React Native Underlay Sheet UI</title>');
    expect(body).toContain(`<link>${siteUrl}/blog/posts/react-native-underlay-sheet</link>`);
    expect(body).toContain('<title>Dark Mode in React Native</title>');
    expect(body).toContain(`<link>${siteUrl}/blog/posts/dark-mode-react-native</link>`);
  });
});
