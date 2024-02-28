const { test, expect } = require('@playwright/test');

test('WEIGHT LOSS BODY TYPE QUIZ', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
  await page.click('button:has-text("Allow all cookies")');
 const pageTitle = await page.innerText('h1.text-xl.uppercase.font-bold.text-center');
 console.log('Page Title:', pageTitle)
});

test('PREPARATION PHASE', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
  await page.click('button:has-text("Allow all cookies")');
 // Check tooltip
 const paragraphText = await page.innerText('p.text-sm.uppercase.mb-1.text-center.svelte-1cpaak9');
 console.log('Paragraph Text:', paragraphText);
});

test('Please edit your settings', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
  await page.click('button:has-text("Allow all cookies")');
 // Check tooltip
 const headingText = await page.innerText('h2.text-xl.font-bold.text-center.svelte-1cpaak9');
 console.log('Heading Text:', headingText)
});

test('GENDER SELECTED: WOMEN', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
  await page.click('button:has-text("Allow all cookies")');
 // Check tooltip
 const headingText = await page.innerText('h2.text-sm.mb-1.uppercase.text-center.svelte-1cpaak9');
 console.log('Heading Text:', headingText);
});

test('Day', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
  await page.click('button:has-text("Allow all cookies")');
 // Check tooltip
 const labelText = await page.innerText('label[for="day-combobox"]');
 console.log('Label Text:', labelText);
}); 

test('Year', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
  await page.click('button:has-text("Allow all cookies")');
 // Check tooltip
 const labelText = await page.innerText('label[for="year-combobox"]');
 console.log('Label Text:', labelText);
}); 

test('Step 2: WEIGHT LOSS BODY TYPE QUIZ', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
 await page.click('button:has-text("Allow all cookies")');
 await page.click('button:has-text("Continue")');
 const pageTitle = await page.innerText('h1.text-xl.uppercase.font-bold.text-center');
 console.log('Page Title:', pageTitle)
}); 

test('Step 2: QUESTION 1', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
 await page.click('button:has-text("Allow all cookies")');
 await page.click('button:has-text("Continue")');
 const paragraphText = await page.innerText('p.text-sm.uppercase.mb-1.text-center');
console.log('Paragraph Text:', paragraphText);
}); 

test('Step 2: Where do you hold the weight?', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
 await page.click('button:has-text("Allow all cookies")');
 await page.click('button:has-text("Continue")');
 const headingText = await page.innerText('h2#question-1');
 console.log('Heading Text:', headingText);
}); 

test('Step 2: Tip: Select a single answer', async ({ page }) => {
await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
  // Handle cookies
await page.click('button:has-text("Allow all cookies")');
await page.click('button:has-text("Continue")');
const paragraphText = await page.innerText('p.text-sm.text-center.text-secondary-a-100.mt-2');
console.log('Paragraph Text:', paragraphText);
}); 

test('Step 3: WEIGHT LOSS BODY TYPE QUIZ', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
 await page.click('button:has-text("Allow all cookies")');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="radio"][aria-label="Hips & Thighs"]');
 await page.click('button:has-text("Continue")');
 const pageTitle = await page.innerText('h1.text-xl.uppercase.font-bold.text-center');
 console.log('Page Title:', pageTitle)
}); 

test('Step 3: QUESTION 2', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
 await page.click('button:has-text("Allow all cookies")');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="radio"][aria-label="Hips & Thighs"]');
 await page.click('button:has-text("Continue")');
 const paragraphText = await page.innerText('p.text-sm.uppercase.mb-1.text-center');
console.log('Paragraph Text:', paragraphText);
}); 

test('Step 3: How much weight do you want to lose?', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
 await page.click('button:has-text("Allow all cookies")');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="radio"][aria-label="Hips & Thighs"]');
 await page.click('button:has-text("Continue")');
 const headingText = await page.innerText('h2#question-2');
 console.log('Heading Text:', headingText);
}); 

test('Step 3: Tip: Select a single answer', async ({ page }) => {
await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
  // Handle cookies
await page.click('button:has-text("Allow all cookies")');
await page.click('button:has-text("Continue")');
await page.click('div[role="radio"][aria-label="Hips & Thighs"]');
await page.click('button:has-text("Continue")');
const paragraphText = await page.innerText('p.text-sm.text-center.text-secondary-a-100.mt-2');
console.log('Paragraph Text:', paragraphText);
}); 


