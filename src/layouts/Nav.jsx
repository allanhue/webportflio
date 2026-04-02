import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";
import { FaBars, FaHome } from "react-icons/fa";

function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeMenu = (e) => {
      if (open && !e.target.closest(".nav-container")) {
        setOpen(false);
      }
    };

    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [open]);

  return (
    <nav className="nav-container">
      <div className="nav-list">
        <Link to="/" className="nav-logo" aria-label="Go to home page">
          <FaHome size={35} />
        </Link>

        <button
          className="hamburger"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          <FaBars />
        </button>

        <ul id="primary-navigation" className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <Link to="/about" className="nav-link" onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/experience" className="nav-link" onClick={() => setOpen(false)}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link" onClick={() => setOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/certifications" className="nav-link" onClick={() => setOpen(false)}>
              Certifications
            </Link>
          </li>
          <li>
            <Link to="/education" className="nav-link" onClick={() => setOpen(false)}>
              Education
            </Link>
          </li>
          <li>
            {/* <Link to="/interests" className="nav-link" onClick={() => setOpen(false)}>
              Interests
            </Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
