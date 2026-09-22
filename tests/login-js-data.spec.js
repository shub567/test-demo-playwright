/*import { test, expect } from '@playwright/test';

// Import the LoginPage Page Object.
// It contains locators and the reusable login() method.
const LoginPage = require('../pages/LoginPage.js');

// Import test data from the separate JavaScript data file.
// The same data can be reused by multiple test files.
const users = require('../test-data/users.js');

// Loop through every user in the test-data file.
// The same test logic will execute once for each dataset.
for (const user of users) {

  // Create a separate Playwright test for each user.
  // Example:
  // JS Data Login - positive
  // JS Data Login - negative
  test(`JS Data Login - ${user.type}`, async ({ page }) => {

    // Open the application.
    // '/' works because baseURL is configured in playwright.config.js.
    await page.goto('/');

    // Create LoginPage object and connect it with the current Playwright page.
    const loginPage = new LoginPage(page);

    // Reuse the login() method from LoginPage.
    // Username and password come from users.js, not from this test.
    await loginPage.login(
      user.username,
      user.password
    );

    // Validate the expected result defined in the test data.
    if (user.expectedResult === 'success') {

      // Positive scenario:
      // Successful login should navigate to inventory page.
      await expect(page).toHaveURL(/inventory/);

    } else if (user.expectedResult === 'locked') {

      // Negative scenario:
      // Locked user should see the locked-user error message.
      await expect(
        page.getByText(
          'Epic sadface: Sorry, this user has been locked out.'
        )
      ).toBeVisible();
    }

  });
}*/



import { test, expect } from '@playwright/test';

// LoginPage mein login ke locators aur login() method already available hai.
const LoginPage = require('../pages/LoginPage.js');

// users.js se reusable getLoginUser() function import kar rahe hain.
const { getLoginUser } = require('../test-data/users.js');


// Same test logic ko different test data ke saath run karne ke liye
// test data ko yahan select kar rahe hain.
const testUsers = [
  'positive',
  'negative'
];


// Har user type ke liye same test automatically create hoga.
for (const userType of testUsers) {

  test(`Login using JS data - ${userType}`, async ({ page }) => {

    // Application open karna.
    // '/' ka baseURL playwright.config.js se aa raha hai.
    await page.goto('/');


    // Current Playwright page ko LoginPage object ke saath connect karna.
    const loginPage = new LoginPage(page);


    // Reusable function call.
    // 'positive' denge → standard_user milega.
    // 'negative' denge → locked_out_user milega.
    const user = getLoginUser(userType);


    // LoginPage ka reusable login() method use kar rahe hain.
    // Username/password JS test-data function se aa rahe hain.
    await loginPage.login(
      user.username,
      user.password
    );


    // Positive user ke liye successful login verify karna.
    if (userType === 'positive') {

      await expect(page).toHaveURL(/inventory/);

    }


    // Negative user ke liye locked-user error verify karna.
    if (userType === 'negative') {

      await expect(
        page.getByText(
          'Epic sadface: Sorry, this user has been locked out.'
        )
      ).toBeVisible();

    }

  });

}