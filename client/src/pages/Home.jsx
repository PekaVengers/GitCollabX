import LoginButton from "../components/LoginButton"
import GithubPullRequests from "./GithubPullRequests"

export default function Home() {
  return <div>
    <nav>
      <LoginButton />
      <GithubPullRequests/>
    </nav>

  </div>
}