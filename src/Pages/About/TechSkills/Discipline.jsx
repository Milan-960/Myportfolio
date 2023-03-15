import React from "react";
import { TfiHandPointRight } from "react-icons/tfi";
import Tooltip from "../../../components/ToolTips/tooltips";
import Zoom from "react-reveal/Zoom";

export const Discipline = () => {
  const DISCIPLINE = [
    {
      name: "Agile/Scrum",
      link: "https://en.wikipedia.org/wiki/Agile_software_development",
    },
    {
      name: "TDD",
      link: "https://en.wikipedia.org/wiki/Test-driven_development",
    },
  ];
  return (
    <div>
      <Zoom top cascade>
        <div className="techSkills_h1">
          <TfiHandPointRight />
          <h1>Methodologies</h1>
        </div>
      </Zoom>

      <div className="techSkills_container">
        {DISCIPLINE.map((skill) => (
          <Tooltip
            content={skill.name}
            className="techIcons_Skills"
            key={skill.name}
          >
            <div className="techSkills_container">
              <li className="techIcon">
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
