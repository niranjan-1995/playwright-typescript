import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AjaxFormPage } from '../pages/AjaxPage';

test('homepage loads', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
});

test('fill and submit Ajax form', async ({ page }) => {
  const homePage = new HomePage(page);
  const ajaxFormPage = new AjaxFormPage(page);

  await homePage.goto();
  await homePage.clickAjaxFormSubmit();
  await ajaxFormPage.verifyHeading();
  await ajaxFormPage.fillForm('Test name', 'Test description');
  await ajaxFormPage.submitForm();
  await expect(page.locator('#submit-control')).toBeVisible();
});
