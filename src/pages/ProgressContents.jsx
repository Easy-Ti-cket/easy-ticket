import styled from "styled-components";
import ProgressBar from "../components/ProgressBar";
import Timer from "../components/timer/Timer";
import { Outlet, useLocation } from "react-router-dom";
import Button from "../components/button/Button";
import { useEffect, useState } from "react";
import Modal from "../components/modal/Modal";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { themeSiteAtom, levelAtom, timerControlAtom } from "../store/atom";
import EscModalContents from "../components/modal/EscModalContents";

//ProgressBar+ContentsBox Container
const ProgressContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgressBarBox = styled.div`
  min-height: 145px;
`;

const TextBox = styled.div`
  width: 1320px;
  min-height: 122px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
//화면 높이에 따라 줄어드는 contentsBox, min-height: 500px
const ContentsBox = styled.div`
  width: 1320px;
  flex-grow: 1;
  margin-bottom: 30px;
  min-height: 500px;
  border: var(--fill-color) 1px solid;
  border-radius: 8px;
  display: inline-flex;
  justify-content: center;
  padding: 30px 0;
  //도움말 버튼 부모 position
  position: relative;
`;
//도움말 버튼 컨테이너
const ButtonContainer = styled.div`
  position: absolute;
  top: -80px;
  right: 0;
`;

/*난이도별 contents를 children으로 받아서 ProgressBar와 함께 렌더링*/
const ProgressContents = ({ text }) => {
  //타이머 컨트롤 state
  const setTimerControl = useSetAtom(timerControlAtom);
  //레벨 별 타이머 출력 설정
  const level = useAtomValue(levelAtom);
  //도움말 모달창 제어
  const [isModalOpen, setIsModalOpen] = useState(false);
  //theme
  const themeSite = useAtomValue(themeSiteAtom);
  const handleModalOpen = () => {
    setIsModalOpen(true);
    setTimerControl(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    setTimerControl(false);
  };
  //esc 일시정지 제어
  //step0 화면에서는 일시정지 렌더링되지 않도록 설정
  const path = useLocation().pathname;
  const [isPaused, setIsPaused] = useState(false);
  const handlePaused = (e) => {
    if (
      //연습모드 step0 또는 실전모드 step0에서 렌더링되지 않도록 설정
      path !== "/progress/step0" &&
      path !== `/${themeSite}/step0` &&
      (e.key === "Escape" || e.key === "esc")
    ) {
      setIsPaused((prev) => !prev);
      setTimerControl((prev) => !prev);
    }
    return;
  };
  useEffect(() => {
    window.addEventListener("keydown", handlePaused);
    //컴포넌트 언마운트 or 경로 변경될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("keydown", handlePaused);
    };
  }, [path]);

  // 연습모드인 경우만 도움말 버튼 보여주기
  const showHelpButton = themeSite === "practice";

  return (
    <ProgressContentsContainer>
      {/*프로그래스 바*/}
      <ProgressBarBox>
        <ProgressBar />
      </ProgressBarBox>
      {/*고급 level일 경우에만 Timer 설정 */}
      {/*모달이 열렸을 경우 Timer 정지 - isModalOpen, isPaused*/}
      {level === "high" && themeSite === "practice" && (
        <Timer type={"minute"} second={1800} />
      )}
      {themeSite !== "practice" && <Timer type={"minute"} second={900} />}
      <TextBox>{text}</TextBox>
      <ContentsBox>
        {/*도움말 버튼 */}
        {showHelpButton && (
          <ButtonContainer>
            <Button
              onClick={handleModalOpen}
              text="도움이 필요하신가요?"
              type="help"
            />
          </ButtonContainer>
        )}
        {/*일시정지 모달창 */}
        {isPaused && (
          <Modal
            contents={<EscModalContents setIsPaused={setIsPaused} />}
            buttonShow={false}
            width="350px"
            height="400px"
          />
        )}
        {/*도움말 모달창*/}
        {isModalOpen && (
          <Modal onClick={handleModalClose} contents="내용입니다" />
        )}
        <Outlet />
      </ContentsBox>
    </ProgressContentsContainer>
  );
};

export default ProgressContents;
