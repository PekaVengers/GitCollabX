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
          <p>Welcome to GitCollabX, the platform that brings freelancers together to collaborate on projects with ease. Join our community and take your freelance endeavors to new heights.</p>
        </div>
      </div>
      <div className="features">
        <h2 className="features-heading">Features</h2>
      </div>
      
      <main>
        <div className="content">COLLABORATE</div>
        <div className="content">DISCUSSION</div>
        <div className="content">CODE LOOKUP</div>
        <div className="content">PROJECTS</div>
        <div className="content">TRANSFER ZONE</div>
        <div className="content">PREMIUM</div>
      </main>
      <footer>
          <a className="ghIconHome" href="https://github.com/PekaVengers/GitCollabX"><BsGithub className="githubIcon" /></a>
          <span className="copyrightHome">©2023 | ALL RIGHTS RESERVED</span>
      </footer>
    </div>
  );
}
