import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [
    ['html', { open: 'always' }]
  ],
  use: {
    baseURL: 'https://time.is',
    navigationTimeout: 15000
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});
