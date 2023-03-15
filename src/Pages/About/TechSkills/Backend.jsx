import React from "react";
import { SiJavascript } from "react-icons/si";
import Tooltip from "../../../components/ToolTips/tooltips";
import Zoom from "react-reveal/Zoom";

export const Backend = () => {
  const BACKEND = [
    {
      name: "Nodejs",
      link: "https://nodejs.org/en/",
    },
    {
      name: "NestJs",
      link: "https://nestjs.com/",
    },
    {
      name: "GraphQL",
      link: "https://graphql.org/",
    },
  ];
  return (
    <div>
      <Zoom top cascade>
        <div className="techSkills_h1">
          <SiJavascript />
          <h1> BACKEND </h1>
        </div>
      </Zoom>

      <div className="techSkills_container">
        {BACKEND.map((skill) => (
          <Tooltip content={skill.name} className="techIcons_Skills">
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
