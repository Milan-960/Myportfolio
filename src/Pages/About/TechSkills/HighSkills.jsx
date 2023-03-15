import React from "react";
import { FaDumbbell } from "react-icons/fa";
import Tooltip from "../../../components/ToolTips/tooltips";

export const HighSkills = () => {
  return (
    <div>
      <div className="techSkills_h1">
        <FaDumbbell />
        <h1> HIGHLIGHTS </h1>
      </div>
      <div className="techSkills_container">
        <Tooltip content="React" className="techIcons_Skills">
          <li className="techIcon">Reactjs</li>
        </Tooltip>

        <Tooltip content="Javascript" className="techIcons_Skills">
          <li className="techIcon">Javascript</li>
        </Tooltip>

        <Tooltip content="Typescript" className="techIcons_Skills">
          <li className="techIcon">Typescript</li>
        </Tooltip>

        <Tooltip content="Redux" className="techIcons_Skills">
          <li className="techIcon">Redux</li>
        </Tooltip>

        <Tooltip content="NextJs" className="techIcons_Skills">
          <li className="techIcon">NextJs</li>
        </Tooltip>

        <Tooltip content="Nodejs" className="techIcons_Skills">
          <li className="techIcon">Nodejs</li>
        </Tooltip>

        <Tooltip content="NPM" className="techIcons_Skills">
          <li className="techIcon">NPM</li>
        </Tooltip>

        <Tooltip content="Sass" className="techIcons_Skills">
          <li className="techIcon">Sass/Scss</li>
        </Tooltip>

        <Tooltip content="Tailwindcss" className="techIcons_Skills">
          <li className="techIcon">Tailwindcss</li>
        </Tooltip>
      </div>
    </div>
  );
};
