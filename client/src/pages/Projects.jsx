import { DiGithubBadge } from "react-icons/di";
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import "../styles/Projects.css";

export default function Projects() {

  const projects = [
    {
      id: "1",
      name: "Project 1",
      githubRepo: "https://github.com/kailashchoudhary11/ideator",
      techStack: "HTML, CSS, JavaScript",
      percentageCompleted: "50",
    },
    {
      id: "2",
      name: "Project 1",
      githubRepo: "https://github.com/kailashchoudhary11/ideator",
      techStack: "HTML, CSS, JavaScript",
      percentageCompleted: "50",
    },
    {
      id: "3",
      name: "Project 1",
      githubRepo: "https://github.com/kailashchoudhary11/ideator",
      techStack: "HTML, CSS, JavaScript",
      percentageCompleted: "50",
    },
    {
      id: "4",
      name: "Project 1",
      githubRepo: "https://github.com/kailashchoudhary11/ideator",
      techStack: "HTML, CSS, JavaScript",
      percentageCompleted: "50",
    },
  ]

  return (
    <div className="projects-page-container">
      <h1>Your Projects</h1>
      <div className="projects-container">
        {
          projects.map(project => {
            return (
              <div key={project.id} className="project-container">
                <div className="project-row-1">
                  <Link className="project-name">{project.name}</Link>
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
    </div>
  );
}