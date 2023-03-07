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
    // dispatch the action to toggle the dark mode
    dispatch(toggleDarkMode());

    // // save the dark mode state to local storage

    // // set the dark mode class to the body
    localStorage.setItem("dark", JSON.stringify(!isDarkMode));
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
  };

  useEffect(() => {
    // get the dark mode state from local storage
    const darkModeFromStorage = JSON.parse(localStorage.getItem("dark"));
    // if the dark mode state is true
    if (darkModeFromStorage) {
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
