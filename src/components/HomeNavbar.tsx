import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import hamburgerIcon from "../assets/iconmonstr-menu-circle-filled.svg";

import "../Css/homeNavbar.css";

const HomeNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="homenavbar-nav">
      <div className="homenavbar-title">Jorn van Bree</div>

      <div className="homenavbar-nav-container">
        {/* <div className="homenavbar-logo">Jorn van Bree</div> */}
        {/* <button
          className="homenavbar-hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <img
            src={hamburgerIcon}
            alt="hamburgerMenu"
            className="homenavbar-hamburger-icon"
          /> */}
        {/* ☰ */}
        {/* </button> */}

        <div className={`homenavbar-nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/portfolio" onClick={() => setIsOpen(false)}>
            Portfolio
          </Link>
          <Link to="/portfolio/projects" onClick={() => setIsOpen(false)}>
            Projects
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

export default HomeNavbar;
