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
      {/* <h1>Pc build</h1> */}
      <p>
        Here follows a list with posts about the process to keep it ordered.
      </p>
      <ul>
        {PcBuildPostsArray.map(({ id, title, content }, index) => {
          const alignmentClass = index % 2 === 0 ? "even" : "odd";
          return (
            <li key={id} className={alignmentClass}>
              <button onClick={() => togglePost(id)}>{title}</button>
              {openPostId === id && (
                <div className="post-content">{content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PcBuild;
