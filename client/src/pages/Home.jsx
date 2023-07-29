import LoginButton from "../components/LoginButton";
import "../styles/Home.css";
import { BsGithub } from "react-icons/bs";
import logo from "../assets/images/logo.png";

export default function Home() {
  return (
    <div className="parentContainer">
      <nav>
        <div className="logo">
          <img className="logoImg" src={logo} alt="logo" />
        </div>
        <LoginButton className="loginBtn" />
      </nav>
      <main>
        <div className="content">COLLABORATE</div>
        <div className="content">DISCUSSION</div>
        <div className="content">CODE LOOKUP</div>
        <div className="content">PROJECTS</div>
        <div className="content">TRANSFER ZONE</div>
        <div className="content">PREMIUM</div>
      </main>
      <footer>
        <div className="footer">
          <a className="ghIcon" href="https://github.com/PekaVengers/GitCollabX"><BsGithub className="githubIcon" /></a>
          <span className="copyright">©2023 | ALL RIGHTS RESERVED</span>
        </div>
      </footer>
    </div>
  );
}
