import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import GetInTouch from "./components/GetInTouch";
import Navbar from "./components/Navbar";
import "./Css/normalize.css";
import "./Css/App.css";

function App() {
  return (
    <Router>
      <Navbar />
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
