import { test, expect } from '@playwright/test';
import { GitHubService } from '../services/github.service';
import data from '../test-data/github-data.json';

test.describe('Github api testing', () => {

  test('Github api testing', async ({ request }) => {
    const service = new GitHubService(request);

    const repos = await service.getAllRepos(data.organization);
    console.log(`Total repositories: ${repos.length}`);

    // 1. How many total open issues are there across all repositories in the organization?
    const totalIssues = repos.reduce(
      (sum, repo) => sum + repo.open_issues_count,
      0
    );
    console.log(`Total open issues: ${totalIssues}`);
    expect.soft(totalIssues).toBeGreaterThan(0);
    // expect.soft(totalIssues).toEqual(data.totalIssues);

    // 2. Which repositories were most recently updated? (Sort by update date, descending.)
    repos.sort(
      (repo1, repo2) => new Date(repo2.updated_at).getTime() - new Date(repo1.updated_at).getTime()
    )
    const mostUpdated = repos.slice(0, data.mostRecentlyUpdated.length).map(repo => repo.name);
    console.log(`Most ${data.mostRecentlyUpdated.length} recently updated repositories: ${mostUpdated.join(', ')}`);
    expect.soft(mostUpdated.length).toBeGreaterThan(0);
    // expect.soft(mostUpdated).toEqual(data.mostRecentlyUpdated);

    // 3. Which repository has the most watchers?
    const mostWatchers = repos.reduce((max, repo) =>
      repo.watchers_count > max.watchers_count ? repo : max
    );
    expect.soft(mostWatchers).toBeDefined();
    console.log(`Repository with the most watchers: ${mostWatchers.name} (${mostWatchers.watchers_count} watchers)`);
    // expect.soft(mostWatchers.name).toEqual(data.mostWatchers);
    // expect.soft(mostWatchers.watchers_count).toEqual(data.topWatchersCount);
  });

});