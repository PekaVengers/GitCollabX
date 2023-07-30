import { Link } from "react-router-dom";
import "../styles/PremiumRequired.css";

export default function PremiumRequired() {
  return (
    <div className="premium-required-page">
      <div className="premiumReq">
      <h1 className="buyPremium">Buy Premium to Access this Feature!</h1>
      <Link to="/premium" className="buyLink">Buy Now</Link>
      </div>
    </div>
  )
}