import { HighSkills } from "./HighSkills";
import { Frontend } from "./Frontend";
import { Other } from "./Other";
import { Backend } from "./Backend";
import { Database } from "./Database";
import { Tools } from "./Tools";
import { Hosting } from "./Hosting";
import { Discipline } from "./Discipline";

const TechSkills = () => {
  return (
    <>
      <HighSkills />
      <Frontend />
      <Backend />
      <Database />
      <Tools />
      <Hosting />
      <Discipline />
      <Other />
    </>
  );
};

export default TechSkills;
