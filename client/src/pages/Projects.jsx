import { DiGithubBadge } from "react-icons/di";
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";

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
                  <h3 className="project-name">{project.name}</h3>
                  <Link to={project.githubRepo}><DiGithubBadge /></Link>
                </div>
              <div className="project-row-2">
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
                <div className="progress-title">Project Completed</div>
                <ProgressBar completed={project.percentageCompleted} />
              </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}