import Header from "../components/header/Header";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const LayoutPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/*Header고정, children으로 받은 컴포넌트 렌더링
 Outlet으로 대체 예정*/
const Layout = () => {
  return (
    <LayoutPage>
      <Header />
      <Outlet />
    </LayoutPage>
  );
};

export default Layout;
