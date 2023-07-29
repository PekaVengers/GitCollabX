import { useAuth0 } from "@auth0/auth0-react";
import "../styles/LogoutButton.css"

export default function LogoutButton() {
  const {logout} = useAuth0();
  return (
    <button onClick={() => logout()} className="logoutBtn">
      Log Out
    </button>
  )
}