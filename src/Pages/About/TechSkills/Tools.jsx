import React from "react";
import Tooltip from "../../../components/ToolTips/tooltips";
import { FaTools } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";

export const Tools = () => {
  const TOOLS = [
    {
      name: "Github",
      link: "https://github.com",
    },
    {
      name: "Bitbucket",
      link: "https://bitbucket.org/product",
    },
    {
      name: "Gitlab",
      link: "https://about.gitlab.com/",
    },
    {
      name: "VSCode",
      link: "https://code.visualstudio.com/",
    },
    {
      name: "StoryBook",
      link: "https://storybook.js.org/",
    },
    {
      name: "Tailwindcss",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Styled components",
      link: "https://styled-components.com/",
    },
  ];
  return (
    <div>
      <Zoom top cascade>
        <div className="techSkills_h1">
          <FaTools />
          <h1>TOOLS</h1>
        </div>
      </Zoom>

      <div className="techSkills_container">
        {TOOLS.map((skill) => (
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