test('Step 4: WEIGHT LOSS BODY TYPE QUIZ', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
 await page.click('button:has-text("Allow all cookies")');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="radio"][aria-label="Hips & Thighs"]');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="radio"][aria-label="11-25 pounds"]');
 await page.click('button:has-text("Continue")');
 const pageTitle = await page.innerText('h1.text-xl.uppercase.font-bold.text-center');
 console.log('Page Title:', pageTitle)
}); 

test('Step 4: QUESTION 3', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
 await page.click('button:has-text("Allow all cookies")');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="radio"][aria-label="Hips & Thighs"]');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="radio"][aria-label="11-25 pounds"]');
 await page.click('button:has-text("Continue")');
 const paragraphText = await page.innerText('p.text-sm.uppercase.mb-1.text-center');
console.log('Paragraph Text:', paragraphText);
}); 

test('Step 4: Symptoms part 1', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
 await page.click('button:has-text("Allow all cookies")');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="radio"][aria-label="Hips & Thighs"]');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="radio"][aria-label="11-25 pounds"]');
 await page.click('button:has-text("Continue")')
 const headingText = await page.innerText('h2#question-3');
 console.log('Heading Text:', headingText);
}); 

test('Step 4: Tip', async ({ page }) => {
await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
  // Handle cookies
await page.click('button:has-text("Allow all cookies")');
await page.click('button:has-text("Continue")');
await page.click('div[role="radio"][aria-label="Hips & Thighs"]');
await page.click('button:has-text("Continue")');
const textContent1 = await page.textContent('p.text-sm.text-center.text-secondary-a-100.mt-2');
console.log('Text Content 1:', textContent1);
const textContent2 = await page.textContent('p.text-sm.text-center.text-secondary-a-100');
console.log('Text Content 2:', textContent2);
}); 

test('Step 5: WEIGHT LOSS BODY TYPE QUIZ', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
 await page.click('button:has-text("Allow all cookies")');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="radio"][aria-label="Hips & Thighs"]');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="radio"][aria-label="11-25 pounds"]');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="checkbox"][aria-label="Tired after Eating"]');
 await page.click('button:has-text("Continue")');
 const pageTitle = await page.innerText('h1.text-xl.uppercase.font-bold.text-center');
 console.log('Page Title:', pageTitle)
}); 

test('Step 5: QUESTION 4', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
 await page.click('button:has-text("Allow all cookies")');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="radio"][aria-label="Hips & Thighs"]');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="radio"][aria-label="11-25 pounds"]');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="checkbox"][aria-label="Tired after Eating"]');
 await page.click('button:has-text("Continue")');
 const paragraphText = await page.innerText('p.text-sm.uppercase.mb-1.text-center');
console.log('Paragraph Text:', paragraphText);
}); 

test('Step 5: Symptoms part 2', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
 await page.click('button:has-text("Allow all cookies")');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="radio"][aria-label="Hips & Thighs"]');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="radio"][aria-label="11-25 pounds"]');
 await page.click('button:has-text("Continue")')
 await page.click('div[role="checkbox"][aria-label="Tired after Eating"]');
 await page.click('button:has-text("Continue")');
 const headingText = await page.innerText('h2#question-4');
 console.log('Heading Text:', headingText);
}); 

test('Step 5: Tip', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
    // Handle cookies
  await page.click('button:has-text("Allow all cookies")');
  await page.click('button:has-text("Continue")');
  await page.click('div[role="radio"][aria-label="Hips & Thighs"]');
  await page.click('button:has-text("Continue")');
  await page.click('div[role="radio"][aria-label="11-25 pounds"]');
  await page.click('button:has-text("Continue")');
  await page.click('div[role="checkbox"][aria-label="Tired after Eating"]');
  await page.click('button:has-text("Continue")');
  const textContent1 = await page.textContent('p.text-sm.text-center.text-secondary-a-100.mt-2');
  console.log('Text Content 1:', textContent1);
  const textContent2 = await page.textContent('p.text-sm.text-center.text-secondary-a-100');
  console.log('Text Content 2:', textContent2);
}); 

