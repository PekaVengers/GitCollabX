import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../styles/Layout.css";

export default function Layout() {
  return (
    <div className="main-container">
      <div className="leftComponent">
        <Sidebar />
      </div>
      <div className="main-content">
        <div className="main-outlet-content">
          <Outlet />
        </div>
        <div className="footer-container">
          <Footer/>
        </div>
      </div>
    </div>
  )
}
