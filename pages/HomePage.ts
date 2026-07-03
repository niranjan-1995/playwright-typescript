import { expect, Page } from '@playwright/test';

export interface MenuSection {
  sections: string[];
  items: string[];
  container: string;
}

export interface MenuData {
  [key: string]: MenuSection;
}

export class HomePage {

  private readonly menuData: MenuData = {
    Platform: {
      container: '.chfw-resource-dropdown-menu',
      sections: ['AI AGENTS', 'cloud', 'Tools'],
      items: [
        'KaneAI - GenAI-Native Testing Agent', 'Kane CLI', 'Agent Testing',
        'Test Management', 'SmartUI - Visual Testing Agent', 'Accessibility Testing Agent',
        'Agentic Test Cloud Platform', 'Real Devices Cloud', 'Test Automation Platform',
        'Native App Automation Cloud', 'HyperExecute', 'Browser Cloud',
        'TestMu AI MCP Server', 'Accessibility DevTools', 'Test Insights'
      ]
    },
    Solutions: {
      container: '.chfw-solutions-menu',
      sections: ['Use cases', 'Industries', 'Enterprise'],
      items: [
        'Automation Testing', 'Mobile App Testing', 'Geo-Location Testing',
        'Local Page Testing', 'Accessibility Testing', 'Cross Browser Testing',
        'Responsive Testing', 'Performance Testing', 'API Testing',
        'Test Case Management', 'Low Code Testing', 'Continuous Testing',
        'End-to-end Flow Automation', 'Retail', 'Finance',
        'Media & Entertainment', 'Healthcare', 'Travel & Hospitality',
        'Insurance', 'Enterprise', 'TestMu AI Professional Service'
      ]
    },
    Resources: {
      container: '.chfw-resources-menu',
      sections: ['Learn', 'Developer', 'Company', 'Languages & frameworks'],
      items: [
        'Blog', 'Webinars', 'Learning Hub', 'Newsletter',
        'Customer Stories', 'Certifications', 'Documentation',
        'API', 'Integrations', 'GitHub Repositories', 'TestMu AI Community',
        'About Us', 'Careers', 'Partners', 'Press', 'LambdaTest is TestMu AI'
      ]
    },
    'AI Agents': {
      container: '.chfw-ai-agents-menu',
      sections: ['Agents', "What's New"],
      items: [
        'Test Planner Agent', 'Test Authoring Agent', 'Test Orchestration Agent',
        'Test Insights Agent', 'AI MCP Server', 'Agent Testing',
        'Auto Healing Agent', 'Visual Testing Agent',
        'Root Cause Analysis Agent', 'Test Insights AI Copilot'
      ]
    }
  };

  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('/selenium-playground');
    await expect(this.page).toHaveTitle('Selenium Grid Online | Run Selenium Test On Cloud');
  }

  async clickAjaxFormSubmit() {
    await this.page.getByRole('link', { name: 'Ajax Form Submit' }).click();
  }

  async clickPricingLink() {
    const pricingLink = this.page.getByRole('navigation').getByRole('link', { name: 'Pricing', exact: true });
    await expect(pricingLink).toBeVisible();
    await pricingLink.click();
  }

  async verifyPricingLinkHref() {
    const pricingLink = this.page.getByRole('navigation').getByRole('link', { name: 'Pricing', exact: true });
    await expect(pricingLink).toHaveAttribute('href', /\/pricing\/?$/);
  }

  async hoverOnNavItem(name: string) {
    await this.page.locator('.chfw-dropdown-toggle', { hasText: name }).hover();
  }

  async verifyDropdownMenuItems(name: string) {
    const menu = this.menuData[name];
    if (!menu) throw new Error(`Unknown menu: ${name}`);

    const dropdown = this.page.locator(menu.container).first();

    for (const section of menu.sections) {
      await expect(dropdown.locator('.chfw-section-title', { hasText: section })).toBeVisible();
    }

    for (const item of menu.items) {
      await expect(dropdown.locator('.chfw-menu-title', { hasText: item })).toBeVisible();
    }
  }
}