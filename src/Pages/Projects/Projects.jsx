import React, { useCallback, useState } from "react";
import useSound from "use-sound";
import s from "./Projects.module.scss";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import { PROJECTS } from "../../constants/projects";
import ProjectCard from "./ProjectCard/ProjectCard";
import wetClick from "../../assets/sounds/bubble.mp3";

const projectPerRow = 6;

const Projects = () => {
  const [next, setNext] = useState(projectPerRow);

  // This is for sounds
  const [playbackRate, setPlaybackRate] = useState(0.8);
  const [play] = useSound(wetClick);

  const handleClick = useCallback(() => {
    setPlaybackRate(playbackRate + 0.0);
    play();
  }, [next, projectPerRow]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [projectPerRow]);

  const handleMoreProject = () => {
    setNext(next + projectPerRow);
    handleClick();
  };

  const handleMoreProjects = () => {
    setNext(projectPerRow);
    scrollToTop();
    handleClick();
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
          <button className={s.button} onClick={handleMoreProject}>
            Load more
          </button>
        ) : (
          <button className={s.button} onClick={handleMoreProjects}>
            Previous
          </button>
        )}
      </div>
    </BaseLayout>
  );
};

export default Projects;
