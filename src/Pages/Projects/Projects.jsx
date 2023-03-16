import React, { useCallback, useState } from "react";
import { HeadProvider, Title, Link, Meta } from "react-head";
import useSound from "use-sound";
import s from "./Projects.module.scss";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import { useProjectsTable } from "../../constants/projects";
import ProjectCard from "./ProjectCard/ProjectCard";
import wetClick from "../../assets/sounds/bubble.mp3";
import Zoom from "react-reveal/Zoom";

// import { useDispatch, useSelector } from "react-redux";
// import { fetchProjectList } from "../../Store/Reducer/project-Reducer";

const projectPerRow = 6;

const Projects = () => {
  // This is a hook that will be used to add trans to projects

  // Redux and nodejs have been added
  // const dispatch = useDispatch();

  // const project = useSelector((state) => state.project);

  // console.log("projects", project);

  // React.useEffect(() => {
  //   dispatch(fetchProjectList()); // dispatch the fetchProject action
  // }, [dispatch]);

  const { PROJECTS } = useProjectsTable();
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
    <>
      {/* This is for SEO meta tags */}
      <HeadProvider>
        <Title>Milan Sachani || Projects </Title>
        <Link rel="canonical" href="https://milansachani.dev/projects" />
        <Meta
          name="viewport"
          content="width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=no"
        />
        <Meta httpEquiv="cache-control" content="personal website" />

        <BaseLayout>
          <div className={s.content}>
            <Zoom top cascade>
              <h1 className={s.title}>
                {/* {project?.project.map((projectItem) => (
            <li key={projectItem.id}>{projectItem.title}</li>
            ))} */}
                My Recent <strong className={s.purple}>Works</strong>
              </h1>
              <p className={s.subtitle}>
                Here are a few projects I've worked on recently.
              </p>
            </Zoom>

            <ul className={s.projects}>
              {PROJECTS?.slice(0, next)?.map((props) => (
                <ProjectCard key={props.id} {...props} />
              ))}
            </ul>

            <Zoom bottom cascade>
              {next < PROJECTS?.length ? (
                <button className={s.button} onClick={handleMoreProject}>
                  Load more
                </button>
              ) : (
                <button className={s.button} onClick={handleMoreProjects}>
                  Previous
                </button>
              )}
            </Zoom>
          </div>
        </BaseLayout>
      </HeadProvider>
    </>
  );
};

export default Projects;
