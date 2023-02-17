import React from "react";
import "./Barchart.css";

const skills = [
  {
    name: "HTML5",
    level: "90%",
  },
  {
    name: "CSS3/SCSS",
    level: "90%",
  },
  {
    name: "JavaScript",
    level: "65%",
  },
  {
    name: "ReactJs",
    level: "65%",
  },
  {
    name: "PHP & MySQL",
    level: "60%",
  },
];

function BarChart() {
  return (
    <div className="barchart">
      <div className="bars">
        <ul className="skills">
          {skills.map((skill) => (
            <li key={skill.name}>
              <span
                style={{ width: skill.level }}
                className={`bar-expand ${skill.name.toLowerCase()}`}
              ></span>
              <p className="bar-label">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BarChart;
