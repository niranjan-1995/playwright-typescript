import { Page, expect } from '@playwright/test';

export class AjaxFormPage {
  constructor(private readonly page: Page) {}

  async fillForm(title: string, description: string) {
    await this.page.locator('#title').fill(title);
    await this.page.locator('#description').fill(description);
  }

  async submitForm() {
    await this.page.getByRole('button', { name: /submit/i }).click();
    await expect(this.page.locator('#submit-control')).toBeVisible();
  }

  async verifyHeading() {
    await expect(this.page.getByRole('heading', { name: 'Form Submit Demo', level: 1 })).toBeVisible();
  }
}