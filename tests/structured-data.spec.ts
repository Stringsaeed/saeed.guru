import type { Page } from '@playwright/test';

import { expect, test } from '@playwright/test';

interface JsonLdData {
  '@graph'?: JsonLdData[];
  '@id'?: string;
  '@type'?: string | string[];
  [key: string]: unknown;
}

async function getStructuredData(page: Page) {
  const scripts = await page.locator('script[type="application/ld+json"]').allTextContents();

  return scripts.flatMap((script) => {
    const data = JSON.parse(script) as JsonLdData;
    return data['@graph'] ?? [data];
  });
}

function hasSchemaType(data: JsonLdData, type: string) {
  const schemaType = data['@type'];

  return Array.isArray(schemaType) ? schemaType.includes(type) : schemaType === type;
}

test.describe('structured data', () => {
  test('renders Person and WebSite JSON-LD on the homepage', async ({ page }) => {
    await page.goto('/');
    const siteUrl = new URL(page.url()).origin;

    const structuredData = await getStructuredData(page);
    const person = structuredData.find((data) => hasSchemaType(data, 'Person'));
    const website = structuredData.find((data) => hasSchemaType(data, 'WebSite'));

    expect(person).toMatchObject({
      '@id': `${siteUrl}#person`,
      name: 'Muhammed Saeed',
      url: siteUrl,
    });
    expect(website).toMatchObject({
      '@id': `${siteUrl}#website`,
      name: 'Muhammed Saeed',
      url: siteUrl,
    });
  });

  test('renders BlogPosting JSON-LD on blog posts', async ({ page }) => {
    await page.goto('/blog/posts/dark-mode-react-native');
    const siteUrl = new URL(page.url()).origin;

    const structuredData = await getStructuredData(page);
    const article = structuredData.find((data) => hasSchemaType(data, 'BlogPosting'));

    expect(article).toMatchObject({
      '@id': `${siteUrl}/blog/posts/dark-mode-react-native#article`,
      description: 'Implementing Dark Mode in React Native: A Comprehensive Guide',
      headline: 'Dark Mode in React Native',
      mainEntityOfPage: {
        '@id': `${siteUrl}/blog/posts/dark-mode-react-native`,
        '@type': 'WebPage',
      },
      url: `${siteUrl}/blog/posts/dark-mode-react-native`,
    });
    expect(article?.author).toMatchObject({
      '@id': `${siteUrl}#person`,
      name: 'Muhammed Saeed',
    });
  });
});
