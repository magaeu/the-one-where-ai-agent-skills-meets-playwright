const { test, expect } = require('@playwright/test');

test('filter books by automation on Automation Bookstore', async ({ page }) => {
  await page.goto('https://automationbookstore.dev');
  await page.fill('input[placeholder="Filter books.."]', 'automation');

  const visibleBookTitles = page.locator('li:visible h2');
  await expect(visibleBookTitles).toHaveCount(2);
  await expect(visibleBookTitles).toContainText([
    'Test Automation in the Real World',
    'Experiences of Test Automation',
  ]);
});
