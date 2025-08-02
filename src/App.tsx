import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Homepage from "./components/Homepage";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import GetInTouch from "./components/GetInTouch";
import HomeLayout from "./components/HomeLayout";
import MainLayout from "./components/MainLayout";
import ProjectDetail from "./components/projects/ProjectDetail";
import "./Css/normalize.css";
import "./Css/App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage with different layout */}
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

        {/* Other pages in mainlayout */}
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
          path="/projects/:projectId"
          element={
            <MainLayout>
              <ProjectDetail />
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
