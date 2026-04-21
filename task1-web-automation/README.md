# Project Title

task1-web-automation

## Description

Write a Playwright test that automates the website time.is.

Your test should:
1. Open https://time.is
2. Search for a city (e.g. Los Angeles) using the site’s search feature
3. Verify the city name is displayed correctly on the result page
4. Verify the current date is displayed
5. Verify the time display is present, formatted as HH:MM:SS, and is actively updating (i.e. the
seconds value changes over a short observation window)

© 2026 Jitsu. All rights reserved.Page 1

Note: this is a live third-party site. Part of the challenge is handling the inherent variability of testing
against real web content - think about synchronization, tolerance, and what makes an assertion
meaningful vs. flaky.

## Prerequisites

```
node -v
v22.21.1
```

## How to install dependencies

Install the dependencies listed in the package.json file
```
npm i
```

## How to run the tests

```
npm run test
```

## NOTE

* The framework supports dynamic external test data stored in the test-data/ folder.

    - Update searching data in time.json within test-data/ as needed.

## Project Structure

* playwright-report/: Report after execution
* pages/: Each page is represented by a single class that encapsulates both selectors and user actions, following the Page Object Model (POM) design pattern to improve maintainability and reusability.
    - timePage.ts/: handles time page
* test-data/: Stores external test data
    - time.json/: Contains searching data and date time format for verification for time.is testing
* tests/: Contains all automation test scenarios
* utils/: Shared utility functions
    - dateTimeUtils.ts: Contains reusable helpers for formatting and handling date/time operations
* playwright.config.ts: Global configuration for Playwright

## Error Note

If you see errors like bash, sed, or uname not found on Windows, it’s usually due to due to differences between Unix and Windows environments

Fix:
- Use Git Bash
- And ensure the correct version of Node.js is installed (v22.21.1)