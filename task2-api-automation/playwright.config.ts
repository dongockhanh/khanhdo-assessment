import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [
    ['html', { open: 'always' }]
  ],
  use: {
    baseURL: 'https://api.github.com',
    extraHTTPHeaders: {
      'Accept': 'application/vnd.github+json'
    }
  }
});
