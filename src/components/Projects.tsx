import "../Css/projects.css";

import { Link } from "react-router-dom";
import ProjectArray from "./projects/ProjectsArray";

const Projects = () => {
  return (
    <div className="projects-container">
      {ProjectArray.map(({ id, title, description /*imageUrl*/ }) => (
        <Link to={`/projects/${id}`} key={id} className="project-button">
          {/* <img src={imageUrl} alt={title} className="project-image" /> */}
          <div className="project-info">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
