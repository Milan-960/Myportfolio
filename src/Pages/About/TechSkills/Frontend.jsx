import React from "react";
import { FaDumbbell } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import Tooltip from "../../../components/ToolTips/tooltips";

export const Frontend = () => {
  return (
    <div>
      <div className="techSkills_h1">
        <DiReact />
        <h1> Frontend </h1>
      </div>
      <div className="techSkills_container">
        <Tooltip content="React" className="techIcons_Skills">
          <li className="techIcon">Reactjs</li>
        </Tooltip>

        <Tooltip content="Javascript" className="techIcons_Skills">
          <li className="techIcon">Javascript</li>
        </Tooltip>

        <Tooltip content="NextJs" className="techIcons_Skills">
          <li className="techIcon">NextJs</li>
        </Tooltip>

        <Tooltip content="Material UI" className="techIcons_Skills">
          <li className="techIcon">Material UI</li>
        </Tooltip>

        <Tooltip content="StoryBook" className="techIcons_Skills">
          <li className="techIcon">StoryBook</li>
        </Tooltip>

        <Tooltip content="Tailwindcss" className="techIcons_Skills">
          <li className="techIcon">Tailwindcss</li>
        </Tooltip>

        <Tooltip content="Styled components" className="techIcons_Skills">
          <li className="techIcon">Styled components</li>
        </Tooltip>
      </div>
    </div>
  );
};
