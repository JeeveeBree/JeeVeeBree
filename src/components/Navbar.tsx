import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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
        <div className={`logo ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Jorn van Bree
          </Link>
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/portfolio" onClick={() => setIsOpen(false)}>
            Portfolio
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>
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

export default Navbar;
