import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../button/Button";
import { useAtom, useSetAtom } from "jotai";
import {
  minuteCountAtom,
  timerControlAtom,
  themeSiteAtom,
  levelAtom
} from "../../../store/atom";
import resetAtom from "../../../util/resetAtom";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

const InfoMessage = styled.span`
  font-size: 35px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  transform: translateX(-10px);
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const TimeoutModalContents = ({ setIsModalContentsOpen }) => {
  const navigate = useNavigate();
  const [timeSpent] = useAtom(minuteCountAtom);
  const setTimerControl = useSetAtom(timerControlAtom);
  // themeSite
  const [themeSite] = useAtom(themeSiteAtom);
  // level
  const [level] = useAtom(levelAtom);

  // 다시 시작하기
  const handleRestart = () => {
    const confirmNavigate = true;
    if (confirmNavigate) {
      setIsModalContentsOpen(false); // 모달 닫기
      setTimerControl(false); // 타이머 정지

      // 경로 설정
      if (themeSite === "practice" && level === "high") {
        navigate("/progress/step0");
        resetAtom();
      } else {
        navigate(`/challenge/${themeSite}/step0`);
        resetAtom();
      }
    }
  };

  // 처음으로 돌아가기
  const handleReturnToMain = () => {
    setIsModalContentsOpen(false); // 모달 닫기
    setTimerControl(false); // 타이머 정지
    // 메인 페이지로 이동
    navigate("/");
    // 세션 스토리지 초기화
    resetAtom();
  };

  return (
    <Wrap>
      <InfoMessage>시간이 초과하였습니다!</InfoMessage>
      <ButtonWrap>
        <Button text="다시 시작하기" onClick={handleRestart} />
        <Button
          type="outline"
          text="처음으로 돌아가기"
          onClick={handleReturnToMain}
        />
      </ButtonWrap>
    </Wrap>
  );
};

export default TimeoutModalContents;
