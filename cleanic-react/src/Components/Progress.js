import React, { useState } from "react";

const Progress = () => {
  const [progressList, setProgressList] = useState([]);

  const addProgressUpdate = () => {
    setProgressList([...progressList, "New cleanup request is in progress"]);
  };

  return (
    <div>
      <h2 className="highlight-text">Progress Tracking</h2>
      <button onClick={addProgressUpdate}>Add Progress</button>
      <ul>
        {progressList.map((progress, index) => (
          <li key={index}>{progress}</li>
        ))}
      </ul>
    </div>
  );
};

export default Progress;
