// import "../Css/portfolio.css";
import { Outlet, Link } from "react-router-dom";

function Portfolio() {
  return (
    <>
      <main className="main">
        Welcome to my site! Hi there! I’m Jorn van Bree, a passionate front-end
        developer with a love for crafting intuitive and beautiful web
        experiences. As I begin my journey into the world of web development,
        I'm excited to bring your ideas to life with clean, responsive designs
        and modern web technologies. I specialize in HTML, CSS, and JavaScript,
        with a growing interest in frameworks like React. Whether you're looking
        for a sleek, user-friendly website or an interactive web application,
        I’m here to help make your vision a reality. Feel free to explore my
        projects, and don’t hesitate to get in touch if you’d like to
        collaborate or just chat about tech!
      </main>
      <nav>
        <Link to="projects">Bekijk projecten</Link>
      </nav>
    </>
  );
}

export default Portfolio;
