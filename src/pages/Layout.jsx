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
      path === "" ||
      path.endsWith("/step0") || // step0으로 끝나는 모든 경우
      path.endsWith("/step5") // step5으로 끝나는 모든 경우
    ) {
      resetAtom();
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
