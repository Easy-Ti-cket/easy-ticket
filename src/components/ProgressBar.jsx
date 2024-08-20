import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAtomValue, useAtom } from "jotai";
import { progressAtom, themeSiteAtom } from "../store/atom";

const ProgressBarContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1121px;
  height: 105px;
  justify-content: center;
  align-items: center;
`;

const ProgressStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// // 테마에 따라 색상을 반환하는 함수
// const getColor = (props, type) => {
//   const themeColors = theme[props.$themeSite] || theme.default;
//   if (props.$themeSite === "practice" || props.$themeSite === null) {
//     // 디폴트 테마(practice)이면 기본 키 컬러 적용
//     return "var(--key-color)";
//   } else return themeColors[type];
// };

const StepNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$active ? "var(--progress-color)" : "var(--fill-color)"};
  color: #fff;
  margin-bottom: 10px;
  font-family: "pretendardB";
`;

const StepLine = styled.div`
  width: 211px;
  height: 13px;
  background-color: ${(props) =>
    props.$active ? "var(--progress-color)" : "var(--fill-color)"};
  margin-bottom: 10px;

  &.rounded-start {
    border-radius: 8px 0 0 8px;
  }
  &.rounded-end {
    border-radius: 0 8px 8px 0;
  }
`;

const StepLabel = styled.div`
  font-size: 20px;
  color: ${(props) =>
    props.$active ? "var(--key-color)" : "var(--text-color)"};
  text-align: center;
  font-family: "pretendardB";
  white-space: nowrap;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 105px;
  width: 100%;
  max-width: 1121px;
  font-size: 20px;
  font-family: "pretendardB";
`;

const ProgressBar = () => {
  const progress = useAtomValue(progressAtom);
  const [themeSite, setThemeSite] = useAtom(themeSiteAtom);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTheme = () => {
      const storedTheme = sessionStorage.getItem("themeSite");
      if (storedTheme) {
        setThemeSite(storedTheme);
      } else {
        setThemeSite("practice");
      }
      setIsLoading(false);
    };
    fetchTheme();
  }, [setThemeSite]);

  const steps = [
    "공연 및 회차선택",
    "좌석 선택",
    "예매 정보 확인",
    "결제",
    "예매완료"
  ];

  return (
    <ProgressBarContainer>
      {steps.map((stepName, index) => (
        <ProgressStep key={index}>
          <StepNumber $active={progress === index + 1} $themeSite={themeSite}>
            {index + 1}
          </StepNumber>
          <StepLine
            className={
              index === 0 ? "rounded-start" : index === 4 ? "rounded-end" : ""
            }
            $active={progress > index} // 이전 단계를 활성화 상태로 표시
            $themeSite={themeSite}
          />
          <StepLabel $active={progress === index + 1} $themeSite={themeSite}>
            {stepName}
          </StepLabel>
        </ProgressStep>
      ))}
    </ProgressBarContainer>
  );
};

export default ProgressBar;
