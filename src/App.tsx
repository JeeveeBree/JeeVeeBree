import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import Portfolio from "./components/Portfolio.jsx";
import AboutMe from "./components/AboutMe.jsx";
import GetInTouch from "./components/GetInTouch.jsx";
// import { setupMouseTracker } from "./components/setupMouseTracker.jsx";
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
