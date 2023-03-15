import React from "react";
import Tooltip from "../../../components/ToolTips/tooltips";
import { FaTools } from "react-icons/fa";

export const Tools = () => {
  return (
    <div>
      <div className="techSkills_h1">
        <FaTools />
        <h1>TOOLS</h1>
      </div>

      <div className="techSkills_container">
        <Tooltip content="Github" className="techIcons_Skills">
          <li className="techIcon">Github</li>
        </Tooltip>

        <Tooltip content="Bitbucket" className="techIcons_Skills">
          <li className="techIcon">Bitbucket</li>
        </Tooltip>

        <Tooltip content="Gitlab" className="techIcons_Skills">
          <li className="techIcon">Gitlab</li>
        </Tooltip>

        <Tooltip content="VSCode" className="techIcons_Skills">
          <li className="techIcon">VSCode</li>
        </Tooltip>

        <Tooltip content="IntelliJ" className="techIcons_Skills">
          <li className="techIcon">IntelliJ</li>
        </Tooltip>

        <Tooltip content="IntelliJ" className="techIcons_Skills">
          <li className="techIcon">JIRA</li>
        </Tooltip>

        <Tooltip content="ClickUp" className="techIcons_Skills">
          <li className="techIcon">ClickUp</li>
        </Tooltip>
      </div>
    </div>
  );
};
