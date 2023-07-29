import { Octokit } from '@octokit/rest';
import { useState, useEffect } from 'react';

const GithubPullRequests = () => {
    const [pullRequests, setPullRequests] = useState([]);

    useEffect(() => {
        const fetchPullRequests = async () => {
            const octokit = new Octokit({ auth: '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' });
            const username = 'anmode';
            const repo = 'grabtern-frontend';

            try {
                const prs = await octokit.rest.search.issuesAndPullRequests({
                    q: `type:pr+repo:${username}/${repo}+created:>=2022-01-01`,
                    per_page: 100,
                });
                setPullRequests(prs.data.items);
                console.log(prs.data.items);
            } catch (error) {
                console.error('Error fetching pull requests:', error);
            }
        };
        fetchPullRequests();
    }, []);

    return (
        <div>
            {pullRequests.map((pr) => (
                <div key={pr.id}>{pr.title}</div>
            ))}
        </div>
    );
};

export default GithubPullRequests;
