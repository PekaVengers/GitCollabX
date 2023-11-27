import LoginButton from "../components/LoginButton";
import { BsGithub } from "react-icons/bs";
import logo from "../assets/images/logo.png";
import img from "../assets/images/FreelancingNetworking.png";
import FeatureDiv from "../components/FeatureDiv";

export default function Home() {
  return (
    <div className="parentContainer bg-[#7e7e7e] w-[100%] min-h-[100dvh]">
      <nav className="bg-[#b0c1d0] flex justify-around items-center">
        <div className="">
          <img className="w-[100px]" src={logo} alt="logo" />
        </div>
        <LoginButton className="loginBtn cursor-pointer" />
      </nav>

    {/* Top Section  */}
      <div className="w-[100%] bg-[#7e7e7e] flex justify-center my-4">
      <div className="md:w-[80%] flex flex-wrap gap-2 md:gap-8 justify-center items-stretch">
        <div className="w-[90%]">
          <img src={img} className="w-full" alt="img" />
        </div>
        <div className="w-[90%] md:w-[40%] flex flex-col gap-2 md:gap-8 justify-center font-primary">
          <h1 className="text-[1.5rem] text-black text-center font-primary leading-[1.5rem]">Connecting Freelancers, Empowering Collaboration</h1>
          <p className="text-[1rem] text-black text-center font-para leading-[1.2rem]">
            Welcome to <b className="font-primaryBold">GitCollabX</b>, the platform that
            brings freelancers together to collaborate on projects with ease.
            Join our community and take your freelance endeavors to new heights.
          </p>
        </div>
      </div>
      </div>

    {/* Features Section  */}
      <div className="text-black font-primary bg-[#7e7e7e] text-center">
        <h2 className="text-[2rem]">Features</h2>
      </div>

      
      <main className="bg-[#7e7e7e] md:py-[4rem] flex items-center justify-center">
        <div className="w-[95dvw] md:w-[80dvw] min-h-[70vh] py-[2rem] flex items-stretch justify-center gap-[2rem] flex-wrap">
          <FeatureDiv
            title="COLLABORATE"
            description="Manage collaborative projects, Invite other freelancers to join the project, work on tasks, and track the progress."
          />
          <FeatureDiv
            title="DISCUSSION"
            description="Participate in topic-specific conversations. Encouraging knowledge exchange, problem-solving, and brainstorming."
          />
          <FeatureDiv
            title="CODE LOOKUP"
            description="Search and find relevant code snippets, functions, or solutions shared by other freelancers within the platform."
          />
          <FeatureDiv
            title="PROJECTS"
            description="Manage projects using tools such as task assignment and milestone tracking to ensure smooth project execution."
          />
        </div>
      </main>

      {/* Footer Section  */}
      <footer className="py-[0.7rem] bg-black flex items-center justify-around font-primary">
        <a
          href="https://github.com/PekaVengers/GitCollabX"
        >
          <BsGithub className="githubIcon text-white text-[1.8rem]" />
        </a>
        <span className="copyrightHome text-[0.8rem] text-white leading-0">©2023 | ALL RIGHTS RESERVED</span>
      </footer>
    </div>
  );
}
