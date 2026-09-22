import { test, expect } from '../fixtures/testFixtures.js';

test('Login using custom fixture', async ({ loginPage, page }) => {

  await page.goto('/');

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await expect(page).toHaveURL(/inventory/);

});