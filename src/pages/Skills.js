import React from "react";

import BarChart from "../components/BarChart";
import "./Skills.css";
import { Button } from "@material-ui/core";

import Pdf2 from "../Document/learning-to-learn-certificate.pdf";

function Skills() {
  return (
    <div
      className="skills-page"
      style={{ backgroundImage: `url(/skillsbg.jpg)` }}
    >
      <BarChart />

      <div className="certificate">
        <a rel="noopener noreferrer" href={Pdf2}>
          <Button variant="contained" className="resume-button">
            View My Certificate
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Skills;
