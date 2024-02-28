const { test, expect } = require('@playwright/test');

test('require field', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/add-client-success-story');
 // Handle cookies
  await page.click('button:has-text("Allow all cookies")');
  await page.click('button:has-text("Submit")');
  await expect(page.locator('span[role="alert"][aria-describedby="inputName"]')).toHaveText('*Name is required');
  await expect(page.locator('span[role="alert"][aria-describedby="inputEmail"]')).toHaveText('*Email is required');
  await expect(page.locator('span[role="alert"][aria-describedby="inputTitle"]')).toHaveText('*Title is required');
  await expect(page.locator('span[role="alert"][aria-describedby="inputStore"]')).toHaveText('*Story is required');
  await expect(page.locator('span[role="alert"][aria-describedby="inputCapcha"]')).toHaveText('*Captcha is required');

});

test('your name', async ({ page }) => {
    await page.goto('https://devdrbergstorage.z20.web.core.windows.net/add-client-success-story');
   // Handle cookies
    await page.click('button:has-text("Allow all cookies")');
    await page.type('#inputName', '@');
    await page.click('button:has-text("Submit")');
    await expect(page.locator('span[role="alert"][aria-describedby="inputName"]')).toHaveText('*Name must only contain letters and space');
});

test('email', async ({ page }) => {
    await page.goto('https://devdrbergstorage.z20.web.core.windows.net/add-client-success-story');
   // Handle cookies
    await page.click('button:has-text("Allow all cookies")');
    await page.type('#inputEmail', 'huy');
    await page.click('button:has-text("Submit")');
    await expect(page.locator('span[role="alert"][aria-describedby="inputEmail"]')).toHaveText('*Invalid email address format');
});

test('capcha', async ({ page }) => {
    await page.goto('https://devdrbergstorage.z20.web.core.windows.net/add-client-success-story');
   // Handle cookies
    await page.click('button:has-text("Allow all cookies")');
    await page.type('#inputCapcha', 'test');
    await page.click('button:has-text("Submit")'); 
    await expect(page.locator('span[role="alert"][aria-describedby="inputCapcha"]')).toHaveText('*Captcha is incorrect');
});

test('file', async ({ page }) => {
    await page.goto('https://devdrbergstorage.z20.web.core.windows.net/add-client-success-story');
    await page.click('button:has-text("Allow all cookies")');
    await page.click('label.file--label.svelte-nijzk8'); 
    await page.setInputFiles('input[type="file"]', '/Users/truonggiahuy/Documents/z4340666150686_49c287aeaa4fc18c6e0576981eabdb49.jpg');
    const fileNameElement = await page.$('span.file--name.svelte-nijzk8');
    const fileName = await fileNameElement.textContent();
    expect(fileName.trim()).toEqual('z4340666150686_49c287aeaa4fc18c6e0576981eabdb49.jpg'); 
});

test('language', async ({ page }) => {
    await page.goto('https://devdrbergstorage.z20.web.core.windows.net/add-client-success-story');
    await page.click('button:has-text("Allow all cookies")');
    await page.click('.ddl--current.select-none.svelte-nijzk8'); 
    await page.click('li.flex.items-center.bg-gray-lighter.svelte-nijzk8');
    const isSelected = await page.$eval('li.flex.items-center.bg-gray-lighter.svelte-nijzk8', element => element.getAttribute('aria-selected') === 'true');
    expect(isSelected).toBeTruthy();
});

test('submit', async ({ page }) => {
    await page.goto('https://devdrbergstorage.z20.web.core.windows.net/add-client-success-story');
   // Handle cookies
    await page.click('button:has-text("Allow all cookies")');
    await page.type('#inputName', 'huy');
    await page.type('#inputEmail', 'huy.truong@mgisolutions.com');
    await page.type('#inputTitle', 'title');
    await page.type('#inputStore', 'story'); 
    await page.click('label.file--label.svelte-nijzk8'); 
    await page.setInputFiles('input[type="file"]', '/Users/truonggiahuy/Documents/z4340666150686_49c287aeaa4fc18c6e0576981eabdb49.jpg');
    const captchaText = await page.$eval('div.image-captcha label', element => element.textContent.trim());
    console.log('Captcha:', captchaText);
    await page.fill('input#inputCapcha', captchaText);
    await page.click('button:has-text("Submit")')
    await page.waitForSelector('h1:has-text("Thank you!")');
    const thankYouText = await page.textContent('h1:has-text("Thank you!")');
    await expect(thankYouText).toContain('Thank you!');
});

test('i icon', async ({ page }) => {
    let popupVisible;
    page.on('popup', () => {
});
    await page.goto('https://devdrbergstorage.z20.web.core.windows.net/add-client-success-story');
   // Handle cookies
    await page.click('button:has-text("Allow all cookies")');
    await page.click('svg[aria-hidden="true"]');
    popupVisible = true;
    expect(popupVisible).toBe(true); 
    await page.click('svg[aria-hidden="true"]')
    popupVisible = false;
    expect(popupVisible).toBe(false);

});

test('view tip', async ({ page }) => {
    let popupVisible;
    page.on('popup', () => {
});
    await page.goto('https://devdrbergstorage.z20.web.core.windows.net/add-client-success-story');
   // Handle cookies
    await page.click('button:has-text("Allow all cookies")');
    await page.click('.prompts--message.select-none.svelte-nijzk8');
    popupVisible = true;
    expect(popupVisible).toBe(true); 
    await page.click('.nav--esc.svelte-nijzk8');
    popupVisible = false;
    expect(popupVisible).toBe(false)
});

test('view tip 2', async ({ page }) => {
    let popupVisible;
    page.on('popup', () => {
});
    await page.goto('https://devdrbergstorage.z20.web.core.windows.net/add-client-success-story');
   // Handle cookies
    await page.click('button:has-text("Allow all cookies")');
    await page.click('.prompts--message.select-none.svelte-nijzk8');
    popupVisible = true;
    expect(popupVisible).toBe(true); 
    await page.click('.nav--esc.svelte-nijzk8');
    popupVisible = false;
    expect(popupVisible).toBe(false)
});












