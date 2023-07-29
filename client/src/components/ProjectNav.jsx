import { Link } from "react-router-dom"

export default function ProjectNav() {
  return (
    <div className="project-nav">
      <Link to=".">Feature Tracking</Link>
      <Link to="pulls">Pull Requests</Link>
      <Link to="codebase">Project Codebase</Link>
      <Link to="collaborators">Collaborators</Link>
    </div>
  )
}