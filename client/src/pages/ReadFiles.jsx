import { Octokit } from '@octokit/rest';
import { useState, useEffect } from 'react';

const ReadFile = () => {
    const [fileContent, setFileContent] = useState('');

    useEffect(() => {
        const fetchContent = async () => {
            const octokit = new Octokit({ auth: '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' });
            const owner = 'Vidip-Ghosh';
            const repo = 'Data-Structures'; // Just the repository name, not the full URL
            const path = 'Graph/Print Adjacency Matrix';

            try {
                const response = await octokit.rest.repos.getContent({
                    owner,
                    repo,
                    path,
                });
                const decodedContent = atob(response.data.content)  //Decoding the base64 encoding string.
                setFileContent(decodedContent);
                console.log(decodedContent);
            } catch (error) {
                console.error('Error fetching user repository:', error);
            }
        };
        fetchContent();
    }, []);

    return (
        <div>
            <h5>READ FROM A FILE</h5>
           <pre> {fileContent}</pre>
        </div>
    );
};

export default ReadFile;
