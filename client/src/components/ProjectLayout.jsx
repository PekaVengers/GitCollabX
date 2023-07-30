import { Outlet } from "react-router";
import ProjectNav from "./ProjectNav";
import "../styles/ProjectLayout.css";
export default function ProjectLayout() {
  return (
    <div className="project-page-layout">
      <ProjectNav />
      <Outlet />
    </div>
  )
}