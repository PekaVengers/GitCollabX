import { Octokit } from '@octokit/rest';
import { useState,useEffect } from 'react';

const UserRepository = () => {
  const [userRepo,setUserRepo] = useState([]);

  useEffect(()=>{
    const fetchUserRepo = async() =>{
      const octokit = new Octokit({ auth: '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' });
      const username = 'Vidip-Ghosh';

      try {
        const repo = await octokit.rest.repos.listForUser({username,per_page:100});
        setUserRepo(repo.data);
        console.log(repo);
      } catch (error) {
        console.error('Error fetching user repository:', error);
      }
    };
    fetchUserRepo()
  },[])
  return (
    <div>
      <h5>USER REPOSITORY</h5>
      {
        userRepo.map((repo)=>(
          <div key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default UserRepository
