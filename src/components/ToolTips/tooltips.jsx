import React from "react";
import Tippy from "@tippyjs/react";

import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/scale.css";

const Tooltip = ({ children, ...rest }) => <Tippy {...rest}>{children}</Tippy>;
Tooltip.defaultProps = {
  animation: "scale",
  arrow: true,
  delay: 100,
  theme: "translucent",
};

export default Tooltip;
