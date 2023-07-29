import { Octokit } from '@octokit/rest';
import { useState, useEffect } from 'react';
import '../styles/ReadAllFile.css'

const ReadAllFile = () => {
    const READ_KEY = import.meta.env.VITE_GH_AUTH_KEY;
    const [multiFile,setMultiFile] = useState([]);

    useEffect(()=>{
        const fetchAllContents = async() =>{
            const octokit = new Octokit({ auth: READ_KEY });
            const owner = 'Vidip-Ghosh';
            const repo = 'QR-Code-Generator';
            const filePaths = [
                'index.html',
                'Vidip2.js',
                'README.md'
            ];
            try{
                const fileContents = [];
                for (const path of filePaths) {
                    const response = await octokit.rest.repos.getContent({
                        owner,
                        repo,
                        path,
                    });
                    if (response.data.type === 'file' && response.data.content) {
                        const decodedContent = atob(response.data.content);
                        fileContents.push({ path, content: decodedContent });
                    }
                }
                setMultiFile(fileContents)
            }
            catch(error){
                console.error('Error fetching user repository:', error);
            }
        };
        fetchAllContents();
    },[])
  return (
    <div className='parent'>
        <div>
        {
            multiFile.map((file)=>(
                <div key={file.path}>
                    <a href={`#${file.path}`}><strong>{file.path}</strong></a>
                </div>
            ))
        }
        </div>
        <div>
        {
            multiFile.map((file)=>(
                <div key={file.path}>
                    <h5 id={`#${file.path}`}>{file.path}</h5>
                    <pre>{file.content}</pre>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default ReadAllFile