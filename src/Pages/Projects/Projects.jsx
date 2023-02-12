import React, { useCallback, useState } from "react";
import s from "./Projects.module.scss";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import { PROJECTS } from "../../constants/projects";
import ProjectCard from "./ProjectCard/ProjectCard";

const projectPerRow = 6;

const Projects = () => {
  const [next, setNext] = useState(projectPerRow);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [projectPerRow]);

  const handleMoreImage = () => {
    setNext(next + projectPerRow);
  };
  const handleMoreImages = () => {
    setNext(projectPerRow);
    scrollToTop();
  };

  return (
    <BaseLayout>
      <div className={s.content}>
        <h1 className={s.title}>
          My Recent <strong className={s.purple}>Works</strong>
        </h1>
        <p className={s.subtitle}>
          Here are a few projects I've worked on recently.
        </p>
        <ul className={s.projects}>
          {PROJECTS?.slice(0, next)?.map((props) => (
            <ProjectCard key={props.id} {...props} />
          ))}
        </ul>
        {next < PROJECTS?.length ? (
          <button className={s.button} onClick={handleMoreImage}>
            Load more
          </button>
        ) : (
          <button className={s.button} onClick={handleMoreImages}>
            Previous
          </button>
        )}
      </div>
    </BaseLayout>
  );
};

export default Projects;
