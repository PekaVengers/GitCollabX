import { Link } from "react-router-dom"
import "../styles/ProjectNav.css"

export default function ProjectNav() {
  return (
    <div className="project-nav">
      <Link to="." className="projectFeatureBtn">Feature Tracking</Link>
      <Link to="pulls" className="projectFeatureBtn">Pull Requests</Link>
      <Link to="codebase" className="projectFeatureBtn">Project Codebase</Link>
      <Link to="collaborators" className="projectFeatureBtn">Collaborators</Link>
    </div>
  )
}