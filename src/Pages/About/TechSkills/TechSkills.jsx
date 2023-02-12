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

const TechSkills = () => {
  return (
    <ul className={ms.container}>
      <Tooltip content="Javascript" className={ms.techIcons}>
        <li className={ms.techIcon}>
          <SiJavascript />
        </li>
      </Tooltip>

      <Tooltip content="Typescript" className={ms.techIcons}>
        <li className={ms.techIcon}>
          <SiTypescript />
        </li>
      </Tooltip>

      <Tooltip content="React" className={ms.techIcons}>
        <li className={ms.techIcon}>
          <DiReact />
        </li>
      </Tooltip>

      <Tooltip content="Typescript" className={ms.techIcons}>
        <li className={ms.techIcon}>
          <SiRedux />
        </li>
      </Tooltip>
      <Tooltip content="Nodejs" className={ms.techIcons}>
        <li className={ms.techIcon}>
          <DiNodejs />
        </li>
      </Tooltip>
      <Tooltip content="Sass" className={ms.techIcons}>
        <li className={ms.techIcon}>
          <DiSass />
        </li>
      </Tooltip>
      <Tooltip content="NPM" className={ms.techIcons}>
        <li className={ms.techIcon}>
          <DiNpm />
        </li>
      </Tooltip>
      <Tooltip content="Yarn" className={ms.techIcons}>
        <li className={ms.techIcon}>
          <SiYarn />
        </li>
      </Tooltip>
      <Tooltip content="AWS" className={ms.techIcons}>
        <li className={ms.techIcon}>
          <SiAmazonaws />
        </li>
      </Tooltip>
      <Tooltip content="Mongodb" className={ms.techIcons}>
        <li className={ms.techIcon}>
          <DiMongodb />
        </li>
      </Tooltip>
      <Tooltip content="Firebase" className={ms.techIcons}>
        <li className={ms.techIcon}>
          <SiFirebase />
        </li>
      </Tooltip>
      <Tooltip content="Postgresql " className={ms.techIcons}>
        <li className={ms.techIcon}>
          <SiPostgresql />
        </li>
      </Tooltip>
      <Tooltip content="Git" className={ms.techIcons}>
        <li className={ms.techIcon}>
          <DiGit />
        </li>
      </Tooltip>
      <Tooltip content="Adobexd" className={ms.techIcons}>
        <li className={ms.techIcon}>
          <SiAdobexd />
        </li>
      </Tooltip>
    </ul>
  );
};

export default TechSkills;
