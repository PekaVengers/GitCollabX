
import "../styles/Premium.css";
import { BsPersonCircle } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaAddressCard, FaCity } from "react-icons/fa";
import { redirect, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

const Premium = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  function handlePayment() {
    localStorage.setItem("hasPremium", "1");
    const path = searchParams.get("path");
    if (path) {
      setSearchParams("");
      return navigate(path);
    } else {
      return redirect("/profile");
    }
  }
  return (
    <div className="row-pay">
      <div className="col-75">
        <div className="premium-container">
          <form method="post" className="paymentForm">
            <div className="row-pay">
              <div className="col-50">
                <h4 className="headText">Billing Address</h4>
                <label htmlFor="fname">
                  <BsPersonCircle /> Full Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Name"
                />
                <label htmlFor="email">
                  <MdEmail /> Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <label htmlFor="adr">
                  <FaAddressCard /> Address
                </label>
                <input
                  type="text"
                  id="adr"
                  name="address"
                  placeholder="Address"
                />
                <label htmlFor="city">
                  <FaCity /> City
                </label>
                <input type="text" id="city" name="city" placeholder="City" />

                <div className="row-pay">
                  <div className="col-50">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="State or UT"
                    />
                  </div>
                  <div className="col-50">
                    <label htmlFor="zip">Zip</label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      placeholder="Postal Code"
                    />
                  </div>
                </div>
              </div>

              <div className="col-50">
                <h4 className="headText">Pay with Card</h4>
                <label htmlFor="cname">Name on Card</label>
                <input
                  type="text"
                  id="cname"
                  name="cardname"
                  placeholder="Name"
                />
                <label htmlFor="cname">Amount</label>
                <input
                  type="text"
                  id="cname"
                  name="amount"
                  placeholder="$ 0.0"
                />
                <label htmlFor="ccnum">Credit card number</label>
                <input
                  type="text"
                  id="cname"
                  name="cardname"
                  placeholder="Card Number"
                />
                <label htmlFor="ccnum">Description</label>
                <input
                  type="text"
                  id="ccnum"
                  name="cardnumber"
                  placeholder="Description"
                />
                <label htmlFor="expmonth">Exp Month</label>
                <input
                  type="text"
                  id="expmonth"
                  name="expmonth"
                  placeholder="Expiry Month"
                />
                <div className="row-pay">
                  <div className="col-50">
                    <label htmlFor="expyear">Exp Year</label>
                    <input
                      type="text"
                      id="expyear"
                      name="expyear"
                      placeholder="Expiry Year"
                    />
                  </div>
                  <div className="col-50">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="***" />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn" onClick={handlePayment}>Make Payment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Premium;
