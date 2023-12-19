//import {test} from '@playwright/test'
const { test, expect } = require('@playwright/test');
const exp = require('constants');

test.describe('Login functionnality',async({page})=>{

    test('Authentification with valid credential', async ({ page }) => {
        await page.goto('https://automationexercise.com/login');
      
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle('Automation Exercise Signup / login');
        //login
        await page.locator("input[placeholder='Name']").fill('saif');
        await page.locator("input[data-qa='signup-email']").fill('saif@example.com');
        await page.locator("button[data-qa='signup-button']").click();
       // await const welcomeMessage =
       // await expect(page.locator('', {nam: ''})).toBeVisible();
    
    
      });
      test('Authentification with invalid username and valid password', async ({ page }) => {
        await page.goto('https://automationexercise.com/login');
      
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle('Automation Exercise');
        //login
        await page.locator("input[placeholder='Name']").fill('f2f');
        await page.locator("input[data-qa='signup-email']").fill('saif@example.com');
        await page.locator("button[data-qa='signup-button']").click();
    
    
    
      });
      test('Authentification with invalid password and valid username', async ({ page }) => {
        await page.goto('https://automationexercise.com/login');
      
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle('Automation Exercise');
        //login
        await page.locator("input[placeholder='Name']").fill('f2f');
        await page.locator("input[data-qa='signup-email']").fill('saif@example.com');
        await page.locator("button[data-qa='signup-button']").click();
    
    
    
      });
})

