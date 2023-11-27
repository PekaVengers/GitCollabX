import LoginButton from "../components/LoginButton";
import { BsGithub } from "react-icons/bs";
import logo from "../assets/images/logo.png";
import img from "../assets/images/FreelancingNetworking.png";
import FeatureDiv from "../components/FeatureDiv";

export default function Home() {
  return (
    <div className="parentContainer bg-[#7e7e7e] w-[100%] min-h-[100dvh]">
      <nav className="bg-[#b0c1d0] flex justify-around md:justify-between md:px-[2rem] lg:px-[4rem] items-center">
        <div>
          <img className="w-[100px] msm:w-[150px]" src={logo} alt="logo" />
        </div>
        <LoginButton className="loginBtn cursor-pointer" />
      </nav>

    {/* Top Section  */}
      <div className="w-[100%] bg-[#7e7e7e] flex justify-center my-4">
      <div className="py-8 md:w-[80%] mmd:w-[95%] 2xl:w-[80%] xxl:w-[70%] flex flex-wrap gap-2 formsm:gap-4 md:gap-8 justify-center items-center">
        <div className="w-[90%] formsm:w-[80%] gsm:w-[65%] msm:w-[50%] mmd:w-[30%]">
          <img src={img} className="w-full" alt="img" />
        </div>
        <div className="w-[90%] formsm:w-[80%] gsm:w-[70%] md:w-[60%] mmd-[70%] xl:w-[60%] flex flex-col gap-2 justify-center font-primary">
          <h1 className="text-[1.5rem] formsm:text-[2rem] vsm:text-[2.5rem] mmd:text-[1.8rem] lg:text-[2.5rem] xl:text-[3rem] text-black text-center mmd:text-left font-primary leading-[1.5rem] formsm:leading-[2rem] vsm:leading-[2.5rem] xl:leading-[3rem]">Connecting Freelancers, Empowering Collaboration</h1>
          <p className="text-[1rem] formsm:text-[1.2rem] vsm:text-[1.5rem] mmd:text-[1.3rem] lg:text-[1.5rem] xl:text-[2rem] mt-2 text-black text-center mmd:text-left  font-para leading-[1.2rem] vsm:leading-[1.5rem] xl:leading-[2rem]">
            Welcome to <b className="font-primaryBold">GitCollabX</b>, the platform that
            brings freelancers together to collaborate on projects with ease.
            Join our community and take your freelance endeavors to new heights.
          </p>
        </div>
      </div>
      </div>

    {/* Features Section  */}
      <div className="text-black font-primary bg-[#7e7e7e] text-center mt-[1rem] lg:mt-[4rem]">
        <h2 className="text-[2rem] formsm:text-[3rem] lg:text-[4rem]">Features</h2>
      </div>

      
      <main className="bg-[#7e7e7e] md:py-[1rem] flex items-center justify-center">
        <div className="w-[95dvw] gsm:w-[85dvw] md:w-[80dvw] xxl:w-[70dvw] min-h-[70vh] py-[2rem] flex items-stretch justify-center gap-[2rem] flex-wrap">
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
          <BsGithub className="githubIcon text-white text-[1.8rem] msm:text-[2.5rem]" />
        </a>
        <span className="copyrightHome text-[0.8rem] vsm:text-[1.1rem] msm:text-[1.5rem] text-white leading-0">©2023 | ALL RIGHTS RESERVED</span>
      </footer>
    </div>
  );
}
