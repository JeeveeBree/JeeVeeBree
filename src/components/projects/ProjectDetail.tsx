import { useParams } from "react-router-dom";
import Website from "./Website";
import PcBuild from "./PcBuild";

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const renderProjectComponent = () => {
    switch (projectId) {
      case "Website":
        return <Website />;
      case "PcBuild":
        return <PcBuild />;
      // case "Placeholder":
      // return <Placeholder />;
      default:
        return <p>No project found</p>;
    }
  };

  return <div className="project-detail">{renderProjectComponent()}</div>;
};

export default ProjectDetail;
