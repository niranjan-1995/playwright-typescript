import { test, expect } from '@playwright/test';
import { AjaxFormPage } from "../pages/AjaxPage";
import { HomePage } from "../pages/HomePage";

test.describe("AjaxPage", () => {
    test('fill and submit Ajax form', async ({ page }) => {
        const homePage = new HomePage(page);
        const ajaxFormPage = new AjaxFormPage(page);

        await homePage.goto();
        await homePage.clickAjaxFormSubmit();
        await ajaxFormPage.verifyHeading();
        await ajaxFormPage.fillForm('Test name', 'Test description');
        await ajaxFormPage.submitForm();
    });
});
