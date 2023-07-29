import { Octokit } from '@octokit/rest';
import { useState, useEffect } from 'react';

const RepoFiles = () => {
    const [repoContent, setRepoContent] = useState([]);

    useEffect(() => {
        const fetchContent = async () => {
            const octokit = new Octokit({ auth: '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' });
            const owner = 'Vidip-Ghosh';
            const repo = 'Data-Structures'; // Just the repository name, not the full URL
            const path = '';

            try {
                const content = await octokit.rest.repos.getContent({
                    owner,
                    repo,
                    path,
                });
                setRepoContent(content.data);
                console.log(content);
            } catch (error) {
                console.error('Error fetching user repository:', error);
            }
        };
        fetchContent();
    }, []);

    return (
        <div>
            <h5>REPO FILES</h5>
            {repoContent.map((content) => (
                <div key={content.id}>
                    <h3>{content.name}</h3>
                    <p>{content.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RepoFiles;
