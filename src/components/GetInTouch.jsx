import "../Css/getInTouch.css";
import GitHubIcon from "../assets/iconmonstr-github-1.svg"; // Pas het pad aan naar je SVG-bestand
import EmailIcon from "../assets/iconmonstr-email-10.svg";
import LinkedInIcon from "../assets/iconmonstr-linkedin-1.svg";

function GetInTouch() {
  return (
    <main className="main">
      <div className="content">
        I’d love to hear from you! Whether you want to discuss a project,
        collaborate, or just have a friendly chat about tech, feel free to reach
        out. You can contact me directly via email or LinkedIn and also check
        out my projects on GitHub. I look forward to connecting!
      </div>

      <p className="link">
        <a
          href="mailto:jornvbree@live.nl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={EmailIcon} alt="Email" width="24" height="24" />
        </a>

        <a
          href="https://www.linkedin.com/in/jorn-van-bree-3483a823b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedInIcon} alt="LinkedIn" width="24" height="24" />
        </a>

        <a
          href="https://github.com/JeeveeBree"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubIcon} alt="GitHub" width="24" height="24" />
        </a>
      </p>
    </main>
  );
}

export default GetInTouch;
