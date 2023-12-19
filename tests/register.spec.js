const { test, expect,popup } = require('@playwright/test');
//import {test} from '@playwright/test'
test('register with valid credentials' ,async({page})=>{
    await page.goto('https://automationexercise.com/login');
    await page.locator("input[placeholder='Name']").fill('saif')
    await page.locator("input[data-qa='signup-email']").fill('saif@example.com')
    await page.locator("button[data-qa='signup-button']").click();
    const welcomeMessageInf=  page.locator("//b[normalize-space()='Enter Account Information']");
    await expect(welcomeMessageInf).toHaveText('Enter Account Information');
})
test('register without name but with a correct email' ,async({page})=>{
    await page.goto('https://automationexercise.com/login');
    await page.locator("input[placeholder='Name']").fill('');
    await page.locator("input[data-qa='signup-email']").fill('saif@example.com')
 //Enable dialog window
 page.on('dialog', async dialog => {
    console.log(dialog.message);
      expect(dialog.message).toContain('0');
   })
  

    await page.locator("button[data-qa='signup-button']").click();
   
})
test('register with correct name and invalid email' ,async({page})=>{
    await page.goto('https://automationexercise.com/login');
    await page.locator("input[placeholder='Name']").fill('saif');
    await page.locator("input[data-qa='signup-email']").fill('saifexample.com')
    await page.locator("button[data-qa='signup-button']").click();
    //Get all popups when they open
    page.on('popup', async popup => {
        await popup.waitForLoadState();
       //console.log(dialog.innerText());
       // await expect(popup).toHaveText('');
      })
      await expect(popup).toHaveText('Veuillez renseigner ce champ .');

      
      
})