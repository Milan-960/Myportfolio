import { lazy } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

//modals
import ModalProjectCard from "../Pages/Projects/ModalProjectCard/ModalProjectCard";

//scenes
const Home = lazy(() => import("../Pages/Home/Home"));
const About = lazy(() => import("../Pages/About/About"));
const Projects = lazy(() => import("../Pages/Projects/Projects"));
const Resume = lazy(() => import("../Pages/Resume/Resume"));
const Contact = lazy(() => import("../Pages/Contact/Contact"));
const Error = lazy(() => import("../Pages/Error/Error"));

export const routes = {
  HOME: "/",
  ABOUT: "/about",
  PROJECTS: "/projects",
  PROJECT: "/project/:id",
  RESUME: "/resume",
  CONTACT: "/contact",
};

const BaseRoutes = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Switch location={background || location}>
        <Route path={routes.HOME} exact component={Home} />
        <Route path={routes.ABOUT} component={About} />
        <Route path={routes.PROJECTS} component={Projects} />
        <Route path={routes.PROJECT} component={ModalProjectCard} />
        <Route path={routes.RESUME} component={Resume} />
        <Route path={routes.CONTACT} component={Contact} />
        <Route path="*" component={Error} />
      </Switch>

      {background && (
        <Route path={routes.PROJECT} component={ModalProjectCard} />
      )}
    </>
  );
};

export default BaseRoutes;
