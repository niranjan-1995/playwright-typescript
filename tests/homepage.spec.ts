import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe("Homepage", () => {
  test('homepage loads', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
  });

  const navItems = ['Platform', 'Solutions', 'Resources', 'AI Agents'];

  test('hover on all dropdown menus and verify', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    for (const item of navItems) {
      await homePage.hoverOnNavItem(item); // hover on each dropdown menu
      await homePage.verifyDropdownMenuItems(item);    // verify items per dropdown
    }
  });
});

