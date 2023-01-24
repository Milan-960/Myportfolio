import React, { useCallback } from "react";
import useSound from "use-sound";

import wetClick from "../../assets/sounds/bubble.mp3";

function BoopButton() {
  const [playbackRate, setPlaybackRate] = React.useState(0.75);

  const [play, { stop }] = useSound(wetClick, {
    playbackRate,
    // `interrupt` ensures that if the sound starts again before it's
    // ended, it will truncate it. Otherwise, the sound can overlap.
    interrupt: true,
  });

  return (
    <div className="App">
      <button
        type="button"
        style={{
          margin: 20,
          borderRadius: 10,
        }}
        onMouseEnter={play}
        onMouseLeave={stop}
      >
        Hover
      </button>
    </div>
  );
}

export default BoopButton;
