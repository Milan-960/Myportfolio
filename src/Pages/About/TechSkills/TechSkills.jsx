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
  SiAdobexd,
} from "react-icons/si";

const TechSkills = () => {
  return (
    <ul className={ms.container}>
      <li className={ms.techIcon}>
        <DiSass />
      </li>
      <li className={ms.techIcon}>
        <SiJavascript />
      </li>
      <li className={ms.techIcon}>
        <SiTypescript />
      </li>
      <li className={ms.techIcon}>
        <DiReact />
      </li>
      <li className={ms.techIcon}>
        <SiRedux />
      </li>
      <li className={ms.techIcon}>
        <DiNodejs />
      </li>
      <li className={ms.techIcon}>
        <DiMongodb />
      </li>
      <li className={ms.techIcon}>
        <SiFirebase />
      </li>
      <li className={ms.techIcon}>
        <DiGit />
      </li>
      <li className={ms.techIcon}>
        <SiAdobexd />
      </li>
      <li className={ms.techIcon}>
        <DiNpm />
      </li>
    </ul>
  );
};

export default TechSkills;
