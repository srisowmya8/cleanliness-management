import React, { useState } from "react";
import "./ManageRequests.css";
import VolunteerNavbar from "./VolunteerNavbar"; // Import Navbar

const ManageRequests = () => {
  const [requests, setRequests] = useState([
    { id: 1, location: "Street 12, City", problem: "Garbage Overflow", status: "Pending" },
    { id: 2, location: "Park Lane", problem: "Blocked Drain", status: "Pending" },
  ]);

  const handleAccept = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === id ? { ...req, status: "Assigned Worker" } : req
      )
    );
    alert("Worker Assigned Successfully!");
  };

  return (
    <>
      <VolunteerNavbar /> {/* Add Navbar Here */}
      <div className="manage-requests">
        <h2>📋 Manage Requests</h2>
        <div className="requests-list">
          {requests.map((req) => (
            <div key={req.id} className="request-card">
              <h3>📍 Location: {req.location}</h3>
              <p>⚠️ Problem: {req.problem}</p>
              <p>🔄 Status: {req.status}</p>
              {req.status === "Pending" && (
                <button onClick={() => handleAccept(req.id)}>Accept & Assign Worker</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ManageRequests;
