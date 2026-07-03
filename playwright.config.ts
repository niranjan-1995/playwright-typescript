import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: 'https://testmuai.com/selenium-playground/',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: null,
    launchOptions: {
      args: ['--start-maximized']  // ← maximizes the window
    }
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
  ],
});