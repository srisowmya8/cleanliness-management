import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link
import "./Login.css"; // Importing the CSS file

const Login = () => {
  const [userType, setUserType] = useState("resident"); // Default role
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy authentication logic (replace with API calls)
    if (userId === "resident123" && password === "password" && userType === "resident") {
      navigate("/resident-dashboard");
    } else if (userId === "volunteer123" && password === "password" && userType === "volunteer") {
      navigate("/volunteer-dashboard");
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h2 className="title">Welcome {userType === "resident" ? "Resident" : "Volunteer"}!</h2>

        <form onSubmit={handleLogin} className="form">
          <label className="label">Select Role:</label>
          <select 
            value={userType} 
            onChange={(e) => setUserType(e.target.value)}
            className="select"
          >
            <option value="resident">Resident</option>
            <option value="volunteer">Volunteer</option>
          </select>

          <label className="label">User ID:</label>
          <input 
            type="text" 
            value={userId} 
            onChange={(e) => setUserId(e.target.value)} 
            required 
            className="input"
          />

          <label className="label">Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="input"
          />

          <button 
            type="submit" 
            className={hover ? "button button-hover" : "button"} 
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}
          >
            Login
          </button>
        </form>

        {/* Signup Link for Residents and Volunteers */}
        {userType === "resident" && (
          <p className="signup-link">
            New user? <Link to="/resident-signup">Sign up here</Link>
          </p>
        )}
        {userType === "volunteer" && (
          <p className="signup-link">
            New volunteer? <Link to="/volunteer-signup">Sign up here</Link>
          </p>
        )}

      </div>
    </div>
  );
};

export default Login;
