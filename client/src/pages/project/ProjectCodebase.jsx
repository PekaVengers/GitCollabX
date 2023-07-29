import { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import getPathContent from '../../utils/getPathContent';
import "../../styles/ProjectCodebase.css";

export default function ProjectCodebase() {
  const [repoFiles, setRepoFiles] = useState([]);
  const [currentFile, setCurrentFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const { user } = useAuth0();

  useEffect(() => {
    async function setData() {
      const data = await getPathContent(user.nickname, "ideator");
      setRepoFiles(data);
      setCurrentFile(data[0].name);
    }
    setData();
  }, [user]);

  useEffect(() => {
    async function setData() {
      const data = await getPathContent(user.nickname, "ideator", currentFile);
      setFileContent(atob(data.content));
    }
    if (currentFile != null) {
      setData();
    }
  }, [currentFile, user.nickname])


  return (
    <div className="codebase-page">
      <div className="file-tree">
        {
          repoFiles?.map(file => {
            if (file.type == "file")
              return (
                <div key={file.name} className="file-name-container">
                  <button onClick={() => setCurrentFile(file.name)} className="file-name">
                    {file.name}
                  </button>
                </div>
              )
          })
        }
      </div>
      <div className="file-editor">
        {fileContent}
      </div>
    </div>
  );
}