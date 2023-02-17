import React from "react";

import BarChart from "../components/BarChart";
import "./Skills.css";
import { Button } from "@material-ui/core";

import Pdf2 from "../Document/learning-to-learn-certificate.pdf";
import Pdf3 from "../Document/milan-bitDefree-certificate.pdf";
import { SEO } from "../SEO/seo-index";

function Skills() {
  return (
    <div
      className="skills-page"
      style={{ backgroundImage: `url(/skillsbg.jpg)` }}
    >
      <SEO
        title="Skills"
        description="Technologies I have been working with this tech since 2019."
        name="Technical skills"
        type="article"
      />
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
