const {test,expect} =require('@playwright/test')

test('handle checkbox',async({page})=>{
    await page.goto('file:///C:/Users/ASUS/OneDrive/Desktop/interaction.html');
    // await page.locator('//input[@type="checkbox" and @name="audi"]').check();
    // await page.check('//input[@type="checkbox" and @name="fiat"]')
    // expect(await page.locator('//input[@type="checkbox" and @name="audi"]')).toBeChecked();
    // expect(await page.locator('//input[@type="checkbox" and @name="audi"]').isChecked()).toBeTruthy();
    // expect(await page.locator('//input[@type="checkbox" and @name="audi"]').isChecked()).toBeFalsy();
    // await page.waitForTimeout(5000)

    //Multiple checkboxes
    const checkboxLocator = [
        '//input[@type="checkbox" and @name="mercedes"]',
     '//input[@type="checkbox" and @name="fiat"]'
    
    ];

    for(const locat of checkboxLocator )//select multiple checkboxes
    {
        await page.locator(locat).check()
    }
    await page.waitForTimeout(5000)
    for(const locat of checkboxLocator )//unselect multiple checkboxes which are already selected

    {
        if(await page.locator(locat).isChecked())
        await page.locator(locat).uncheck()
    }
    await page.waitForTimeout(5000)
})