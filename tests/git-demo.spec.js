import { test, expect } from '@playwright/test';

test('Git demo test - MAIN VERSION', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Swag Labs/);
});
console.log('Running Git feature branch test');