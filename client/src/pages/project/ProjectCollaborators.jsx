import projectsData from "../../db/projects.json";
import collaborators from "../../db/collaborators.json";
import "../../styles/ProjectCollaborators.css";
import { useParams } from "react-router";

export default function ProjectCollaborators() {
  const params = useParams();
  const projects = JSON.parse(localStorage.getItem("projects")) || projectsData;
  const projectId = params.id;
  const collaborator_ids = projects[projectId-1].collaborators;
  const project_collaborators = [];
  for (let id of collaborator_ids) {
    project_collaborators.push(collaborators[id-1]);
  }

  return (
    <div className="project-collab-page">
      <h1 className="collab-page-title">Collaborators</h1>
      <div className="collaborators-container">
        {
          project_collaborators.map(collaborator => {
            return (
              <div key={collaborator.id} className="collaborator-container">
                <div className="collaborator-profile">
                  <img src={collaborator.picture} alt={collaborator.name} />
                </div>
                <div className="collaborator-details">
                  <div className="collaborator-name">{collaborator.name}</div>
                  <div className="collaborator-email">{collaborator.email}</div>
                </div>
                <div className="remove-collaborator">
                  <button className="remove-collab-btn">
                    Remove
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}