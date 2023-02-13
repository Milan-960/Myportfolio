import { useState } from "react";
import ms from "./MainNavigation.module.scss";
import Media from "react-media";
import NavLinks from "../NavLinks/NavLinks";
import SideDrawer from "../SideDrawer/SideDrawer";
import Burger from "../Burger/Burger";
import BtnToggleTheme from "../../BtnToggleTheme/BtnToggleTheme";
import ClickAwayListener from "@mui/base/ClickAwayListener";

import Logo from "../../Logo/Logo";

const MainNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleClickAway = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Logo className={ms.desktop} />

      <nav className={ms.desktop}>
        <NavLinks />
        <BtnToggleTheme />
      </nav>

      <Media query={{ maxWidth: 768 }}>
        {() => (
          <>
            <Burger onClick={handleClick} />

            <Logo className={ms.mobile} />

            <BtnToggleTheme className={ms.mobile} />
          </>
        )}
      </Media>

      <SideDrawer show={isDrawerOpen} onClick={handleClick}>
        <ClickAwayListener onClickAway={handleClickAway}>
          <nav className={ms.navigationDrawerNav}>
            <NavLinks />
          </nav>
        </ClickAwayListener>
      </SideDrawer>
    </>
  );
};

export default MainNavigation;
