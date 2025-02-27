import React, { useState } from "react";
import "./ResidentRequest.css";

const ResidentRequest = () => {
  const [location, setLocation] = useState("");
  const [problem, setProblem] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ location, problem, image }); // Send this to backend later
    alert("Request Submitted Successfully!");
  };

  return (
    <div className="request-container">
      <h2 className="highlight-text">📝 Submit a Cleanliness Issue</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <textarea
          placeholder="Describe the problem..."
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default ResidentRequest;
