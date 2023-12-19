const {test,expect} = require('@playwright/test')
test('Locators',async({page})=>{
await page.goto("https://www.demoblaze.com/index.html")
//locator two way
//locate and perform 
await page.locator("id=login2").click();
//await page.click("login2");


//await page.locator("#loginusername").fill("saif Allah");
await page.fill("#loginusername","saif Allah")
await page.fill("#loginpassword","dakhaloui")
await page.click("//button[normalize-space()='Log in']")
//verify logout button
//const logoutLink = await page.locator("//button[normalize-space()='Log out']");
    //await expect(logoutLink).toBeVisible();
    //locate multiple webElement
   
})