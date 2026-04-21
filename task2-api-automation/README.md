# Project Title

task2-api-automation

## Description

Write a Playwright test (using its request context, not a browser) that retrieves information from a
public GitHub organization using the GitHub REST API. You may use any public organization - for
example, https://github.com/SeleniumHQ.

Your test should answer and assert:
1. How many total open issues are there across all repositories in the organization?
2. Which repositories were most recently updated? (Sort by update date, descending.)
3. Which repository has the most watchers?
Note: the GitHub API is paginated. Consider how your solution handles organizations with many
repositories.

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

## IMPORTANT NOTE

* The framework supports dynamic external test data stored in the test-data/ folder.

    - Update expected values in test-data/ as needed.
    - Uncomment lines 20, 29, 37, 38 in the test file to enable strict validation.
    - Test results are logged to the console, allowing expected values to be reviewed and updated accordingly.

* Since expected data changes over time, these assertions are commented out by default to avoid flaky tests. By default, tests only verify that data is valid.

## Project Structure

* playwright-report/: Report after execution
* services/: contains logic for interacting with external APIs and processing data
    - github.service.ts/: This service is responsible for handling all interactions with the GitHub REST API
* test-data/: Stores external test data
    - github-data.json/: Contains expected data for GitHub API testing
* tests/: Contains all automation test scenarios
* playwright.config.ts: Global configuration for Playwright

## Error Note

If you see errors like bash, sed, or uname not found on Windows, it’s usually due to due to differences between Unix and Windows environments

Fix:
- Use Git Bash
- And ensure the correct version of Node.js is installed (v22.21.1)