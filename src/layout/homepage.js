import React from "react";
import { Outlet } from "react-router-dom";
import "./homepage.css";
import Sidebar from "../components/sidebar";
import Header from "../components/header";

function Homepage() {
  return (
    <div className="app">
      <main className="content">
        <div className="sidebar">
          <Sidebar />
          <div className="header">
            <Header />
            <div className="maincontent">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
