import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1121px;
  height: 105px;
  justify-content: center;
  align-items: center;
`;
export const ProgressStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StepNumber = styled.div`
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

export const StepLine = styled.div`
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

export const StepLabel = styled.div`
  font-size: 20px;
  color: ${(props) =>
    props.$active ? "var(--key-color)" : "var(--text-color)"};
  text-align: center;
  font-family: "pretendardB";
  white-space: nowrap;
`;

export default {
  ProgressBarContainer,
  ProgressStep,
  StepNumber,
  StepLine,
  StepLabel
};
