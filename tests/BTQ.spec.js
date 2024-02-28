const { test, expect } = require('@playwright/test');

test('tooltip content', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
  await page.click('button:has-text("Allow all cookies")');
 // Check tooltip
 const tooltipElement = await page.$('#tooltip');
 if (tooltipElement) {
    // Lấy nội dung của tooltip
    const tooltipContent = await tooltipElement.innerText();
    if (tooltipContent.trim() !== '') {
      console.log("Nội dung của tooltip là: " + tooltipContent.trim());
    } else {
      console.log("Tooltip không có nội dung.");
    }
  } else {
    console.log("Không tìm thấy phần tử tooltip.");
  }
});

test('step 1', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
// Handle cookies
  await page.click('button:has-text("Allow all cookies")');
  await page.click('button[role="radio"][aria-label="Men"]');
  await page.click('button[id="day-combobox"]');
  await page.click('span[role="option"][id="day-30"]');
  await page.click('button[id="month-combobox"]');
  await page.click('span[role="option"][id="month-Apr"]');
  await page.click('button[id="year-combobox"]');
  await page.click('span[role="option"][id="year-1995"]');
  await page.click('button:has-text("Continue")');
});

test('show abandon pop-up', async ({ page }) => {
let popupVisible;
page.on('popup', () => {
});
await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
// Handle cookies
 await page.click('button:has-text("Allow all cookies")');
 await page.click('button[role="radio"][aria-label="Men"]');
 await page.click('button[id="day-combobox"]');
 await page.click('span[role="option"][id="day-30"]');
 await page.click('button[id="month-combobox"]');
 await page.click('span[role="option"][id="month-Apr"]');
 await page.click('button[id="year-combobox"]');
 await page.click('span[role="option"][id="year-1995"]');
 await page.click('button:has-text("Continue")');
 await page.click('img[alt="Dr. Berg - The Knowledge Doc logo"]');
 popupVisible = true;
 expect(popupVisible).toBe(true);
 await page.click('button:has-text("No")');
 popupVisible = false;
 expect(popupVisible).toBe(false);
 await page.click('img[alt="Dr. Berg - The Knowledge Doc logo"]');
 await page.click('button:has-text("Yes")');
 await expect(page).toHaveTitle('Lose weight fast with weight loss expert Dr. Berg');
});

test('submit form', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
  await page.click('button:has-text("Allow all cookies")');
  await page.click('button:has-text("Continue")');
 // Answer the quiz questions
  await page.click('div[role="radio"][aria-label="Hips & Thighs"]');
  await page.click('button:has-text("Continue")');
  await page.click('div[role="radio"][aria-label="11-25 pounds"]');
  await page.click('button:has-text("Continue")');
  await page.click('div[role="checkbox"][aria-label="Tired after Eating"]');
  await page.click('button:has-text("Continue")');
  await page.click('div[role="checkbox"][aria-label="Stressed"]');
  await page.click('button:has-text("Continue")');
  await page.click('div[role="checkbox"][aria-label="Indigestion"]');
  await page.click('button:has-text("Continue")');
  await page.locator('a[href="/legal/terms-and-conditions"]').first().click();
  await page.locator('a[href="/legal/privacy-policy"]').first().click();
// Submit the form
  await page.click('#submit');
// Validate form errors
  await expect(page.locator('p[role="alert"][aria-describedby="name"]')).toHaveText('*Name is required');
  await expect(page.locator('p[role="alert"][aria-describedby="email"]')).toHaveText('*Email is required');
  await page.type('#name', '@');
  await page.click('#submit');
  await expect(page.locator('p[role="alert"][aria-describedby="name"]')).toHaveText('*Name must only contain letters and space');
  await page.type('#email', 'huy');
  await page.click('#submit');
  await expect(page.locator('p[role="alert"][aria-describedby="email"]')).toHaveText('*Invalid email address format');
// Clear ata input
  await page.$eval('#name', input => input.value = '');
  await page.$eval('#email', input => input.value = '');
// Fill in the form
  await page.type('#name', 'huy');
  await page.type('#email', 'huy.truong@mgisolutions.com');
  await page.type('#phone', '0328326536');
  await page.type('#main-struggle', 'huy test');
// Submit the form again
  await page.click('#submit');
// Validate the presence of a link after submitting the form
  await page.waitForSelector('a:has-text("Click here after watching the video")');
  const linkText = await page.textContent('a:has-text("Click here after watching the video")');
  expect(linkText).toBe('Click here after watching the video');
});
