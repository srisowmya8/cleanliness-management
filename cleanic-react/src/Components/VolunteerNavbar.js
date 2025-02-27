import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaTasks } from "react-icons/fa"; 
import "./Navbar.css";

const VolunteerNavbar = () => {
  return (
    <nav className="navbar">
      <div className="app-logo">♻️ Cleanic (Volunteer)</div>
      <ul>
        <li>
          <NavLink to="/volunteer-dashboard" className="nav-link">
            <FaHome className="icon" />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/manage-requests" className="nav-link">
            <FaTasks className="icon" />
            <span>Manage Requests</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default VolunteerNavbar;
