import styled from "styled-components";
import { useAtomValue } from "jotai";
import { progressAtom } from "../store/atom";
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

const StepNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$active ? "var(--key-color)" : "var(--fill-color)"};
  color: #ffff;
  margin-bottom: 10px;
  font-family: "pretendardB";
`;
const StepLine = styled.div`
  width: 211px;
  height: 13px;
  background-color: ${(props) =>
    props.$active ? "var(--key-color)" : "var(--fill-color)"};
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

const ProgressBar = () => {
  const progress = useAtomValue(progressAtom);
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
        <ProgressStep key={index} $active={progress >= index + 1}>
          <StepNumber $active={progress == index + 1}>{index + 1}</StepNumber>
          <StepLine
            className={
              index == 0 ? "rounded-start" : index == 4 ? "rounded-end" : ""
            }
            $active={progress >= index + 1}
          />
          <StepLabel $active={progress == index + 1}>{stepName}</StepLabel>
        </ProgressStep>
      ))}
    </ProgressBarContainer>
  );
};
export default ProgressBar;
