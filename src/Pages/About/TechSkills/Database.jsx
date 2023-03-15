import React from "react";
import Tooltip from "../../../components/ToolTips/tooltips";
import { FaDatabase } from "react-icons/fa";

export const Database = () => {
  return (
    <div>
      <div className="techSkills_h1">
        <FaDatabase />
        <h1> DATABASE </h1>
      </div>

      <div className="techSkills_container">
        <Tooltip content="MongoBD" className="techIcons_Skills">
          <li className="techIcon">MongoBD</li>
        </Tooltip>

        <Tooltip content="Firebase" className="techIcons_Skills">
          <li className="techIcon">Firebase</li>
        </Tooltip>

        <Tooltip content="PostgreSQL" className="techIcons_Skills">
          <li className="techIcon">PostgreSQL</li>
        </Tooltip>
      </div>
    </div>
  );
};
