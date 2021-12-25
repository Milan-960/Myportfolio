import { NavLink } from "react-router-dom";
import ms from "./NavLinks.module.scss";

import {
  FcHome,
  FcContacts,
  FcDocument,
  FcTouchscreenSmartphone,
  FcAbout,
} from "react-icons/fc";

// import { FcComments } from "react-icons/fc";

import { routes } from "../../../routes/BaseRoutes";

const NavLinks = () => {
  return (
    <ul className={ms.navBar}>
      <img
        className={ms.img}
        src="https://camo.githubusercontent.com/8f5b918c2fc8a9d95a5227683cd282c30889a5bad491b8d41f85ba33fbc7e302/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f63642f64392f37362f63646439373632383932383636316564633439303266613964393733343263352e6a7067"
        alt=""
      />
      <li>
        <NavLink to={routes.HOME} activeClassName={ms.active} exact>
          <FcHome />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.ABOUT} activeClassName={ms.active}>
          <FcAbout />
          About
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.PROJECTS} activeClassName={ms.active}>
          <FcTouchscreenSmartphone />
          Projects
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.RESUME} activeClassName={ms.active}>
          <FcDocument />
          Resume
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.CONTACT} activeClassName={ms.active}>
          <FcContacts />
          Contact
        </NavLink>
      </li>

      {/* <li>
        <NavLink to={routes.BLOG} activeClassName={ms.active}>
          <FcComments />
          Blog
        </NavLink>
      </li> */}
    </ul>
  );
};

export default NavLinks;
