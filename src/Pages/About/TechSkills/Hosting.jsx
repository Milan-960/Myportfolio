import React from "react";
import { GrHost } from "react-icons/gr";
import Tooltip from "../../../components/ToolTips/tooltips";

export const Hosting = () => {
  return (
    <div>
      <div className="techSkills_h1">
        <GrHost />
        <h1>Hosting</h1>
      </div>

      <div className="techSkills_container">
        <Tooltip content="Vercel" className="techIcons_Skills">
          <li className="techIcon">Vercel</li>
        </Tooltip>

        <Tooltip content="AWS" className="techIcons_Skills">
          <li className="techIcon">AWS</li>
        </Tooltip>

        <Tooltip content="Netlify" className="techIcons_Skills">
          <li className="techIcon">Netlify</li>
        </Tooltip>

        <Tooltip content="Heroku" className="techIcons_Skills">
          <li className="techIcon">Heroku</li>
        </Tooltip>

        <Tooltip content="GithubPages" className="techIcons_Skills">
          <li className="techIcon">GithubPages</li>
        </Tooltip>
      </div>
    </div>
  );
};
