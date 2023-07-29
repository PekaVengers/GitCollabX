import { useState, useEffect } from "react";
import fetchPullRequests from "../../utils/getPulls";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "../../styles/PullRequests.css"

export default function PullRequests() {
  const [pullRequests, setPullRequests] = useState([]);
  const { user } = useAuth0();

  useEffect(() => {
    async function setData() {
      const data = await fetchPullRequests(user.nickname, "ideator");
      console.log(data)
      setPullRequests(data);
    }
    setData();
  }, [user]);

  
  return (
    <div className="pr-page-container">
      <h1 className="pr-page-title">Pull Requests of the Project</h1>
      <div className="prs-container">
        {
          pullRequests.length > 0 
          ? pullRequests.map(pr => {
            return (<div key={pr.number} className="pr-container">
              <div className="pr-number">
                {pr.number}
              </div>
              <div className="pr-title">
                {pr.title}
              </div>
              <div className="pr-link">
                {
                  pr.state === "closed"
                    ? <Link target="_blank" className="closed-pr-link" to={pr.pull_request.html_url}>Closed</Link>
                    : <Link target="_blank" className="review-pr-link" to={pr.pull_request.html_url}>
                      Review
                    </Link>
                }
              </div>
            </div>)
          })
          : <div className="loading-prs">Loading...</div>
        }
      </div>
    </div>
  )
}