// 타이머 컴포넌트

import React, { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import styled from "styled-components";
import timerIcon from "../../assests/images/icons/timer.svg";
import {
  readSecondCount,
  writeSecondCount,
  readMinuteCount,
  writeMinuteCount
} from "../../store/atom";

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

// props로 type과 second 받기
const Timer = ({ type, second, isModalOpen }) => {
  const [secondCount, setSecondCount] = useAtom(readSecondCount);
  const [, writeSecond] = useAtom(writeSecondCount);
  const [minuteCount, setMinuteCount] = useAtom(readMinuteCount);
  const [, writeMinute] = useAtom(writeMinuteCount);

  //타이머  ID (타이머 제어 호출 값)
  const countdownRef = useRef(null);

  useEffect(() => {
    if (!isModalOpen) {
      if (type === "second") {
        console.log(secondCount);
        if (!secondCount) {
          writeSecond(() => second); // 초(second) 초기값 설정
        } else {
          writeSecond(() => secondCount);
        }
        countdownRef.current = setInterval(() => {
          writeSecond((prevCount) => {
            if (prevCount <= 1) {
              clearInterval(countdownRef.current);
              return 0;
            }
            return prevCount - 1;
          });
        }, 1000);
      } else if (type === "minute") {
        //minuteCount가 없을 경우 (타이머가 시작하지 않았을 경우)
        //second로 초기화
        if (!minuteCount) {
          writeMinute(() => second); // 분(minute) 초기값 설정
          //타이머가 시작하고 일시정지 될 경우
          //일시정지된 값  = minuteCount로 초기화
        } else {
          writeMinute(() => minuteCount);
        }
        countdownRef.current = setInterval(() => {
          writeMinute((prevCount) => {
            if (prevCount <= 1) {
              clearInterval(countdownRef.current);
              return 0;
            }
            return prevCount - 1;
          });
        }, 1000);
      } else {
        //모달이 열려있을 경우 일시정지
        if (countdownRef.current) {
          clearInterval(countdownRef.current);
        }
      }
    }
    //컴포넌트 언마운트 시 (타이머)
    return () => clearInterval(countdownRef.current);
  }, [isModalOpen, writeSecond, writeMinute, second, type]);

  const minutes = Math.floor(minuteCount / 60); // 분으로 분리
  const seconds = minuteCount % 60; // 초로 분리

  return (
    <TimerContainer>
      <StyledIcon src={timerIcon} alt="timer" />
      {type === "second" ? (
        <StyledCountdownText>
          남은 시간{" "}
          <span style={{ color: "var(--key-color)" }}>{secondCount}</span>초
        </StyledCountdownText>
      ) : (
        <StyledCountdownText>
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </StyledCountdownText>
      )}
    </TimerContainer>
  );
};

export default Timer;
