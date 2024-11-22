import React, { useState } from "react";

import useSound from "use-sound";

import Button from "../UIElements/Button/Button";
import ToggleLightIcon from "../../assets/toggle-light.svg?react";
import ToggleDarkIcon from "../../assets/toggle-dark.svg?react";
import { useThemeContext } from "../../hooks/themeHook/themeHook";

import wetClick from "../../assets/sounds/bubble.mp3";

const BtnToggleTheme = ({ className }) => {
  const { isDarkMode, toggleDarkModeHandler } = useThemeContext();

  const [playbackRate, setPlaybackRate] = useState(0.75);
  const [play] = useSound(wetClick, {
    playbackRate,
    // `interrupt` ensures that if the sound starts again before it's
    // ended, it will truncate it. Otherwise, the sound can overlap.
    interrupt: true,
  });

  const onThemeChange = () => {
    setPlaybackRate(playbackRate + 0.1);
    toggleDarkModeHandler();
    play();
  };

  return (
    <div>
      <Button addClass={className} onClick={onThemeChange}>
        {isDarkMode && <ToggleLightIcon className="toggleTheme" />}
        {!isDarkMode && <ToggleDarkIcon className="toggleTheme" />}
      </Button>
    </div>
  );
};

export default BtnToggleTheme;
