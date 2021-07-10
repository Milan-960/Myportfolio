import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  );
}

export default Header;
