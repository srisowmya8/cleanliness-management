import React from "react";
import "./ResidentDashboard.css"; // Import CSS for styling

const ResidentDashboard = () => {
  return (
    <div className="dashboard-container">

      {/* Dashboard Content */}
      <div className="dashboard-content">
        <h1>Welcome, Resident!</h1>
        <h2 className="highlight-text">✨ Cleanic – Keeping Your Community Spotless</h2>
        <h3>Here you can track cleanliness efforts, raise complaints, and check progress.</h3>

        {/* Cleanliness Info Section */}
        <div className="cleanliness-info">
          <div className="card">
            <img src="/Images/clean-street.png" alt="Clean Street" />
            <p>Recent cleaning done in your area.</p>
          </div>

          <div className="card">
            <img src="/Images/garbage-collection.png" alt="Garbage Issue" />
            <p>Report garbage issues for quick resolution.</p>
          </div>
          <div className="card">
              <img src="/Images/volunteer.png" alt="Volunteering" />
              <p>Become a cleanliness volunteer.</p>
            </div>
           <div className="card">
              <img src="/Images/awareness.png" alt="Awareness" />
              <p>Spread awareness about cleanliness.</p>
            </div>  
        </div>

        

      </div>
    </div>
  );
};

export default ResidentDashboard;
