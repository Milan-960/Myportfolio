import ms from "./TechSkills.module.scss";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
  DiNpm,
} from "react-icons/di";
import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiFirebase,
  SiPostgresql,
  SiAdobexd,
  SiYarn,
  SiAmazonaws,
} from "react-icons/si";

import Tooltip from "../../../components/ToolTips/tooltips";
import { HighSkills } from "./HighSkills";
import { Frontend } from "./Frontend";

const TechSkills = () => {
  return (
    <>
      <HighSkills />
      <Frontend />
      <ul className="techSkills_container">
        <Tooltip content="Javascript" className="techIcons_Skills">
          <li className="techIcon">
            <SiJavascript />
          </li>
        </Tooltip>

        <Tooltip content="Typescript" className="techIcons_Skills">
          <li className="techIcon">
            <SiTypescript />
          </li>
        </Tooltip>

        <Tooltip content="React" className="techIcons_Skills">
          <li className="techIcon">
            <DiReact />
          </li>
        </Tooltip>

        <Tooltip content="Typescript" className="techIcons_Skills">
          <li className="techIcon">
            <SiRedux />
          </li>
        </Tooltip>

        <Tooltip content="Nodejs" className="techIcons_Skills">
          <li className="techIcon">
            <DiNodejs />
          </li>
        </Tooltip>

        <Tooltip content="Sass" className="techIcons_Skills">
          <li className="techIcon">
            <DiSass />
          </li>
        </Tooltip>

        <Tooltip content="NPM" className="techIcons_Skills">
          <li className="techIcon">
            <DiNpm />
          </li>
        </Tooltip>

        <Tooltip content="Yarn" className="techIcons_Skills">
          <li className="techIcon">
            <SiYarn />
          </li>
        </Tooltip>

        <Tooltip content="AWS" className="techIcons_Skills">
          <li className="techIcon">
            <SiAmazonaws />
          </li>
        </Tooltip>

        <Tooltip content="Mongodb" className="techIcons_Skills">
          <li className="techIcon">
            <DiMongodb />
          </li>
        </Tooltip>

        <Tooltip content="Firebase" className="techIcons_Skills">
          <li className="techIcon">
            <SiFirebase />
          </li>
        </Tooltip>

        <Tooltip content="Postgresql " className="techIcons_Skills">
          <li className="techIcon">
            <SiPostgresql />
          </li>
        </Tooltip>

        <Tooltip content="Git" className="techIcons_Skills">
          <li className="techIcon">
            <DiGit />
          </li>
        </Tooltip>

        <Tooltip content="Adobexd" className="techIcons_Skills">
          <li className="techIcon">
            <SiAdobexd />
          </li>
        </Tooltip>
      </ul>
    </>
  );
};

export default TechSkills;
