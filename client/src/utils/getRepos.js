import { octokit } from "./getOctokit";

export default async function getRepos(username) {
  try {
    const repos = await octokit.rest.repos.listForUser({username,per_page:100});
    return repos.data;
  } catch (error) {
    console.error('Error fetching user repository:', error);
  }
}