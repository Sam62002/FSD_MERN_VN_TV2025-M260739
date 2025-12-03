// src/components/Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="brand">My College</div>
      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => isActive ? "link active" : "link"}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "link active" : "link"}>
          About
        </NavLink>
        <NavLink to="/departments" className={({ isActive }) => isActive ? "link active" : "link"}>
          Departments
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "link active" : "link"}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;