import { test, expect } from '@playwright/test';

const ageData = require('../test-data/ageData.json');

for (const data of ageData.ageScenarios) {

  test(`Age Boundary - ${data.type}`, async ({ page }) => {

    await page.goto('https://snipform.io/examples/advanced-validation/');

    const ageInput = page.locator('//input[@name="age"]');

    await ageInput.fill(data.age);
    await ageInput.press('Enter');

    await expect(ageInput).toHaveValue(data.age);

//second step
    if (Number(data.age) < 18) {
      await expect(
        page.locator("//span[text()='You must be 18 or older']")
      ).toBeVisible();
    } else {
      await expect(
        page.locator("//span[text()='You must be 18 or older']")
      ).not.toBeVisible();
    }

  });

}