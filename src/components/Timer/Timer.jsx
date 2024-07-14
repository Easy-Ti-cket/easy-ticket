// 상태관리 라이브러리 사용 시 전체적으로 수정 필요!
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

const Timer = () => {
  const [count, setCount] = useState(30); // 30초로 초기화

  useEffect(() => {
    const countdown = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    if (count == 0) {
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  }, [count]); // 의존성 배열에 추가

  return (
    <>
      <TimerContainer>
        <StyledIcon src={timerIcon} alt="timer"></StyledIcon>
        <StyledCountdownText>
          남은 시간 <span style={{ color: "var(--key-color)" }}>{count}</span>초
        </StyledCountdownText>
      </TimerContainer>
    </>
  );
};

export default Timer;
