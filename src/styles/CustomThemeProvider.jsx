import React, { createContext, useContext, useEffect } from "react";
import { useAtomValue } from "jotai";
import { themeSiteAtom } from "../store/atom";

const ThemeContext = createContext();

export const CustomThemeProvider = ({ children }) => {
  const currentTheme = useAtomValue(themeSiteAtom);

  useEffect(() => {
    // 모든 테마 클래스를 제거
    document.body.classList.remove(
      "interpark-theme",
      "melonticket-theme",
      "ticketlink-theme",
      "yes24-theme"
    );

    if (currentTheme !== "practice" || currentTheme !== null) {
      // 새로운 테마 클래스를 적용
      const newThemeClass = `${currentTheme}-theme`; // 현재 테마 클래스 적용
      document.body.classList.add(newThemeClass); // 새로운 테마 클래스를 추가
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
