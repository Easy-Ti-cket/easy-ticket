import React from "react";
import styled, { css } from "styled-components"; // css 함수 import 추가
import SubNav from "./subNav/SubNav";
import useHover from "../../../hooks/useHover";

/*네비게이터 전체 */
const NavBorderBottom = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1); /* 검은색의 30% 투명도 */
  display: flex;
  justify-content: center;
`;

const NavWrap = styled.div`
  width: 1320px;
  height: 80px;
  display: flex;
  align-items: flex-end;
  position: fixed;
`;
//네비게이터 hover 시 서브네비게이터가 나오도록 허용할 구간
const NavHoverSection = styled.div`
  width: 360px;
  height: 40px;
`;
//네비게이터 ul
const NavContainer = styled.ul`
  width: 360px;
  height: 40px;
  display: flex;
  align-items: flex-end;
`;
//네비게이터 li
const NavContent = styled.li`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "pretendardB";
  font-size: 16px;
  cursor: pointer;
  position: relative;
  //조건부 css : 마우스 hover 네비게이터는 서브네비게이터가 사라지기 전까지 css 유지
  //1) 현재 sideNavigator 영역까지 포함됐을 때 hovered상태인가?
  //2) 해당 navigator가 hovered상태인가?
  color: ${(props) =>
    props.$ishovered && props.$isactive
      ? props.theme.default.keyColor
      : "var(--text-color)"};

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 120px;
    height: 0;
    background-color: ${(props) => props.theme.default.keyColor};
    border-radius: 50px;
    transition: height 0.1s ease;
    ${({ $isactive, $ishovered }) =>
      $isactive &&
      $ishovered &&
      css`
        height: 4px;
      `};
  }
`;

const Nav = () => {
  // hover 관련 커스텀 훅
  const {
    hovereditem,
    ishovered,
    handleHoveredItemEnter,
    handleMouseLeave,
    handleMouseEnter
  } = useHover();

  return (
    <NavBorderBottom>
      <NavWrap>
        {/*hover 시 서브네비게이터가 나오도록 허용할 네비게이터 구간 */}
        <NavHoverSection
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* 네비게이터 */}
          <NavContainer>
            <NavContent
              $ishovered={ishovered}
              $isactive={hovereditem === "연습모드"}
              onMouseEnter={() => handleHoveredItemEnter("연습모드")}
            >
              연습 모드
            </NavContent>
            <NavContent
              $ishovered={ishovered}
              $isactive={hovereditem === "실전모드"}
              onMouseEnter={() => handleHoveredItemEnter("실전모드")}
            >
              실전 모드
            </NavContent>
            <NavContent
              $ishovered={ishovered}
              $isactive={hovereditem === null}
              onMouseEnter={() => handleHoveredItemEnter(null)}
            >
              내 기록 보기
            </NavContent>
          </NavContainer>
          {/* 서브 네비게이터 */}
          {ishovered && <SubNav hovereditem={hovereditem} />}
        </NavHoverSection>
      </NavWrap>
    </NavBorderBottom>
  );
};

export default Nav;
