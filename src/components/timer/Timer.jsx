import React, { useEffect, useRef, useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import styled from "styled-components";
import timerIcon from "/assets/images/icons/timer.svg";
import { minuteCountAtom, timerControlAtom } from "../../store/atom";
import { useLocation } from "react-router-dom";

// 타이머 요소 전체를 묶는 컨테이너
const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0; //  프로그래스바와 텍스트박스 사이 상하 간격 추가
`;

// 아이콘 스타일 지정
const StyledIcon = styled.img`
  width: 40px;
  height: 40px;
  align-items: center;
`;

// 남은 시간 스타일 지정
const StyledCountdownText = styled.div`
  color: var(--text-color2);
  font-family: pretendardR;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -1.5px;
`;

// props로 second(초기값) 받기
const Timer = ({ second }) => {
  const [minuteCount, writeMinute] = useAtom(minuteCountAtom);
  // 타이머 ID (타이머 제어 호출 값)
  const countdownRef = useRef(null);
  //타이머 제어를 위한 현재 위치 출력
  const location = useLocation();
  const path = location.pathname;
  //타이머 정지 재개
  const timerControl = useAtomValue(timerControlAtom);
  //로딩
  const [isTimerLoading, setIsTimerLoading] = useState(false);

  useEffect(() => {
    // 타이머 초기화 및 제어
    if (timerControl) {
      // 모달이 열려있을 때 타이머 멈춤
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
      }
      return;
    }
    // 경로에 따라 타이머 멈춤 또는 재개
    if (path.endsWith("step5") || path.endsWith("outro")) {
      //step5 -> 예매 성공일 경우 타이머 멈춤
      clearInterval(countdownRef.current);
    } else if (path.includes("step0")) {
      //고급/실전 시작화면에서는 타이머 멈추고 리셋
      setIsTimerLoading(true);
      clearInterval(countdownRef.current);
      writeMinute(second);
      //setTimeout 0 값을 사용하여 앞 순서가 모두 시행될 경우 false로 변경
      setTimeout(() => {
        setIsTimerLoading(false);
      }, 0);
    } else {
      // 타이머 시작
      // console.log("minuteCount", minuteCount);
      countdownRef.current = setInterval(() => {
        writeMinute((prevCount) => {
          if (prevCount <= 1) {
            clearInterval(countdownRef.current);
            return 0;
          }
          return prevCount - 1;
        });
      }, 1000);
    }
    // 컴포넌트 언마운트 시 타이머 클리어
    return () => clearInterval(countdownRef.current);
  }, [timerControl, path, second, writeMinute]);
  const minutes = Math.floor(minuteCount / 60); // 분으로 분리
  const seconds = minuteCount % 60; // 초로 분리

  if (isTimerLoading) {
    return <h1>로딩 중</h1>;
  }

  return (
    <TimerContainer>
      <StyledIcon src={timerIcon} alt="timer" />
      <StyledCountdownText>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </StyledCountdownText>
    </TimerContainer>
  );
};

export default Timer;
