import { test, expect } from '@playwright/test';
const LoginPage = require('../pages/LoginPage.js');
const users = require('../test-data/users.json');


//env data
//const env = 'prod';
//const envData = require(`../config/environments/${env}.json`);
/*for (const user of users.loginScenarios) {

  test(`SauceDemo Login - ${user.type}`, async ({ page }) => {
//step 3rd ab hum dono data eke chalaenge 0 hatayenge to upr wali line add ki hai for.. of se chalayenge
//const user = users.loginScenarios[0];
//test('SauceDemo Login', async ({ page }) => {
  await page.goto('/');

  const loginPage = new LoginPage(page);
//secondstep json se data lene ki parmaterization ki

//env daat use krne ke liye
await loginPage.login(
  envData.username,
  envData.password
);



 
 
 
 //1step thi
  await loginPage.login(
    users.loginScenarios[0].username,
    users.loginScenarios[0].password
  );

//step5
if (user.expectedResult === 'success') {

      await expect(page).toHaveURL(/inventory/);

    } else if (user.expectedResult === 'locked') {

      await expect(
        page.getByText('Epic sadface: Sorry, this user has been locked out.')
      ).toBeVisible();

    }


  //step 4 assertion fail hoga ise to upr wala use krenge concept
  //await expect(page).toHaveURL(/inventory/);
  await page.waitForTimeout(3000);
});
}*/

const env = 'qa';
const envData = require(`../config/environments/${env}.json`);
test('SauceDemo Login', async ({ page }) => {

  await page.goto('/');

  const loginPage = new LoginPage(page);

  await loginPage.login(
    envData.username,
    envData.password
  );

  await expect(page).toHaveURL(/inventory/);

});