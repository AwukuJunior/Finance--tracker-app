import React from "react";
import { Link } from "react-router-dom";
import "../components/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <h2 className="sidebar-title">MyApp</h2>
      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link">
          Dashboard
        </Link>
        <Link to="/profile" className="sidebar-link">
          Profile
        </Link>
        <Link to="/settings" className="sidebar-link">
          Settings
        </Link>
        <Link to="/signout" className="sidebar-link signout-link">
          Sign Out
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
