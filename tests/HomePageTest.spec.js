const {test,expect} = require('@playwright/test')
test('Home Page',async({page})=>{
    //async  : written the promise
    //await : it will wait for the promise

    await page.goto('https://automationexercise.com/')
    const pageTitle =await page.title();
    console.log("page title is :" + pageTitle);
    expect(page).toHaveTitle('Automation Exercise');
//to print url 
const pageUrl = page.url();
console.log(pageUrl);
await expect(page).toHaveURL('https://automationexercise.com/');
await page.close();

//npx playwright test                                   : run all test on all browser in headless mode
//npx playwright test Mytest.spec.js                    : run a specific test file
//npx playwright test Mytest.spec.js --project=chromium : run a specific test file on specific browser 
//npx playwright test Mytest.spec.js --project=chromium --headed : run test on headed mode
//npx playwright test HomePageTest.spec.js --project=chromium --headed --debug : run on debug mode





})