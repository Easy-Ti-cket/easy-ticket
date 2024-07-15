import Header from "../components/header/Header";
import styled from "styled-components";

const LayoutPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//Header고정, children으로 받은 컴포넌트 렌더링
const Layout = ({ children }) => {
  return (
    <LayoutPage>
      <Header />
      {children}
    </LayoutPage>
  );
};

export default Layout;
