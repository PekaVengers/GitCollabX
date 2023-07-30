import { Link } from "react-router-dom";
import "../styles/PremiumRequired.css";

export default function PremiumRequired() {
  return (
    <div className="premium-required-page">
      Buy Premium to Access This!
      <Link to="/premium">Buy Now</Link>
    </div>
  )
}