import Header from "../components/header/Header";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSetAtom } from "jotai";
import resetAtom from "../util/resetAtom";
import { themeSiteAtom } from "../store/atom";

const LayoutPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = () => {
  const setThemeSite = useSetAtom(themeSiteAtom);
  const path = useLocation().pathname;

  useEffect(() => {
    if (
      path === "/" ||
      path === "/progress/step5" ||
      "/select-site" || // step5 - 실전모드 도전
      "/select-level" // step5 - 다시 연습하기
    ) {
      resetAtom();
    }
    if (!path.includes("challenge")) {
      setThemeSite("practice");
    }
  }, [path]);

  return (
    <LayoutPage>
      <Header />
      <Outlet />
    </LayoutPage>
  );
};

export default Layout;
