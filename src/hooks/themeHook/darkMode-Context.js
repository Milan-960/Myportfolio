import React, { createContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleDarkMode } from "../../Store/Reducer/darkMode-Reducer";

// This is the context
export const DarkModeContext = createContext({});

// This is provide comps to wrap dark mode in index.js
export const DarkModeProvider = ({ children }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  const { isDarkMode } = darkMode;

  const toggleDarkModeHandler = () => {
    dispatch(toggleDarkMode());
  };

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(!isDarkMode));
    document.body.classList.toggle("dark", isDarkMode);
    document.body.classList.toggle("light", isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkModeHandler }}>
      {children}
    </DarkModeContext.Provider>
  );
};
