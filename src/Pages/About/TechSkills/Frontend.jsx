import React from "react";
import { DiReact } from "react-icons/di";
import Tooltip from "../../../components/ToolTips/tooltips";
import Zoom from "react-reveal/Zoom";

export const Frontend = () => {
  const Frontend = [
    {
      name: "Reactjs",
      link: "https://reactjs.org",
    },
    {
      name: "Javascript",
      link: "https://www.javascript.com/",
    },
    {
      name: "NextJs",
      link: "https://nextjs.org/",
    },
    {
      name: "Material UI",
      link: "https://mui.com/",
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
          <DiReact />
          <h1> Frontend </h1>
        </div>
      </Zoom>

      <div className="techSkills_container">
        {Frontend.map((skill) => (
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
