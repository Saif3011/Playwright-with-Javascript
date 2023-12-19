const {test,expect} =require('@playwright/test')

test('handle DropDowns',async({page})=>{
    await page.goto('file:///C:/Users/ASUS/OneDrive/Desktop/interaction.html');
    //Scroll to view 
    await page.evaluate(() => {
        window.scrollBy(0, 1200);
      });
    //Multiple way to select option from the drop down
   // await page.locator('#test-tools').selectOption({value:'cypress'})  //by value : visible text
  // await page.locator('#test-tools').selectOption('cypress') // by visible text directly
   // await page.locator('#test-tools').selectOption('postman') // by visible text directly
    //await page.locator('#test-tools').selectOption({index:0}) //by using index
   // await page.selectOption('#test-tools','playwright') //by text

/*Assertion in dropDown*/
//1) Check number of options in dropdown-- Approache 1
//const options= await page.locator('#test-tools option')
//expect(options).toHaveCount(5);

//2) Check number of options in dropdown --Approache 2  return array
// const options= await page.$$('#test-tools option')
// console.log("number of options is:", options.length);
// await expect(options.length).toBe(5)

//3) Check presence of value in dropdown -- Approache 1
//const content =await page.locator('#test-tools').textContent()
//await expect(content.includes('Cypress')).toBeTruthy()

//4) Check presence of value in dropdown -- Approache 2 --using looping

// const options =await page.$$('#test-tools option')  //capture all of the elements
// let status= false;
// for(const opt of options)   //forlooping on each element
// {
//     //console.log(await opt.textContent());
//     let value = await opt.textContent(); //reading element  and store in value
//     if(value.includes('selenium'))
//     {
// status= true;
// break;
//     }
// }
// expect(status).toBeTruthy();
//     await page.waitForTimeout(5000)
    //5) Select value from dropdown -- Approache 2 --using looping

const options =await page.$$('#test-tools option')  //capture all of the elements
for(const opt of options)   //forlooping on each element
{
    let value = await opt.textContent(); //reading element  and store in value
    if(value.includes('Playwright'))
    {
await page.selectOption('#test-tools',value)
break;
    }
}

    await page.waitForTimeout(5000)
})