import "../Css/portfolio.css";

import { Link } from "react-router-dom";
import PortfolioArray from "./portfolio/PortfolioArray";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {PortfolioArray.map(({ id, title, description /*imageUrl*/ }) => (
        <Link to={`/portfolio/${id}`} key={id} className="portfolio-button">
          {/* <img src={imageUrl} alt={title} className="portfolio-image" /> */}
          <div className="portfolio-info">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Portfolio;
