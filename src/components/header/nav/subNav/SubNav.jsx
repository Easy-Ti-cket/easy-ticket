import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import {
  levelAtom,
  themeSiteAtom,
  timerControlAtom,
  userNameAtom,
  userNameErrorAtom
} from "../../../../store/atom";
import { useAtomValue, useSetAtom } from "jotai";
import resetAtom from "../../../../util/resetAtom";
import { useState } from "react";
import Modal from "../../../modal/Modal";
import GoToLocationModalContents from "../../../modal/modalContents/GoToMainModalContents";

const SubNavBgc = styled.div`
  width: 100vw;
  height: 45px;
  background-color: ${(props) => props.theme.default.subColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  z-index: 2;
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
    color: ${(props) => props.theme.default.keyColor};
  }
`;

const SubNav = ({ hovereditem }) => {
  const nav = useNavigate();
  const setLevel = useSetAtom(levelAtom);
  const setThemeSite = useSetAtom(themeSiteAtom);
  //접근 시 에러 발생
  const userName = useAtomValue(userNameAtom);
  const setUserNameError = useSetAtom(userNameErrorAtom);
  //현재 페이지
  const path = useLocation().pathname;
  //헤더를 이용해 메인화면으로 나갈 경우
  const [isConfirm, setIsConfirm] = useState(false);
  const [levelTheme, setLevelTheme] = useState("");
  //어디로 이동할 것인지 필터링
  const practiceMode = ["low", "middle", "high"];
  //모달창 타이머 제어
  const setTimerControl = useSetAtom(timerControlAtom);

  const handleNavigate = (location) => {
    //입력된 userName이 없을 경우 userName 입력 받기
    if (!userName) {
      setUserNameError(true);
      return;
    }
    //예매 과정 진행 중일 경우 모달창 켜서 제어
    //reset은 모달창에서 진행
    if (path.includes("step") && !path.includes("step0")) {
      setIsConfirm(true);
      setTimerControl(true);
      if (practiceMode.includes(location)) {
        setLevelTheme(location);
        return;
      } else {
        setLevelTheme(location);
        return;
      }
    }
    if (practiceMode.includes(location)) {
      resetAtom();
      setLevel(location); // 레벨 설정
      nav("/progress/step0"); // 연습모드 step0로 이동
    } else {
      resetAtom();
      setThemeSite(location); // 테마 사이트 설정
      nav(`/challenge/${location}/step0`); // 각 사이트의 인트로 페이지로 이동
    }
  };

  return (
    <>
      {isConfirm && (
        <Modal
          buttonShow={false}
          contents={
            <GoToLocationModalContents
              setIsConfirm={setIsConfirm}
              levelTheme={levelTheme}
            />
          }
        />
      )}
      {hovereditem === "연습모드" && (
        <SubNavBgc>
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
        </SubNavBgc>
      )}

      {hovereditem === "실전모드" && (
        <SubNavBgc>
          <SubNavWrap>
            <SubNavContainer>
              <SubNavContent onClick={() => handleNavigate("interpark")}>
                인터파크 티켓
              </SubNavContent>
              <SubNavContent onClick={() => handleNavigate("melonticket")}>
                멜론티켓
              </SubNavContent>
              <SubNavContent onClick={() => handleNavigate("ticketlink")}>
                티켓링크
              </SubNavContent>
              <SubNavContent onClick={() => handleNavigate("yes24")}>
                예스24
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
