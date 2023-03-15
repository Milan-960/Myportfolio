import React from "react";
import { FaDumbbell } from "react-icons/fa";
import Tooltip from "../../../components/ToolTips/tooltips";

import Zoom from "react-reveal/Zoom";

export const HighSkills = () => {
  const skills = [
    {
      name: "Reactjs",
      link: "https://reactjs.org",
    },
    {
      name: "Javascript",
      link: "https://www.javascript.com/",
    },
    {
      name: "Typescript",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Redux",
      link: "https://redux.js.org",
    },
    {
      name: "NextJs",
      link: "https://nextjs.org/",
    },
    {
      name: "Nodejs",
      link: "https://nodejs.org/en/",
    },
    {
      name: "NPM",
      link: "https://www.npmjs.com/",
    },
    {
      name: "Sass/Scss",
      link: "https://sass-lang.com/",
    },
    {
      name: "Tailwindcss",
      link: "https://tailwindcss.com/",
    },
  ];

  return (
    <div>
      <Zoom top cascade>
        <div className="techSkills_h1">
          <FaDumbbell />
          <h1> HIGHLIGHTS </h1>
        </div>
      </Zoom>

      <div className="techSkills_container">
        {skills.map((skill) => (
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
