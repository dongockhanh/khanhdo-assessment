import { test } from '@playwright/test';
import { TimePage } from '../pages/timePage';
import data from '../test-data/time.json';

test.describe('Automates the website time.is', () => {
  data.searchedCities.forEach((city) => {
    test(`Verify time for ${city}`, async ({ page }) => {
      const timePage = new TimePage(page);

      await timePage.navigate();
      await timePage.searchCity(city);
      await timePage.verifysearchedCityName(city);
      await timePage.verifyCurrentDateIsDisplayed(data.dateFormat);
      await timePage.verifyTimeFormat(data.timeFormat);
      await timePage.verifyTimeIsActivelyUpdating();
    });
  });
});