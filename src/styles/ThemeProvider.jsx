// ThemeProvider.jsx
import React, { createContext, useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAtom } from "jotai";
import { themeSiteAtom } from "../store/atom";
import theme from "./theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useAtom(themeSiteAtom);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    switch (path) {
      case "melonticket":
        setCurrentTheme("melonticket");
        break;
      case "interpark":
        setCurrentTheme("interpark");
        break;
      case "ticketlink":
        setCurrentTheme("ticketlink");
        break;
      case "yes24":
        setCurrentTheme("yes24");
        break;
      default:
        setCurrentTheme("practice");
    }
  }, [location, setCurrentTheme]);

  const themeStyles = {
    "--progress-bar-color": theme.progressBarColors[currentTheme]
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme }}>
      <div className={styles[currentTheme]} style={themeStyles}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
