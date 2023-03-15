import React from "react";
import { TfiHandPointRight } from "react-icons/tfi";
import Tooltip from "../../../components/ToolTips/tooltips";

export const Discipline = () => {
  return (
    <div>
      <div className="techSkills_h1">
        <TfiHandPointRight />
        <h1>Methodologies</h1>
      </div>

      <div className="techSkills_container">
        <Tooltip content="Agile/Scrum" className="techIcons_Skills">
          <li className="techIcon">Agile/Scrum</li>
        </Tooltip>

        <Tooltip content="TDD" className="techIcons_Skills">
          <li className="techIcon">TDD</li>
        </Tooltip>
      </div>
    </div>
  );
};
