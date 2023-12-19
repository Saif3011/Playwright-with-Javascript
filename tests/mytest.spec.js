import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill('saif');
  await page.getByPlaceholder('Name').press('Tab');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('saif@example.com');
  await page.getByRole('button', { name: 'Signup' }).click();
});