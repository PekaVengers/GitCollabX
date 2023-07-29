import { Octokit } from '@octokit/rest';
import { useState, useEffect } from 'react';

const GithubPullRequests = () => {
    const READ_KEY = import.meta.env.VITE_GH_AUTH_KEY;
    const [pullRequests, setPullRequests] = useState([]);

    useEffect(() => {
        const fetchPullRequests = async () => {
            const octokit = new Octokit({ auth: READ_KEY });
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
            <h5>PULL REQUESTS</h5>
            {pullRequests.map((pr) => (
                <div key={pr.id}>{pr.title}</div>
            ))}
        </div>
    );
};

export default GithubPullRequests;
