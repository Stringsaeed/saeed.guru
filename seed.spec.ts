import { expect, test } from '@playwright/test';

test.describe('Test group', () => {
  test('seed', async ({ page }) => {
    // generate code here.
    await page.goto('/');
    expect(page).toBeTruthy();
  });
});