test('Step 6: WEIGHT LOSS BODY TYPE QUIZ', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
 await page.click('button:has-text("Allow all cookies")');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="radio"][aria-label="Hips & Thighs"]');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="radio"][aria-label="11-25 pounds"]');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="checkbox"][aria-label="Tired after Eating"]');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="checkbox"][aria-label="Stressed"]');
 await page.click('button:has-text("Continue")');
 const pageTitle = await page.innerText('h1.text-xl.uppercase.font-bold.text-center');
 console.log('Page Title:', pageTitle)
}); 

test('Step 6: QUESTION 4', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
 await page.click('button:has-text("Allow all cookies")');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="radio"][aria-label="Hips & Thighs"]');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="radio"][aria-label="11-25 pounds"]');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="checkbox"][aria-label="Tired after Eating"]');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="checkbox"][aria-label="Stressed"]');
 await page.click('button:has-text("Continue")');
 const paragraphText = await page.innerText('p.text-sm.uppercase.mb-1.text-center');
console.log('Paragraph Text:', paragraphText);
}); 

test('Step 6: Symptoms part 2', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
 await page.click('button:has-text("Allow all cookies")');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="radio"][aria-label="Hips & Thighs"]');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="radio"][aria-label="11-25 pounds"]');
 await page.click('button:has-text("Continue")')
 await page.click('div[role="checkbox"][aria-label="Tired after Eating"]');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="checkbox"][aria-label="Stressed"]');
 await page.click('button:has-text("Continue")');
 const headingText = await page.innerText('h2#question-5');
 console.log('Heading Text:', headingText);
}); 

test('Step 6: Tip', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
    // Handle cookies
  await page.click('button:has-text("Allow all cookies")');
  await page.click('button:has-text("Continue")');
  await page.click('div[role="radio"][aria-label="Hips & Thighs"]');
  await page.click('button:has-text("Continue")');
  await page.click('div[role="radio"][aria-label="11-25 pounds"]');
  await page.click('button:has-text("Continue")');
  await page.click('div[role="checkbox"][aria-label="Tired after Eating"]');
  await page.click('button:has-text("Continue")');
  await page.click('div[role="checkbox"][aria-label="Stressed"]');
  await page.click('button:has-text("Continue")');
  const textContent1 = await page.textContent('p.text-sm.text-center.text-secondary-a-100.mt-2');
  console.log('Text Content 1:', textContent1);
  const textContent2 = await page.textContent('p.text-sm.text-center.text-secondary-a-100');
  console.log('Text Content 2:', textContent2);
}); 
//
test('Step 7: WEIGHT LOSS BODY TYPE QUIZ', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
 await page.click('button:has-text("Allow all cookies")');
 await page.click('button:has-text("Continue")');
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
 const pageTitle = await page.innerText('h1.text-xl.uppercase.font-bold.text-center');
 console.log('Page Title:', pageTitle)
}); 

test.only('Step 7: Result', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
 await page.click('button:has-text("Allow all cookies")');
 await page.click('button:has-text("Continue")');
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
 const paragraphText = await page.innerText('p.text-sm uppercase mb-1 text-center');
 console.log('Paragraph Text:', paragraphText);
}); 

test('Step 7: Symptoms part 2', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
 // Handle cookies
 await page.click('button:has-text("Allow all cookies")');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="radio"][aria-label="Hips & Thighs"]');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="radio"][aria-label="11-25 pounds"]');
 await page.click('button:has-text("Continue")')
 await page.click('div[role="checkbox"][aria-label="Tired after Eating"]');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="checkbox"][aria-label="Stressed"]');
 await page.click('button:has-text("Continue")');
 await page.click('div[role="checkbox"][aria-label="Indigestion"]');
 await page.click('button:has-text("Continue")');
 const headingText = await page.innerText('h2.text-xl font-bold text-center');
 console.log('Heading Text:', headingText);
}); 

test('Step 7: Tip', async ({ page }) => {
  await page.goto('https://devdrbergstorage.z20.web.core.windows.net/body-type-quiz');
    // Handle cookies
  await page.click('button:has-text("Allow all cookies")');
  await page.click('button:has-text("Continue")');
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
  const textContent1 = await page.textContent('p.text-sm text-center text-secondary-a-100 mt-2');
  console.log('Text Content 1:', textContent1);
}); 