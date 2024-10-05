import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import useSound from "use-sound";

import {
  FcHome,
  FcContacts,
  // FcDocument,
  FcComments,
  FcTouchscreenSmartphone,
  FcAbout,
} from "react-icons/fc";
import { GiNetworkBars } from "react-icons/gi";

// import { FcComments } from "react-icons/fc";

import { routes } from "../../../routes/BaseRoutes";
import soundUrl from "../../../assets/sounds/bubble.mp3";

import LanguageSwitch from "../../../I18n/LanguageSwitch";
import { useTranslation } from "react-i18next";

const NavLinks = () => {
  const { t } = useTranslation();
  const [play, { stop }] = useSound(soundUrl, { volume: 0.7 });

  const [ishovering, setIsHovering] = useState();

  const soundHandler = () => {
    setIsHovering(ishovering);
    play();
  };

  const onLeaveHandler = () => {
    setIsHovering(ishovering);
    stop();
  };

  return (
    <button onMouseEnter={soundHandler} onMouseLeave={onLeaveHandler}>
      <ul className="navBar">
        <img
          className="img"
          src="https://camo.githubusercontent.com/8f5b918c2fc8a9d95a5227683cd282c30889a5bad491b8d41f85ba33fbc7e302/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f63642f64392f37362f63646439373632383932383636316564633439303266613964393733343263352e6a7067"
          alt="img"
        />
        <li>
          <NavLink to={routes.HOME} activeClassName="activehome" exact>
            <FcHome />
            {t("navbar.home")}
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.ABOUT} activeClassName="active">
            <FcAbout />
            {t("navbar.about")}
          </NavLink>
        </li>

        <li>
          <NavLink to={routes.PROJECTS} activeClassName="active">
            <FcTouchscreenSmartphone />
            {t("navbar.projects")}
          </NavLink>
        </li>

        {/* <li>
        <NavLink to={routes.RESUME} activeClassName="active">
          <FcDocument />
          Resume
        </NavLink>
      </li> */}

        <li>
          <NavLink to={routes.CONTACT} activeClassName="active">
            <FcContacts />
            {t("navbar.contact")}
          </NavLink>
        </li>

        <li>
          <a
            href="https://blog.milansachani.dev"
            target="_blank"
            rel="noreferrer"
          >
            <FcComments />
            {t("navbar.blogs")}
          </a>
        </li>

        <li>
          <a
            href="https://status.milansachani.dev"
            target="_blank"
            rel="noreferrer"
          >
            <GiNetworkBars />
            {t("navbar.status")}
          </a>
        </li>

        <li>
          <LanguageSwitch />
        </li>

        {/* <li>
        <NavLink to={routes.BLOG} activeClassName="active">
          <FcComments />
          Blog
        </NavLink>
      </li> */}
      </ul>
    </button>
  );
};

export default NavLinks;
