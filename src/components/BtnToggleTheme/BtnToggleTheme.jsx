import ms from "./BtnToggleTheme.module.scss";
import Button from "../UIElements/Button/Button";
import { ReactComponent as ToggleLightIcon } from "../../assets/toggle-light.svg";
import { ReactComponent as ToggleDarkIcon } from "../../assets/toggle-dark.svg";
import { useThemeContext } from "../../hooks/themeHook/themeHook";

const BtnToggleTheme = ({ className }) => {
  const { dark, toggleTheme } = useThemeContext();

  return (
    <Button addClass={className} onClick={toggleTheme}>
      {dark && <ToggleLightIcon className={ms.toggleTheme} />}
      {!dark && <ToggleDarkIcon className={ms.toggleTheme} />}
    </Button>
  );
};

export default BtnToggleTheme;
