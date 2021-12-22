import cx from "classnames";
import ms from "./Header.module.scss";
import { useState } from "react";

const Header = ({ children }) => {
  const [headerHighlight, setHeaderHighlight] = useState(false);

  const scrollHandler = () => {
    setHeaderHighlight(window.scrollY >= 20);
  };
  window.addEventListener("scroll", scrollHandler);

  return (
    <div
      className={cx(ms.header, {
        [ms.highlighted]: headerHighlight,
      })}
    >
      <div className={ms.container}>{children}</div>
    </div>
  );
};

export default Header;
