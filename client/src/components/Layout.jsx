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
      <div className="rightComponent">
        <div>
          <Outlet />
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}
