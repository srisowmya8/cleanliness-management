

import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaTasks, FaChartLine, FaUser } from "react-icons/fa"; 
import "./Navbar.css";

const ResidentNavbar = () => {
  return (
    <nav className="navbar">
      <div className="app-logo">♻️ Cleanic (Resident)</div>
      <ul>
        <li>
          <NavLink to="/resident-dashboard" className="nav-link">
            <FaHome className="icon" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/requests" className="nav-link">
            <FaTasks className="icon" />
            <span>Requests</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/progress" className="nav-link">
            <FaChartLine className="icon" />
            <span>Progress</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="nav-link">
            <FaUser className="icon" />
            <span>Profile</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default ResidentNavbar;
