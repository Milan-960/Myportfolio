import React from "react";

import BarChart from "../components/BarChart";
import "./Skills.css";

function Skills() {
  return (
    <div
      className="skills-page"
      style={{ backgroundImage: `url(/skillsbg.jpg)` }}
    >
      <BarChart />
    </div>
  );
}

export default Skills;
