import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./VolunteerSignup.css"; // Ensure you have a CSS file for styling

const VolunteerSignup = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [location, setLocation] = useState("");
  const [position, setPosition] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSignup = (e) => {
    e.preventDefault();

    // Perform validation and API call (if any)
    console.log("Signup successful:", { name, id, location, position });

    // Redirect to Login Page after successful signup
    navigate("/");
  };

  return (
    <div className="signup-container">
        <div className="box">
      <h2>Volunteer Signup</h2>
      <form onSubmit={handleSignup}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>ID:</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />

        <label>Location:</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />

        <label>Position:</label>
        <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} required />

        <button type="submit">Sign Up</button>
      </form>

      {/* Already have an account? Redirect to Login */}
      <p className="login-link">
        Already have an account? <Link to="/">Login here</Link>
      </p>
    </div>
    </div>
  );
};

export default VolunteerSignup;
