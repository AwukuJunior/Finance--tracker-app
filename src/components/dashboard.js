import React from "react";
import "../components/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <p className="dashboard-welcome">Welcome to your dashboard, Jasper! 🎉</p>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Projects</h3>
          <p>5 active</p>
        </div>
        <div className="dashboard-card">
          <h3>Tasks</h3>
          <p>12 ongoing</p>
        </div>
        <div className="dashboard-card">
          <h3>Notifications</h3>
          <p>3 unread</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
