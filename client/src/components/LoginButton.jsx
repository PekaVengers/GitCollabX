import { useAuth0 } from "@auth0/auth0-react";
import "../styles/LoginButton.css"

export default function LoginButton() {
  const {loginWithRedirect} = useAuth0();
  return (
    <button onClick={() => loginWithRedirect()} className="loginBtn">
      Log In
    </button>
  )
}