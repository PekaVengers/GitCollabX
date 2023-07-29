import { Octokit } from '@octokit/rest';
import { useState, useEffect } from 'react';

const GithubPullRequests = () => {
    const [pullRequests, setPullRequests] = useState([]);

    useEffect(() => {
        
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
