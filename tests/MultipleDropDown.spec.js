const { test, expect } = require('@playwright/test');

test('Handle Multi select DropDown', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
     //Scroll to view 
    //  await page.evaluate(() => {
    //     window.scrollBy(0, 1000);
    //   });
      //Select multiple option from multi select DropDown
  //  await page.selectOption('#colors',['Red','Yellow'])

   //Assertion
   //1) Check number of options in dropdown
//    const options =await page.locator('#colors option')
//    await expect(options).toHaveCount(5)
    //2) Check number of options in dropdown using js Array
//    const options2= await page.$$('#colors option')
//    console.log('Number of options is :',options2.length);
  // await expect(options2.length).toBe(5)
   //3) Check presence of value in dropDown
   const content= await page.locator('#colors').textContent()
await expect(content.includes('Red')).toBeTruthy()









    await page.waitForTimeout(5000)
});
