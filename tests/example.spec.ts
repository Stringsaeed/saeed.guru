import { expect, test } from '@playwright/test';

test.describe('Homepage', () => {
  test('has correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Muhammed Saeed/);
  });

  test('renders nav with site name', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Saeed', level: 1 })).toBeVisible();
  });

  test('navigates to blog page', async ({ page }) => {
    await page.goto('/blog');
    await expect(page).toHaveURL(/\/blog/);
  });
});
