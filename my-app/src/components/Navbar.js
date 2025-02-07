import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkedAlt, FaBars, FaTimes } from "react-icons/fa"; // Icons for better UI
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <FaMapMarkedAlt className="logo-icon" />
        <span>Map Explorer</span>
      </div>

      {/* Menu Button for Mobile */}
      <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/map" onClick={() => setMenuOpen(false)}>Map</Link>
        </li>
        <li>
          <Link to="/form" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
