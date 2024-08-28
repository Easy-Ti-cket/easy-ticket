import styled from "styled-components";
import { useAtomValue, useAtom } from "jotai";
import { progressAtom, themeSiteAtom } from "../../store/atom";
import useProgressStyle from "../../hooks/useProgressStyle";

const ProgressBar = () => {
  const progress = useAtomValue(progressAtom);
  const [themeSite, setThemeSite] = useAtom(themeSiteAtom);
  const {
    ProgressBarContainer,
    ProgressStep,
    StepNumber,
    StepLine,
    StepLabel
  } = useProgressStyle();
  const stepsTextObj = {
    practice: [
      "공연 및 회차선택",
      "좌석 선택",
      "예매 정보 확인",
      "결제",
      "예매완료"
    ],
    interpark: [
      "관람일/회차선택",
      "좌석 선택",
      "가격/할인선택",
      "배송선택/주문자확인",
      "결제하기"
    ],
    yes24: ["관람일/회차", "좌석선택", "할인/쿠폰", "수령방법", "결제방법"],
    melonticket: ["좌석 선택", "가격 선택", "배송/결제"],
    ticketlink: [
      "날짜/회차선택",
      "등급/좌석선택",
      "권종/할인/매수 선택 ",
      "배송선택/예매확인 ",
      "결제"
    ]
  };
  let steps = [];
  switch (themeSite) {
    case "practice":
      steps = stepsTextObj.practice;
      break;
    case "interpark":
      steps = stepsTextObj.interpark;
      break;
    case "yes24":
      steps = stepsTextObj.yes24;
      break;
    case "melonticket":
      steps = stepsTextObj.melonticket;
      break;
    case "ticketlink":
      steps = stepsTextObj.ticketlink;
      break;
    default:
      steps = stepsTextObj.practice;
      break;
  }

  return (
    <ProgressBarContainer>
      {steps.map((stepName, index) => (
        <ProgressStep key={index} $active={progress == index + 1}>
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
