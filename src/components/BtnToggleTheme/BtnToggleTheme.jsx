import React, { useState } from "react";
import ms from "./BtnToggleTheme.module.scss";
import useSound from "use-sound";

import Button from "../UIElements/Button/Button";
import { ReactComponent as ToggleLightIcon } from "../../assets/toggle-light.svg";
import { ReactComponent as ToggleDarkIcon } from "../../assets/toggle-dark.svg";
import { useThemeContext } from "../../hooks/themeHook/themeHook";

import wetClick from "../../assets/sounds/bubble.mp3";

const BtnToggleTheme = ({ className }) => {
  const { dark, toggleTheme } = useThemeContext();

  const [playbackRate, setPlaybackRate] = React.useState(0.75);
  const [play] = useSound(wetClick, {
    playbackRate,
    // `interrupt` ensures that if the sound starts again before it's
    // ended, it will truncate it. Otherwise, the sound can overlap.
    interrupt: true,
  });

  const onThemeChange = () => {
    setPlaybackRate(playbackRate + 0.1);
    toggleTheme();
    play();
  };

  return (
    <div>
      <Button addClass={className} onClick={onThemeChange}>
        {dark && <ToggleLightIcon className={ms.toggleTheme} />}
        {!dark && <ToggleDarkIcon className={ms.toggleTheme} />}
      </Button>
    </div>
  );
};

export default BtnToggleTheme;
