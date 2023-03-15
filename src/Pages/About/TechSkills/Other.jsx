import React from "react";
import { TiArrowRightOutline } from "react-icons/ti";
import Tooltip from "../../../components/ToolTips/tooltips";

export const Other = () => {
  return (
    <div>
      <div className="techSkills_h1">
        <TiArrowRightOutline />
        <h1>OTHERS</h1>
      </div>

      <div className="techSkills_container">
        <Tooltip content="Typescript" className="techIcons_Skills">
          <li className="techIcon">Typescript</li>
        </Tooltip>

        <Tooltip content="Redux" className="techIcons_Skills">
          <li className="techIcon">Redux</li>
        </Tooltip>
      </div>
    </div>
  );
};
