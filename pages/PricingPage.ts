import { expect, Page } from '@playwright/test';

export class PricingPage {
  private readonly planSections = [
    'Kane CLI',
    'KaneAI',
    'Test Manager',
    'Agent Testing',
    'Live Testing',
    'Automation',
    'HyperExecute',
    'Smart UI',
  ];

  private readonly faqQuestions = [
    'What forms of payment do you accept?',
    'Will I get invoice for my subscription?',
    'What do you mean by parallel session?',
    'Is the pricing based on users or parallel sessions?',
    'Can I upgrade or downgrade my subscription later?',
  ];

  constructor(private readonly page: Page) {}

  async verifyPageLoaded() {
    await expect(this.page).toHaveURL(/\/pricing\/?$/);
    await expect(this.page).toHaveTitle(/Plans and Pricing/i);
    await expect(this.page.getByRole('heading', { level: 1 })).toHaveText(
      'Agentic Platform for Quality Engineering',
    );
  }

  async verifyPlanSections() {
    for (const plan of this.planSections) {
      await expect(this.page.getByRole('heading', { name: plan, level: 2 })).toBeVisible();
    }
  }

  async verifyFaqSection() {
    await expect(
      this.page.getByRole('heading', { name: 'Next-Gen Testing Cloud for Mobile & Web Apps', level: 2 }),
    ).toBeVisible();

    const faqHeading = this.page.getByRole('heading', { name: 'Frequently asked questions', level: 2 });
    await faqHeading.scrollIntoViewIfNeeded();
    await expect(faqHeading).toBeVisible();

    for (const question of this.faqQuestions) {
      await expect(this.page.getByRole('button', { name: question })).toBeVisible();
    }
  }

  async verifyCallToActionButtons() {
    await expect(this.page.getByRole('link', { name: 'Get Started Free' }).first()).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Book a Demo' }).first()).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Contact Sales' })).toBeVisible();
  }

  async verifySuccessStoriesSection() {
    await expect(
      this.page.getByRole('heading', {
        name: 'Success Stories of TestMu AI (Formerly LambdaTest)',
        level: 2,
      }),
    ).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'View more questions' })).toBeVisible();
  }
}
