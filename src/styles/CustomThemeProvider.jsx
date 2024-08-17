//module css에 css 적용하기 위한 CustomThemeProvider 파일
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAtom } from "jotai";
import { themeSiteAtom } from "../store/atom";

const ThemeContext = createContext();

export const CustomThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useAtom(themeSiteAtom);

  useEffect(() => {
    //세션스토리지에서 값이 가져와지기 전에 렌더링 되는 것 방지
    const currentTheme = sessionStorage.getItem("themeSite");
    if (currentTheme) {
      console.log(`현재 theme: ${currentTheme}`);
      let newTheme;
      switch (currentTheme) {
        case "melonticket":
          newTheme = "melonticket-theme";
          break;
        case "interpark":
          newTheme = "interpark-theme";
          break;
        case "ticketlink":
          newTheme = "ticketlink-theme";
          break;
        case "yes24":
          newTheme = "yes24-theme";
          break;
        default:
          newTheme = "default-theme"; // 기본 테마 설정 (선택적으로 설정)
      }
      //module css용 테마 설정
      // 모든 테마 클래스를 제거
      document.body.classList.remove(
        "interpark-theme",
        "melonticket-theme",
        "ticketlink-theme",
        "yes24-theme"
      );
      // 새로운 테마 클래스를 적용
      document.body.classList.add(newTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
