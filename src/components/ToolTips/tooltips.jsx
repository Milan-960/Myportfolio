import React from "react";
import Tippy from "@tippyjs/react";

import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/scale.css";

const Tooltip = React.forwardRef(({ children, ...rest }, ref) => (
  <Tippy {...rest} ref={ref}>
    {children}
  </Tippy>
));
Tooltip.defaultProps = {
  animation: "scale",
  arrow: true,
  delay: 100,
  theme: "translucent",
};

export default Tooltip;
