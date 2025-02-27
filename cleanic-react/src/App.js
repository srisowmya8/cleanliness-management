import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./Components/Login";
import ResidentDashboard from "./Components/ResidentDashboard";
import VolunteerDashboard from "./Components/VolunteerDashboard";
import ResidentRequest from "./Components/ResidentRequest";
import Progress from "./Components/Progress";
import ResidentNavbar from "./Components/ResidentNavbar"; 
import VolunteerNavbar from "./Components/VolunteerNavbar";
import ManageRequests from "./Components/ManageRequests";
import ResidentSignup from "./Components/ResidentSignup";
import VolunteerSignup from "./Components/VolunteerSignup";


function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

const MainContent = () => {
  const location = useLocation();

  // Show ResidentNavbar only for resident pages
  const showResidentNavbar = ["/resident-dashboard", "/requests", "/progress"].includes(location.pathname);
  
  // Show VolunteerNavbar only for volunteer pages
  const showVolunteerNavbar = ["/volunteer-dashboard"].includes(location.pathname);

  return (
    <>
      {showResidentNavbar && <ResidentNavbar />}
      {showVolunteerNavbar && <VolunteerNavbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/resident-signup" element={<ResidentSignup />} />
        <Route path="/volunteer-signup" element={<VolunteerSignup />} />
        <Route path="/resident-dashboard" element={<ResidentDashboard />} />
        <Route path="/volunteer-dashboard" element={<VolunteerDashboard />} />
        <Route path="/requests" element={<ResidentRequest />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/manage-requests" element={<ManageRequests />} />
      </Routes>
    </>
  );
};

export default App;
