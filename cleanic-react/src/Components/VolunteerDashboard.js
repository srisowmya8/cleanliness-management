import React from "react";
import "./VolunteerDashboard.css"; 

const VolunteerDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1>Welcome, Volunteer!</h1>
        <h2>🚮 Cleanic – Manage Cleanliness Efforts</h2>
        <p>Review requests, assign workers, and track community cleanliness.</p>

        {/* Cleanliness Info Section */}
        <div className="cleanliness-info">
          <div className="card">
            <img src="/Images/pending-requests.png" alt="Pending Requests" />
            <p>View and assign cleanliness requests.</p>
          </div>

          <div className="card">
            <img src="/Images/completed-tasks.png" alt="Completed Tasks" />
            <p>Check resolved cleanliness issues.</p>
          </div>

          <div className="card">
            <img src="/Images/community-awareness.png" alt="Awareness Drives" />
            <p>Organize cleanliness awareness programs.</p>
          </div>

          <div className="card">
            <img src="/Images/stats.png" alt="Volunteer Stats" />
            <p>Track cleanliness improvements & stats.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
