import React, { createContext, useContext, useEffect } from "react";
import { useAtom } from "jotai";
import { themeSiteAtom } from "../store/atom";

const ThemeContext = createContext();

export const CustomThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useAtom(themeSiteAtom);

  useEffect(() => {
    const storedTheme = sessionStorage.getItem("themeSite");
    if (storedTheme) {
      setCurrentTheme(storedTheme); // 세션 스토리지에서 테마 읽기
    } else {
      setCurrentTheme(null); // 테마가 저장되어 있지 않은 경우 null로 설정
    }
  }, [setCurrentTheme]);

  useEffect(() => {
    const themeToApply = currentTheme || null; // 기본 테마 설정
    sessionStorage.setItem("themeSite", themeToApply); // 세션 스토리지에 현재 테마 저장

    // module css 용
    // 모든 테마 클래스를 제거
    document.body.classList.remove(
      "interpark-theme",
      "melonticket-theme",
      "ticketlink-theme",
      "yes24-theme",
      "practice-theme"
    );

    // 새로운 테마 클래스를 적용
    const newThemeClass = `${themeToApply}-theme`; // 현재 테마 클래스 적용
    document.body.classList.add(newThemeClass); // 새로운 테마 클래스를 추가

    // console.log(`현재 테마: ${newThemeClass}`);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
