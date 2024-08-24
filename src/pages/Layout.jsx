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
    if (path === "/" || path === "/progress/step5") {
      resetAtom();
    }
    if (!path.includes("challenge")) {
      setThemeSite("practice");
    }
  }, [path]); // path가 변경될 때만 실행됨 (메인 및 연습모드 시작과 후)

  return (
    <LayoutPage>
      <Header />
      <Outlet />
    </LayoutPage>
  );
};

export default Layout;
