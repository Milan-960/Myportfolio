import { useContext } from "react";
// import { ThemeContext } from "./themeContext";
import { DarkModeContext } from "./darkMode-Context";

export const useThemeContext = () => {
  return useContext(DarkModeContext);
};
