// import { useState } from "react";
// import "./Css/App.css";
// import "./Css/normalize.css";
// import Homepage from "./components/Homepage";

// function App() {

//   return <Homepage />;
// }
// export default App;

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import GetInTouch from "./components/GetInTouch";

function App() {
  return (
    <Router>
      <nav>
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
