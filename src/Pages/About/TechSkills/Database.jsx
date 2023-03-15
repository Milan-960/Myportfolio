import React from "react";
import Tooltip from "../../../components/ToolTips/tooltips";
import { FaDatabase } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";

export const Database = () => {
  const DATABASE = [
    {
      name: "MongoBD",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      link: "https://firebase.google.com/",
    },
    {
      name: "PostgreSQL",
      link: "https://www.postgresql.org/",
    },
  ];
  return (
    <div>
      <Zoom top cascade>
        <div className="techSkills_h1">
          <FaDatabase />
          <h1> DATABASE </h1>
        </div>
      </Zoom>

      <div className="techSkills_container">
        {DATABASE.map((skill) => (
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
