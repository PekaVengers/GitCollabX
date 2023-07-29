import {octokit} from "./getOctokit";

export default async function getPathContent (owner, repo, path="") {
  try {
      const content = await octokit.rest.repos.getContent({
          owner,
          repo,
          path,
      });
      console.log(content);
      return content.data;
  } catch (error) {
      console.error('Error fetching user repository:', error);
  }
}