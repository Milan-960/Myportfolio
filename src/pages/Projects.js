import React from "react";
import ProjectSection from "../components/ProjectSection";
import "./Projects.css";

function Projects() {
  return (
    <div
      className="projects"
      style={{ backgroundImage: `url(/projectbg.jpg)` }}
    >
      <div className="project-section-container">
        <ProjectSection />
      </div>
    </div>
  );
}

export default Projects;
