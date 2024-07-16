import React, { useEffect, useState } from "react";
import styled from "styled-components";
import timerIcon from "../../assests/images/icons/timer.svg";

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

// props로 second 받기
const Timer = ({ second }) => {
  const [count, setCount] = useState(second);

  useEffect(() => {
    const countdown = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(countdown);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <TimerContainer>
      <StyledIcon src={timerIcon} alt="timer" />
      <StyledCountdownText>
        남은 시간 <span style={{ color: "var(--key-color)" }}>{count}</span>초
      </StyledCountdownText>
    </TimerContainer>
  );
};

export default Timer;
