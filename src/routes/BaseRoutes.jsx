import { lazy } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

//modals
import ModalProjectCard from "../Pages/Projects/ModalProjectCard/ModalProjectCard";

//Blog pages
import BlogPost from "../Pages/Blog/Post/Post";

//scenes
const Home = lazy(() => import("../Pages/Home/Home"));
const About = lazy(() => import("../Pages/About/About"));
const Projects = lazy(() => import("../Pages/Projects/Projects"));
const Resume = lazy(() => import("../Pages/Resume/Resume"));
const Contact = lazy(() => import("../Pages/Contact/Contact"));
// const Blog = lazy(() => import("../Pages/Blog/Blog"));

const Error = lazy(() => import("../Pages/Error/Error"));

export const routes = {
  HOME: "/",
  ABOUT: "/about",
  PROJECTS: "/projects",
  PROJECT: "/project/:id",
  RESUME: "/resume",
  CONTACT: "/contact",
  BLOGS: "/blog/:slug",
  BLOG: "/blog",
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
        {/* <Route path={routes.BLOGS} component={BlogPost} />
        <Route path={routes.BLOG} component={Blog} /> */}
        <Route path="*" component={Error} />
      </Switch>
      {background && (
        <Route path={routes.PROJECT} component={ModalProjectCard} />
      )}
      {background && <Route path={routes.BLOG} component={BlogPost} />}
    </>
  );
};

export default BaseRoutes;
