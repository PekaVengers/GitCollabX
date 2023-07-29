import { Outlet } from "react-router";
import ProjectNav from "./ProjectNav";
export default function ProjectLayout() {
  return (
    <div>
      <ProjectNav />
      <Outlet />
    </div>
  )
}