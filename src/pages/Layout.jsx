import Header from "../components/header/Header";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { themeSiteAtom } from "../store/atom";

const LayoutPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = () => {
  const [themeSite, setThemeSite] = useAtom(themeSiteAtom);
  const path = useLocation().pathname;

  useEffect(() => {
    if (!path.includes("challenge")) {
      if (themeSite !== "practice") {
        setThemeSite("practice");
      }
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
