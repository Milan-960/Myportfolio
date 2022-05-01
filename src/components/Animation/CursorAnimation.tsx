import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function AnimatedPointer() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={22}
        color="193, 11, 111"
        outerAlpha={0.5}
        innerScale={0.2}
        outerScale={2}
      />
    </div>
  );
}
