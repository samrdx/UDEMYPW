const {test} = require('@playwright/test');

test('Browser context test', async ({browser})=> 
{
//chrome - plugins/cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://elcarniceroqa.bermanntms.cl/login");
});

test.only('Page Playwright test', async ({page})=> 
{   const userName = page.locator('#login-usuario');
    const password = page.locator('#login-clave');
    const loginButton = page.locator('[type="submit"]');
    await page.goto("https://elcarniceroqa.bermanntms.cl/login");
    // get title - assertion 
    console.log(await page.title());
    // css, xpath
    await userName.fill('arivas');
    await password.fill('arivas');
    //wait until this locator show the main page
    await loginButton.click();
    await page.waitForURL("https://elcarniceroqa.bermanntms.cl/site");
    await page.locator('button[title="No hay selección"] div[class="filter-option-inner-inner"]').click();
    await page.locator('//span[normalize-space()="Casa Carne"]').first().click();
});