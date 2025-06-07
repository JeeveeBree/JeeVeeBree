import "../Css/getInTouch.css";
import GitHubIcon from "../assets/iconmonstr-github-4.svg";
import EmailIcon from "../assets/iconmonstr-email-10.svg";
import LinkedInIcon from "../assets/iconmonstr-linkedin-5.svg";
// import profilePicture from "../assets/profile-picture.jpg";

function GetInTouch() {
  return (
    <>
      <main className="touchMain">
        {/* <img src={profilePicture} alt="profile-picture" className="profileImg" /> */}
        <div className="touchContent">
          I’d love to hear from you! Whether you want to discuss a project,
          collaborate, or just have a friendly chat about tech, feel free to
          reach out. You can contact me directly via email or LinkedIn and also
          check out my projects on GitHub. I look forward to connecting!
        </div>
      </main>

      <p className="touchLinks">
        <a
          href="mailto:jornvbree@live.nl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={EmailIcon} alt="Email" />
        </a>

        <a
          href="https://www.linkedin.com/in/jorn-van-bree-3483a823b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedInIcon} alt="LinkedIn" />
        </a>

        <a
          href="https://github.com/JeeveeBree"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubIcon} alt="GitHub" />
        </a>
      </p>
    </>
  );
}

export default GetInTouch;
