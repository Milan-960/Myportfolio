import React from "react";
import { GrHost } from "react-icons/gr";
import Tooltip from "../../../components/ToolTips/tooltips";
import Zoom from "react-reveal/Zoom";

export const Hosting = () => {
  const HOSTING = [
    {
      name: "Vercel",
      link: "https://vercel.com/",
    },
    {
      name: "AWS",
      link: "https://aws.amazon.com/",
    },
    {
      name: "Netlify",
      link: "https://www.netlify.com/",
    },
    {
      name: "Heroku",
      link: "https://www.heroku.com/",
    },
    {
      name: "GithubPages",
      link: "https://pages.github.com/",
    },
  ];

  return (
    <div>
      <Zoom top cascade>
        <div className="techSkills_h1">
          <GrHost />
          <h1>Hosting</h1>
        </div>
      </Zoom>

      <div className="techSkills_container">
        {HOSTING.map((skill) => (
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
