// 타이머 컴포넌트

import React, { useEffect } from "react";
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
const Timer = ({ type, second }) => {
  const [secondCount, setSecondCount] = useAtom(readSecondCount);
  const [, writeSecond] = useAtom(writeSecondCount);
  const [minuteCount, setMinuteCount] = useAtom(readMinuteCount);
  const [, writeMinute] = useAtom(writeMinuteCount);

  useEffect(() => {
    if (type === "second") {
      writeSecond(() => second); // 초(second) 초기값 설정
      const countdown = setInterval(() => {
        writeSecond((prevCount) => {
          if (prevCount <= 1) {
            clearInterval(countdown);
            return 0;
          }
          return prevCount - 1;
        });
      }, 1000);

      return () => clearInterval(countdown);
    } else if (type === "minute") {
      writeMinute(() => second); // 분(minute) 초기값 설정
      const countdown = setInterval(() => {
        writeMinute((prevCount) => {
          if (prevCount <= 1) {
            clearInterval(countdown);
            return 0;
          }
          return prevCount - 1;
        });
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [writeSecond, writeMinute, second, type]);

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
