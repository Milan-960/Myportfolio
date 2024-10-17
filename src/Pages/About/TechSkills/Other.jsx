import React from "react";
import { TiArrowRightOutline } from "react-icons/ti";
import Tooltip from "../../../components/ToolTips/tooltips";
import Zoom from "react-reveal/Zoom";

export const Other = () => {
  const Other = [
    {
      name: "Docker",
      link: "https://www.docker.com/",
    },
    {
      name: "GraphQL",
      link: "https://graphql.org/",
    },
    {
      name: "WebSocket",
      link: "https://socket.io/",
    },
  ];

  return (
    <div>
      <Zoom top cascade>
        <div className="techSkills_h1">
          <TiArrowRightOutline />
          <h1>OTHERS</h1>
        </div>
      </Zoom>

      <div className="techSkills_container">
        {Other.map((skill) => (
          <Tooltip
            content={skill.name}
            key={skill.name}
            className="techIcons_Skills"
          >
            <div className="techSkills_container">
              <li className="techIcon" key={skill.id}>
                <Zoom top cascade>
                  <a
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {skill.name}
                  </a>
                </Zoom>
              </li>
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
