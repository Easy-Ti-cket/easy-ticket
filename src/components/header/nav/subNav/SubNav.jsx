import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { levelAtom } from "../../../../store/atom";
import { useSetAtom } from "jotai";
const SubNavWrap = styled.div`
  width: 1320px;
  height: 50px;
  background-color: var(--sub-color);
  display: flex;
  justify-content: center;
`;
/*서브네비게이터 ul */
const SubNavContainer = styled.ul`
  width: 1320px;
  display: flex;
  align-items: center;
  text-align: center;
`;
/*서브네비게이터 Contents - 서브네비게이터 내용*/
const SubNavContent = styled.li`
  font-size: 16px;
  color: var(--text-color);
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: var(--key-color);
  }
`;

const SubNav = ({ hovereditem }) => {
  const nav = useNavigate();
  const setLevel = useSetAtom(levelAtom);
  const handleSubNavClick = (e) => {
    const level =
      e.target.innerText === "초급"
        ? "low"
        : e.target.innerText === "중급"
          ? "middle"
          : "high";
    setLevel(level);
    nav("/progress/step0");
  };
  return (
    <>
      {hovereditem === "연습모드" && (
        <SubNavWrap>
          <SubNavContainer>
            <SubNavContent onClick={handleSubNavClick}>초급</SubNavContent>
            <SubNavContent onClick={handleSubNavClick}>중급</SubNavContent>
            <SubNavContent onClick={handleSubNavClick}>고급</SubNavContent>
          </SubNavContainer>
        </SubNavWrap>
      )}

      {hovereditem === "실전모드" && (
        <SubNavWrap>
          <SubNavContainer>
            <SubNavContent>인터파크 티켓</SubNavContent>
            <SubNavContent>멜론티켓</SubNavContent>
            <SubNavContent>예스24</SubNavContent>
            <SubNavContent>티켓링크</SubNavContent>
          </SubNavContainer>
        </SubNavWrap>
      )}
      {hovereditem === null && null}
    </>
  );
};

export default SubNav;
