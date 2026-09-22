import { test, expect } from '@playwright/test';

test('POST Create User API', async ({ request }) => {

  // Request body jo server ko bhejni hai
  const requestBody = {
    name: 'test54',
    email: 'testing123@test.com'
  };

  // POST request
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/users',
    {
      headers: {
        'Content-Type': 'application/json'
      },
      data: requestBody
    }
  );


  // Status validate
  expect(response.status()).toBe(201);

  // Response body read
  const data = await response.json();

  console.log(data);

  // Response fields validate
  expect(data.name).toBe('test54');
  expect(data.email).toBe('testing123@test.com');
});