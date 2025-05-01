import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import GetInTouch from "./components/GetInTouch";

import "./Css/App.css";

// document.addEventListener("DOMContentLoaded", () => {
//   setupMouseTracker();
// });

function App() {
  return (
    <Router>
      <nav className="nav">
        <div className="logo">JeeveeBree</div>
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Get in touch</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<GetInTouch />} />
      </Routes>
    </Router>
  );
}

export default App;
