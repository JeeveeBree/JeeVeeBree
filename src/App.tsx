// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Homepage from "./components/Homepage";
// import Portfolio from "./components/Portfolio";
// import AboutMe from "./components/AboutMe";
// import GetInTouch from "./components/GetInTouch";
// import Navbar from "./components/Navbar";
// import "./Css/normalize.css";
// import "./Css/App.css";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="page-content">
//         <h1>Jorn van Bree</h1>
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="/about" element={<AboutMe />} />
//           <Route path="/contact" element={<GetInTouch />} />
//         </Routes>
//       </div>
//       <footer class="footer">
//         <p>© 2025 Jorn van Bree</p>
//       </footer>
//     </Router>
//   );
// }

// export default App;
// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import GetInTouch from "./components/GetInTouch";
import HomeLayout from "./components/HomeLayout";
import MainLayout from "./components/MainLayout";
import "./Css/normalize.css";
import "./Css/App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage met aparte layout */}
        <Route
          path="/"
          element={
            // <HomeLayout>
            <HomeLayout /> /*voorheen had ik hier <Homepage /> staan maar 
            hierdoor kon ik de homelayout niet goed stylen. De homepage is toch
            eigenlijk niet meer van toepassing nu */
            /* </HomeLayout> */
          }
        />

        {/* Andere pagina’s in main layout */}
        <Route
          path="/portfolio"
          element={
            <MainLayout>
              <Portfolio />
            </MainLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <MainLayout>
              <Projects />
            </MainLayout>
          }
        />

        <Route
          path="/about"
          element={
            <MainLayout>
              <AboutMe />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <GetInTouch />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
