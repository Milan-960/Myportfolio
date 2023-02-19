import cx from "classnames";

import { useState } from "react";

const Header = ({ children }) => {
  const [headerHighlight, setHeaderHighlight] = useState(false);

  const scrollHandler = () => {
    setHeaderHighlight(window.scrollY >= 20);
  };
  window.addEventListener("scroll", scrollHandler);

  return (
    <div
      className={cx("header", {
        ["highlighted"]: headerHighlight,
      })}
    >
      <div className="header_container">{children}</div>
    </div>
  );
};

export default Header;
