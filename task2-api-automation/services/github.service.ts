import { APIRequestContext, expect } from '@playwright/test';

export class GitHubService {
  constructor(private request: APIRequestContext) {}

  async getRepos(org: string, page: number, perPage: number) {
    const response = await this.request.get(`/orgs/${org}/repos`, {
      params: {
        per_page: perPage,
        page,
      },
    });

    if (!response.ok()) {
      throw new Error(`API failed: ${response.status()}`);
    }

    return await response.json();
  }

  async getAllRepos(org: string) {
    let page = 1;
    const perPage = 100;
    let allRepos: any[] = [];

    while (true) {
      const repos = await this.getRepos(org, page, perPage);

      if (repos.length === 0) break;
      allRepos.push(...repos);
      page++;
    }

    return allRepos;
  }
}