import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import navigation hooks
import "./ResidentSignup.css"; // Import CSS for styling

const ResidentSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    area: "",
    flatNo: "",
    buildingName: "",
  });

  const [phoneError, setPhoneError] = useState(""); // Error message for phone validation
  const navigate = useNavigate(); // Hook for navigation

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Validate phone number to allow only 10 digits
      if (/^\d{0,10}$/.test(value)) {
        setFormData({ ...formData, phone: value });
        setPhoneError(""); // Clear error if valid
      } else {
        setPhoneError("Phone number must be exactly 10 digits.");
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if phone number is exactly 10 digits
    if (formData.phone.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits.");
      return;
    }

    console.log("Signup Data:", formData);
    alert("Signup Successful!");
    
    // Navigate to Login page after signup
    navigate("/resident-login"); // Redirect to login page
  };

  return (
    <div className="signup-container">
      <div className="box">
        <h2>📝 Resident Signup</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {phoneError && <p style={{ color: "red" }}>{phoneError}</p>}

          <input
            type="text"
            name="area"
            placeholder="Enter Area"
            value={formData.area}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="flatNo"
            placeholder="Enter Flat No"
            value={formData.flatNo}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="buildingName"
            placeholder="Enter Building Name"
            value={formData.buildingName}
            onChange={handleChange}
            required
          />

          <button type="submit">Signup</button>
        </form>

        {/* Add a link to navigate to the login page */}
        <p className="login-link">
          Already have an account? <Link to="/">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default ResidentSignup;
