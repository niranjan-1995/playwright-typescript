import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { PricingPage } from '../pages/PricingPage';

test.describe('Pricing link from Selenium Playground', () => {
  test('Pricing link in header navigates to the pricing page', async ({ page }) => {
    const homePage = new HomePage(page);
    const pricingPage = new PricingPage(page);

    await homePage.goto();
    await homePage.verifyPricingLinkHref();
    await homePage.clickPricingLink();
    await pricingPage.verifyPageLoaded();
  });

  test('pricing page displays main heading and plan sections', async ({ page }) => {
    const homePage = new HomePage(page);
    const pricingPage = new PricingPage(page);

    await homePage.goto();
    await homePage.clickPricingLink();
    await pricingPage.verifyPlanSections();
  });

  test('pricing page shows FAQ section with common questions', async ({ page }) => {
    const homePage = new HomePage(page);
    const pricingPage = new PricingPage(page);

    await homePage.goto();
    await homePage.clickPricingLink();
    await pricingPage.verifyFaqSection();
  });

  test('pricing page has key call-to-action buttons', async ({ page }) => {
    const homePage = new HomePage(page);
    const pricingPage = new PricingPage(page);

    await homePage.goto();
    await homePage.clickPricingLink();
    await pricingPage.verifyCallToActionButtons();
  });

  test('pricing page displays success stories section', async ({ page }) => {
    const homePage = new HomePage(page);
    const pricingPage = new PricingPage(page);

    await homePage.goto();
    await homePage.clickPricingLink();
    await pricingPage.verifySuccessStoriesSection();
  });
});
