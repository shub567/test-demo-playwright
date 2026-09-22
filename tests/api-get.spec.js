import { test, expect } from '@playwright/test';

test('GET User API', async ({ request }) => {

  // API ko GET request bhejna
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  // Status code validate karna
  expect(response.status()).toBe(200);

  // Response ko JSON mein convert karna
  const data = await response.json();

  //second step
  console.log(data);

  // Important response fields validate karna
  expect(data.id).toBe(1);
 expect(data.name).toBe('Leanne Graham');
expect(data.email).toBe('Sincere@april.biz');

});