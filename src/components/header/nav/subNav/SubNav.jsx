import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { levelAtom, themeSiteAtom } from "../../../../store/atom";
import { useSetAtom } from "jotai";

const SubNavBgc = styled.div`
  width: 100vw;
  height: 45px;
  background-color: ${(props) => props.theme.default.subColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
`;
const SubNavWrap = styled.div`
  width: 1320px;
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

  const handleSiteClick = (site) => {
    setLevel("high");
    setThemeSite(site);
    nav(`/${site}/step0`); // 각 사이트의 인트로 페이지로 이동
  };

  return (
    <>
      {hovereditem === "연습모드" && (
        <SubNavBgc>
          <SubNavWrap>
            <SubNavContainer>
              <SubNavContent onClick={handleSubNavClick}>초급</SubNavContent>
              <SubNavContent onClick={handleSubNavClick}>중급</SubNavContent>
              <SubNavContent onClick={handleSubNavClick}>고급</SubNavContent>
            </SubNavContainer>
          </SubNavWrap>
        </SubNavBgc>
      )}

      {hovereditem === "실전모드" && (
        <SubNavBgc>
          <SubNavWrap>
            <SubNavContainer>
              <SubNavContent onClick={() => handleSiteClick("interpark")}>
                인터파크 티켓
              </SubNavContent>
              <SubNavContent onClick={() => handleSiteClick("melonticket")}>
                멜론티켓
              </SubNavContent>
              <SubNavContent onClick={() => handleSiteClick("yes24")}>
                예스24
              </SubNavContent>
              <SubNavContent onClick={() => handleSiteClick("ticketlink")}>
                티켓링크
              </SubNavContent>
            </SubNavContainer>
          </SubNavWrap>
        </SubNavBgc>
      )}
      {hovereditem === null && null}
    </>
  );
};

export default SubNav;
