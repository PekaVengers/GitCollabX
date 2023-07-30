import LoginButton from "../components/LoginButton";
import "../styles/Home.css";
import { BsGithub } from "react-icons/bs";
import logo from "../assets/images/logo.png";
import img from '../assets/images/FreelancingNetworking.png'

export default function Home() {
  return (
    <div className="parentContainer">
      <nav>
        <div className="logo">
          <img className="logoImg" src={logo} alt="logo" />
        </div>
        <LoginButton className="loginBtn" />
      </nav>
      <div className="container">
        <div className="image">
          <img src={img} alt="img" />
        </div>
        <div className="hero-section">
          <h1>Connecting Freelancers, Empowering Collaboration</h1>
          <p>Welcome to <b className="boldText">GitCollabX</b>, the platform that brings freelancers together to collaborate on projects with ease. Join our community and take your freelance endeavors to new heights.</p>
        </div>
      </div>
      <div className="features">
        <h2 className="features-heading">Features</h2>
      </div>
      
      <main>
        <div className="content">
          <h1 className="content-head">COLLABORATE</h1>
          <p className="content-para">Manage collaborative projects, Invite other freelancers to join the project, work on tasks, and track the progress.</p>
        </div>
        <div className="content">
          <h1 className="content-head">DISCUSSION</h1>
          <p className="content-para">Participate in topic-specific conversations. Encouraging knowledge exchange, problem-solving, and brainstorming.</p>
        </div>
        <div className="content">
          <h1 className="content-head">CODE LOOKUP</h1>
          <p className="content-para">Search and find relevant code snippets, functions, or solutions shared by other freelancers within the platform. </p>
        </div>
        <div className="content">
          <h1 className="content-head">PROJECTS</h1>
          <p className="content-para">Manage projects using tools such as task assignment and milestone tracking to ensure smooth project execution.</p>
        </div>
      </main>
      <footer>
          <a className="ghIconHome" href="https://github.com/PekaVengers/GitCollabX"><BsGithub className="githubIcon" /></a>
          <span className="copyrightHome">©2023 | ALL RIGHTS RESERVED</span>
      </footer>
    </div>
  );
}
