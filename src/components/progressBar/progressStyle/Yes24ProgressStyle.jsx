import styled from "styled-components";
export const ProgressBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 105px;
  justify-content: center;
  align-items: center;
`;
export const ProgressStep = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) =>
    props.$active ? "#ffffff" : "var(--text-color)"};
  height: 80px;
  width: 100%;
`;
export const StepNumber = styled.div`
  color: ${(props) =>
    props.$active ? "var(--key-color)" : "var(--fill-color)"};
  font-family: "pretendardB";
  font-size: 20px;
  display: flex;
  margin-bottom: 5px;
  margin-left: 16px;
  font-size: 20px;
  &::before {
    content: "step";
  }
`;

export const StepLine = styled.div``;

export const StepLabel = styled.div`
  margin-left: 16px;
  font-family: "pretendardB";
  font-size: 24px;
  color: ${(props) => (props.$active ? "#000000" : "#ffffff")};
`;

export default {
  ProgressBarContainer,
  ProgressStep,
  StepNumber,
  StepLine,
  StepLabel
};