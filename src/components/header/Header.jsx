import styled from "styled-components";
import Nav from "./nav/Nav";
import logo from "../../assests/logo.png";

/*헤더 Container*/
const HeaderContainer = styled.div`
  width: 1320px;
  height: 120px;
  display: flex;
  justify-content: left;
  position: relative;
`;

//로고로 대치 예정
const LogoContainer = styled.div`
  width: 140px;
  height: 80px;
  position: absolute;
  left: 590px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logo} alt="Logo" />
      </LogoContainer>
      <Nav />
    </HeaderContainer>
  );
};

export default Header;
