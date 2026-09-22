import { test, expect } from '@playwright/test';

test('Git Demo Test', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Swag Labs/);
});
console.log('Running Git feature branch test');