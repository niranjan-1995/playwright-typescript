import { expect, Page } from '@playwright/test';

export class HomePage {

  constructor(private readonly page: Page) {  // ← declares AND assigns in one line
    this.page = page;
  }

  async goto() {
    await this.page.goto('/selenium-playground');
    await expect(this.page).toHaveTitle('Selenium Grid Online | Run Selenium Test On Cloud');
  }

  async clickAjaxFormSubmit() {
    await this.page.getByRole('link', { name: 'Ajax Form Submit' }).click();
  }
}