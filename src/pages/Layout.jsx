import Header from "../components/header/Header";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import resetAtom from "../util/resetAtom";

const LayoutPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = () => {
  const path = useLocation().pathname;

  useEffect(() => {
    if (
      path === "/" ||
      path === "/progress/step0" ||
      path === "/progress/step5"
    ) {
      resetAtom();
    }
  }, [path]); // path가 변경될 때만 실행됨

  return (
    <LayoutPage>
      <Header />
      <Outlet />
    </LayoutPage>
  );
};

export default Layout;
