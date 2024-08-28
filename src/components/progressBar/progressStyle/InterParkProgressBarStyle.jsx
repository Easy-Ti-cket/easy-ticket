import styled from "styled-components";
export const ProgressBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 105px;
  justify-content: center;
  align-items: center;
  background-color: #2d2d2d;
`;
export const ProgressStep = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.$active ? "var(--progress-color)" : "#ECECEC"};
  height: 60px;
  width: 100%;
  // width: 211px;
`;
export const StepNumber = styled.div`
  color: ${(props) =>
    props.$active ? "var(--point-color2)" : "var(--text-color)"};
  font-family: "pretendardB";
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  margin-right: 16px;
`;

export const StepLine = styled.div``;

export const StepLabel = styled.div`
  color: ${(props) => (props.$active ? "#ffffff" : "var(--text-color)")};
`;

export default {
  ProgressBarContainer,
  ProgressStep,
  StepNumber,
  StepLine,
  StepLabel
};
