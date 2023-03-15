import React from "react";
import { SiJavascript } from "react-icons/si";
import Tooltip from "../../../components/ToolTips/tooltips";

export const Backend = () => {
  return (
    <div>
      <div className="techSkills_h1">
        <SiJavascript />
        <h1> BACKEND </h1>
      </div>

      <div className="techSkills_container">
        <Tooltip content="Nodejs" className="techIcons_Skills">
          <li className="techIcon">Nodejs</li>
        </Tooltip>

        <Tooltip content="NestJs" className="techIcons_Skills">
          <li className="techIcon">NestJs</li>
        </Tooltip>

        <Tooltip content="GraphQL" className="techIcons_Skills">
          <li className="techIcon">GraphQL</li>
        </Tooltip>
      </div>
    </div>
  );
};
