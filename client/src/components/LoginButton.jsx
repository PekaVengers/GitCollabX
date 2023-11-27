import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
  const {loginWithRedirect} = useAuth0();
  return (
    <button onClick={() => loginWithRedirect()} className="bg-[#66aff0] text-[1.2rem] vsm:text-[1.5rem] msm:text-[1.8rem] text-black border-2 border-white transform-uppercase font-primary px-[1rem] lg:px-[2rem] py-[0.2rem] rounded-[0.625rem]">
      Log In
    </button>
  )
}