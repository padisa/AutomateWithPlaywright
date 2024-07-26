const { test, expect } = require('@playwright/test');
const xpath = require('../properties/xpath.spec');
const url = require('../properties/urls.spec');

test('Testing OLX page', async ({ page }) => {

    page.on('console', async (msg) => {
        const msgArgs = msg.args();
        const logValues = await Promise.all(msgArgs.map(async arg => await arg.jsonValue()));
        console.log(...logValues);
    });

    console.log('Navigating to OLX.ba Home Page.');
    await page.goto(url.home_page_URL);

    console.log('Cheking if dialog is visible to click on agree button.');
    const dialog = page.locator(xpath.home_page_dialog)

    try {

        await dialog.waitFor({ state: 'visible', timeout: 5000 });

        if (await dialog.isVisible()) {
            console.log('Dialog is visible, clicking on agree button');
            await page.locator(xpath.home_page_agree_button).click();
        } else {
            console.log('Dialog is not visible');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }

    console.log('Cheking title of the page.');
    const pageTitle = await page.title();
    await expect(pageTitle).toContain('OLX.ba');

    console.log('Cheking if logo of the page is visible.');
    const logo_of_the_page = await page.locator(xpath.home_page_olx_logo);
    await expect(logo_of_the_page).toBeVisible();

    const key_categories = "Categories";
    let xpath_categories = "";

    console.log('Check presence of the list elements on home page');
    for (const [key, selector] of Object.entries(xpath.home_page_list_elements)) {
        const element_in_list = await page.locator(selector);
        if (key === key_categories) {
            xpath_categories = selector;
        }
        await expect(element_in_list).toBeVisible();
    }

    console.log('Click on categories and choose Cars');
    if (xpath_categories) {
        await page.click(xpath_categories);
        console.log(`Clicked on ${xpath_categories}`);
    }

});