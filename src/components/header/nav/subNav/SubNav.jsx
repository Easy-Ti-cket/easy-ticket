import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { levelAtom, themeSiteAtom, userNameAtom } from "../../../../store/atom";
import { useAtomValue, useSetAtom } from "jotai";

const SubNavWrap = styled.div`
  width: 1320px;
  height: 50px;
  background-color: ${(props) => props.theme.default.subColor};
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
  const setThemeSite = useSetAtom(themeSiteAtom);
  //접근 제한
  const userName = useAtomValue(userNameAtom);

  const handleNavigate = (location) => {
    //입력된 userName이 없을 경우 이동 제한
    if (!userName) {
      alert("성함을 입력해 주세요");
      return;
    }
    if (location === "low" || location === "middle" || location === "high") {
      setLevel(location); // 레벨 설정
      nav("/progress/step0"); // 연습모드 step0로 이동
    } else {
      setThemeSite(location); // 테마 사이트 설정
      nav(`/${location}/step0`); // 각 사이트의 인트로 페이지로 이동
    }
  };

  return (
    <>
      {hovereditem === "연습모드" && (
        <SubNavWrap>
          <SubNavContainer>
            <SubNavContent onClick={() => handleNavigate("low")}>
              초급
            </SubNavContent>
            <SubNavContent onClick={() => handleNavigate("middle")}>
              중급
            </SubNavContent>
            <SubNavContent onClick={() => handleNavigate("high")}>
              고급
            </SubNavContent>
          </SubNavContainer>
        </SubNavWrap>
      )}

      {hovereditem === "실전모드" && (
        <SubNavWrap>
          <SubNavContainer>
            <SubNavContent onClick={() => handleNavigate("interpark")}>
              인터파크 티켓
            </SubNavContent>
            <SubNavContent onClick={() => handleNavigate("melonticket")}>
              멜론티켓
            </SubNavContent>
            <SubNavContent onClick={() => handleNavigate("yes24")}>
              예스24
            </SubNavContent>
            <SubNavContent onClick={() => handleNavigate("ticketlink")}>
              티켓링크
            </SubNavContent>
          </SubNavContainer>
        </SubNavWrap>
      )}
      {hovereditem === null && null}
    </>
  );
};

export default SubNav;
