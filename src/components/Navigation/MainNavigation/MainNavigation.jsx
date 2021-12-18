import { useState } from "react";
import ms from "./MainNavigation.module.scss";
import Media from "react-media";
import NavLinks from "../NavLinks/NavLinks";
import SideDrawer from "../SideDrawer/SideDrawer";
import Burger from "../Burger/Burger";
import BtnToggleTheme from "../../BtnToggleTheme/BtnToggleTheme";

import Logo from "../../Logo/Logo";

const MainNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
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
            <Burger onClick={toggleDrawer} />

            <Logo className={ms.mobile} />

            <BtnToggleTheme className={ms.mobile} />
          </>
        )}
      </Media>

      <SideDrawer show={isDrawerOpen} onClose={toggleDrawer}>
        <nav className={ms.navigationDrawerNav}>
          <NavLinks />
        </nav>
      </SideDrawer>
    </>
  );
};

export default MainNavigation;
