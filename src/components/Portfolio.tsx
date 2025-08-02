import "../Css/portfolio.css";
import { /*Outlet,*/ Link } from "react-router-dom";

function Portfolio() {
  return (
    <>
      <main className="main">
        <p>
          There is definitely an appeal to flashy websites with a lot of color
          and animations, but for my personal website I went a different route.
          My choice here is for a more minimalistic style in a dark theme, to
          make it easy to navigate, very readable and a overall calming
          experience. This site is built using HTML, CSS and TypeScript keeping
          the minimalistic mindset even though the scope of the site keeps
          growing. Which isn't negative, I just keep realizing new things I want
          to add or adjust. It is fun to tinker with and discover what's
          possible and what I personally like about a website, about my website.
        </p>
        <p>
          As you can see I like a brutalist style for my site. This is in part
          because I like the style and in part because for my personal site I
          like to use a combination of HTML, CSS and JavaScript, which gives me
          more freedom to style my site as I see fit in comparison to using
          tools like Figma.
        </p>
        <p>
          Welcome to my site! Hi there! I’m Jorn van Bree, a passionate
          front-end developer with a love for crafting intuitive and beautiful
          web experiences. As I begin my journey into the world of web
          development, I'm excited to bring your ideas to life with clean,
          responsive designs and modern web technologies. I specialize in HTML,
          CSS, and JavaScript, with a growing interest in frameworks like React.
          Whether you're looking for a sleek, user-friendly website or an
          interactive web application, I’m here to help make your vision a
          reality. Feel free to explore my projects, and don’t hesitate to get
          in touch if you’d like to collaborate or just chat about tech!
        </p>
      </main>
      <nav>
        <Link to="/projects" className="Link-to-projects">
          Go to projects
        </Link>
      </nav>
    </>
  );
}

export default Portfolio;
