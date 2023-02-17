import React from "react";

import BarChart from "../components/BarChart";
import "./Skills.css";
import { Button } from "@material-ui/core";

import Pdf2 from "../Document/learning-to-learn-certificate.pdf";
import Pdf3 from "../Document/milan-bitDefree-certificate.pdf";

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
            Zero-To-Mastery Certificate
          </Button>
        </a>
        <a rel="noopener noreferrer" href={Pdf3}>
          <Button variant="contained" className="resume-button">
            BitDefree Certificate
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Skills;
