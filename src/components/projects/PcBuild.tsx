import { useState } from "react";
import PcBuildPostsArray from "./PcBuildPostsArray";
import "../../Css/PcBuild.css";

function PcBuild() {
  const [openPostId, setOpenPostId] = useState<string | null>(null);

  const togglePost = (id: string) => {
    setOpenPostId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      <h1>Pc build</h1>
      <p>Here follow a couple of posts about the process of building my PC.</p>
      <ul>
        {PcBuildPostsArray.map(({ id, title, content }) => (
          <li key={id}>
            <button onClick={() => togglePost(id)}>{title}</button>
            {openPostId === id && <div className="post-content">{content}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PcBuild;
