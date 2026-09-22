import { test, expect } from '@playwright/test';

test('API to UI example', async ({ request, page }) => {

  // API se data liya
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  expect(response.status()).toBe(200);

  const user = await response.json();

  // API se name nikala
  const userName = user.name;

  console.log(userName);

  // UI open ki
  await page.goto(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  // API se mila same data UI mein verify kiya
  await expect(page.locator('body')).toContainText(userName);
});