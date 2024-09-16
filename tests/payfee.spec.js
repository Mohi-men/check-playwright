const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
    await page.goto('https://www.newtonclassesonline.net/');

    // Expect a title with given string
  await expect(page.locator('xpath=//img[@title="Newton Classes"]')).toBeVisible();
});


test('log in popup opened', async ({ page }) => {
    await page.goto('https://www.newtonclassesonline.net/');
  
    // Click the log in link.
    await page.locator('xpath=//a[@id="loginBtn"]').click();
  
    // Expects page to have a opening popup for login.
    await expect(page.locator('xpath=//form[@id="frmLogin"]')).toBeVisible();
  });