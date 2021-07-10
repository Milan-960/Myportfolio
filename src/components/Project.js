import React from "react";
import "./Project.css";

function Project({ projectImg, title, description, skillsUsed, projectLink }) {
  return (
    <div className="project-container">
      <a rel="noopener noreferrer" target="_blank" href={projectLink}>
        <div className="project-image">
          <img src={projectImg} alt="" />
        </div>
      </a>
      <div className="project-title">
        <h1>{title}</h1>
      </div>
      <div className="project-description">
        <p>{description}</p>
      </div>
      <div className="project-list">
        <ul>
          {skillsUsed?.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Project;
