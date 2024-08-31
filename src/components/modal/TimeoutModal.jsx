import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../button/Button";
import { useAtom, useSetAtom } from "jotai";
import {
  minuteCountAtom,
  timerControlAtom,
  themeSiteAtom,
  levelAtom
} from "../../store/atom";
import resetAtom from "../../util/resetAtom";

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

const TimeoutModal = ({ setIsModalOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [timeSpent] = useAtom(minuteCountAtom);
  const setTimerControl = useSetAtom(timerControlAtom);
  // themeSite
  const [themeSite] = useAtom(themeSiteAtom);
  // level
  const [level] = useAtom(levelAtom);
  // 현재 경로가 step0인지 확인하기 위한 변수 정의
  const isStep0Path = location.pathname.includes("step0");

  useEffect(() => {
    // minute이 0보다 작아지면 모달 자동 열림
    if (timeSpent <= 0) {
      setIsModalOpen(true);
    }
    // 단, 인트로 페이지에서는 모달이 열리지 않도록 설정
    // (초기 타이머가 0으로 설정되어 있기 때문.)
    if (isStep0Path) {
      setIsModalOpen(false);
    }
  }, [timeSpent, isStep0Path, setIsModalOpen]);

  // 다시 시작하기
  const handleRestart = () => {
    const confirmNavigate = true;
    if (confirmNavigate) {
      setIsModalOpen(false); // 모달 닫기
      setTimerControl(false); // 타이머 정지

      // 경로 설정
      if (themeSite === "practice" && level === "high") {
        navigate("/progress/step0");
      } else {
        navigate(`/challenge/${themeSite}/step0`);
      }
    }
  };

  // 처음으로 돌아가기
  const handleReturnToMain = () => {
    setIsModalOpen(false); // 모달 닫기
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

export default TimeoutModal;
