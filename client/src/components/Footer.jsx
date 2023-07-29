import { BsGithub } from "react-icons/bs";
import "../styles/Footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <a className="ghIcon" href="https://github.com/PekaVengers/GitCollabX">
        <BsGithub className="githubIcon" />
      </a>
      <span className="copyright">©2023 | ALL RIGHTS RESERVED</span>
    </div>
  );
}
