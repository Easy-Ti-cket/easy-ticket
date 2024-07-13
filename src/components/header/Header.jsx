import styled from "styled-components";
import Nav from "./nav/Nav";

/*wrap : 전체 너비 설정, 중앙정렬 */
const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

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
  background-color: #797979; //삭제할 코드
  position: absolute;
  left: 590px;
`;
const Header = () => {
  return (
    <HeaderWrap>
      <HeaderContainer>
        <Nav />
        <LogoContainer />
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;