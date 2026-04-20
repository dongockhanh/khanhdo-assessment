import { Page, Locator, expect } from '@playwright/test';
import { DateTimeUtils } from '../utils/dateTimeUtils';

export class TimePage {
  page: Page;
  searchInput: Locator;
  cityOption: Locator;
  cityName: Locator;
  currentDate: Locator;
  clock: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input#q');
    this.cityName = page.locator('#msgdiv h1');
    this.currentDate = page.locator('div#dd');
    this.clock = page.locator('time#clock');
  }

  async navigate() {
    await this.page.goto('/',{
      waitUntil: 'domcontentloaded',
    });
  }

  async searchCity(city: string) {
    console.log(`Seaching for city: ${city}`);
    await this.searchInput.click();
    await this.searchInput.fill(city);
    await this.searchInput.press('Enter');
  }

  async verifysearchedCityName(city: string) {
    console.log(`Verifying city name contains "${city}"`);
    const searchedCity = await this.cityName.textContent();
    console.log(`Searched city name: ${searchedCity}`);
    await expect(searchedCity).toContain(city);
  }

  async verifyCurrentDateIsDisplayed(dateFormat: string) {
    console.log(`Verifying current date is displayed with format "${dateFormat}"`);
     await expect(this.currentDate).toBeVisible();
     await expect(this.currentDate).not.toBeEmpty();
     const currentDate = await this.currentDate.textContent();
     console.log(`Current date: ${currentDate}`);
     const isValidFormat = DateTimeUtils.isValidDateTimeFormat(currentDate, dateFormat);
     await expect(isValidFormat).toBe(true);
  }

  async verifyTimeFormat(timeFormat: string) {
    console.log(`Verifying time with format "${timeFormat}"`);
    await expect(this.clock).toBeVisible();
    const time = await this.clock.textContent();
    console.log(`Time: ${time}`);
    const isValidFormat = DateTimeUtils.isValidDateTimeFormat(time, timeFormat);
    await expect(isValidFormat).toBe(true);
  }

  async verifyTimeIsActivelyUpdating() {
    console.log('Verifying time is actively updating');
    const time1 = await this.clock.textContent();
    console.log(`Current time: ${time1}`);

    await expect.poll(async () => {
      const time2 = await this.clock.textContent();
      console.log(`Current time: ${time2}`);
      return time2;
    }, {
      timeout: 4000,
      intervals: [1000]
    }).not.toBe(time1);
  }
}