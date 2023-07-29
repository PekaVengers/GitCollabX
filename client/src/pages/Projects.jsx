import { DiGithubBadge } from "react-icons/di";
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import "../styles/Projects.css";
import projects from "../db/projects.json"
import { useState } from "react";

export default function Projects() {
  const [currentProjects, setCurrentProjects] = useState(JSON.parse(localStorage.getItem("projects")) || projects);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    techStack: "",
    collaborators: [],
    percentageCompleted: "1",
    githubRepo: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    formData["id"] = currentProjects.length + 1;
    console.log(formData);
    localStorage.setItem("projects", JSON.stringify([...currentProjects, formData]));
    setCurrentProjects(JSON.parse(localStorage.getItem("projects")));
    formData["name"] = "";
    formData["techStack"] = "";
    formData["githubRepo"] = "";
    setShowForm(false);
  }

  function handleChange(event) {
    setFormData(prevData => ({...prevData, [event.target.name]: event.target.value}));
  }
  return (
    <div className="projects-page-container">
      <h1>Your Projects</h1>
      {
        !showForm
          ? <>
            <button className="add-project-btn" onClick={() => setShowForm(true)}>Add project</button>
            <div className="projects-container">
              {
                currentProjects.map(project => {
                  return (
                    <div key={project.id} className="project-container">
                      <div className="project-row-1">
                        <Link className="project-name" to={`/projects/${project.id}`}>{project.name}</Link>
                        <Link target="_blank" className="project-repo-link" to={project.githubRepo}><DiGithubBadge /></Link>
                      </div>
                      <div className="project-row-2">
                        <div className="project-tech-stack-title">Tech Stack: </div>
                        {
                          project.techStack.split(", ").map((tech, ind) => {
                            return (
                              <span className="project-tech" key={ind}>
                                {tech}
                              </span>
                            )
                          })
                        }
                      </div>
                      <div className="project-row-3">
                        <div className="progress-title">Project Progress: </div>
                        <ProgressBar className="progress-tracker" completed={project.percentageCompleted} />
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </>
          : <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Project Name"/>
            <input type="text" name="techStack" value={formData.techStack} onChange={handleChange} placeholder="Tech Stack"/>
            <input type="text" name="githubRepo" value={formData.githubRepo} onChange={handleChange} placeholder="GitHub Repository"/>
            <button type="submit">Create Project</button>
          </form>
      }
    </div>
  );
}