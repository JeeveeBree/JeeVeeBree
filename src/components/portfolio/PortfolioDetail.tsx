import { useParams } from "react-router-dom";
import PortfolioWebsite from "./PortfolioWebsite";
import PortfolioSchool from "./PortfolioSchool";

const PortfolioDetail = () => {
  const { portfolioId } = useParams<{ portfolioId: string }>();

  const renderPortfolioComponent = () => {
    switch (portfolioId) {
      case "PortfolioSchool":
        return <PortfolioSchool />;
      case "PortfolioWebsite":
        return <PortfolioWebsite />;

      // case "Placeholder":
      // return <Placeholder />;
      default:
        return <p>No subject found</p>;
    }
  };

  return <div className="portfolio-detail">{renderPortfolioComponent()}</div>;
};

export default PortfolioDetail;
