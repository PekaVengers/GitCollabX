import {octokit} from "./getOctokit";

export default async function fetchPullRequests(username, repo) {
  console.log(import.meta.env.VITE_GH_AUTH_KEY )
  try {
      const prs = await octokit.rest.search.issuesAndPullRequests({
          q: `type:pr+repo:${username}/${repo}+created:>=2022-01-01`,
          per_page: 100,
      });
      return prs.data.items;

  } catch (error) {
      console.error('Error fetching pull requests:', error);
  }
}