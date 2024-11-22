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
    // Dispatch Redux action to toggle dark mode
    dispatch(toggleDarkMode());

    // Update the body class and localStorage
    const updatedMode = !isDarkMode;
    localStorage.setItem("dark", JSON.stringify(updatedMode));

    if (updatedMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  };

  useEffect(() => {
    // get the dark mode state from local storage
    const darkModeFromStorage = JSON.parse(localStorage.getItem("dark"));

    // if the dark mode state is true or undefined (for first-time users), set dark mode
    if (darkModeFromStorage === null || darkModeFromStorage) {
      // set the dark mode class to the body
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      // set the light mode class to the body
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkModeHandler }}>
      {children}
    </DarkModeContext.Provider>
  );
};
