import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import GetInTouch from "./components/GetInTouch";

import "./Css/App.css";

function App() {
  return (
    <Router>
      <nav className="nav">
        <div className="button">Jorn van Bree</div>
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Get in touch</Link>
      </nav>
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<GetInTouch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
