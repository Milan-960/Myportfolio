import React, { useState } from "react";
import useSound from "use-sound";

import wetClick from "../../assets/sounds/bubble.mp3";

function BoopButton() {
  const [playbackRate, setPlaybackRate] = useState(0.75);

  const [play] = useSound(wetClick);

  const handleClick = () => {
    setPlaybackRate(playbackRate + 0.1);
    play();
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}

export default BoopButton;
