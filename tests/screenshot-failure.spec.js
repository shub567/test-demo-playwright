import { test, expect } from '@playwright/test';

test('Failure Screenshot Demo', async ({ page }) => {

  // Application open karna
  await page.goto('/');

  // Specifically current page ka screenshot
  await page.screenshot({
    path: 'test-results/login-page-manual.png'
  });

  // Jaan-bujhkar wrong assertion
  // Taaki test fail ho aur retry par trace generate ho.
  await expect(page).toHaveTitle('Wrong Title');

});

