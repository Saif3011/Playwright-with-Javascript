const {test,expect} =require('@playwright/test')
test('Built-in Locators -getByAltText',async({page})=>{
// locate an element which have ALT attribute , usually , image by its text alternative
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
const logo =  page.getByAltText('company-branding')
await expect(logo).toBeVisible();
}) 
test('Built-in Locators -getByPlaceholder',async({page})=>{
    // locate an input by placeholder
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await expect(logo).toBeVisible();
    }) 
    test('Built-in Locators -getByRole',async({page})=>{
        // locate an element by role 
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       await page.getByRole('button',{type:'submit'}).click()
        }) 
     test('Built-in Locators -getByText',async({page})=>{
            // locate an element by text
            await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            const DashboardTxt= await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
         await expect(await page.getByText(DashboardTxt)).toBeVisible()
         
            }) 