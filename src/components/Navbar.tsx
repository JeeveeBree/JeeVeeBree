import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import hamburgerIcon from "../assets/iconmonstr-menu-circle-filled.svg";

import "../Css/Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="logo">Jorn van Bree</div>
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <img
            src={hamburgerIcon}
            alt="hamburgerMenu"
            className="hamburger-icon"
          />
          {/* ☰ */}
        </button>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)}>
            Portfolio
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About Me
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
