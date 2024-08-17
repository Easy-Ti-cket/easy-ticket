import styled from "styled-components";
import { useAtomValue } from "jotai";
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

const getColor = (props, type) => {
  if (props.$themeSite === "practice") {
    return "var(--key-color)";
  } else {
    return props.theme[props.$themeSite][type];
  }
};

const StepNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$active ? getColor(props, "grayColor") : "var(--fill-color)"};
  color: #fff;
  margin-bottom: 10px;
  font-family: "pretendardB";
`;

const StepLine = styled.div`
  width: 211px;
  height: 13px;
  background-color: ${(props) =>
    props.$active ? getColor(props, "grayColor") : "var(--fill-color)"};
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
    props.$active ? getColor(props, "grayColor") : "var(--text-color)"};
  text-align: center;
  font-family: "pretendardB";
  white-space: nowrap;
`;

const ProgressBar = () => {
  const progress = useAtomValue(progressAtom);
  //세션스토리지에서 값을 가져오기 전 렌더링 방지
  //타이밍 문제 해결을 위한 것으로 삭제 가능
  const themeSite = sessionStorage.getItem("themeSite");
  console.log(themeSite);
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
          <StepNumber $active={progress == index + 1} $themeSite={themeSite}>
            {index + 1}
          </StepNumber>
          <StepLine
            className={
              index == 0 ? "rounded-start" : index == 4 ? "rounded-end" : ""
            }
            $active={progress > index} // 이전 단계를 활성화 상태로 표시
            $themeSite={themeSite}
          />
          <StepLabel $active={progress == index + 1} $themeSite={themeSite}>
            {stepName}
          </StepLabel>
        </ProgressStep>
      ))}
    </ProgressBarContainer>
  );
};

export default ProgressBar;
