import { test, expect } from '@playwright/test';

const { generateRandomEmail } = require('../utils/testDataUtils.js');

test('Signup using random email utility', async ({ page }) => {

  await page.goto('https://automationexercise.com/');

  // Signup/Login button
  await page.getByText('Signup / Login').click();

  // Enter name
  await page.getByPlaceholder('Name').fill('Shubham');

  // Generate random email using our utility
  const randomEmail = generateRandomEmail();

  console.log('Generated Email:', randomEmail);

  // Enter generated email
  await page
    .locator('input[data-qa="signup-email"]')
    .fill(randomEmail);

    //page.waitForTimeout(5000);
  // Click Signup
  await page.getByRole('button', { name: 'Signup' }).click();

  // Verify account information page
  await expect(
    page.getByText('Enter Account Information')
  ).toBeVisible();

});