import styled from "styled-components";
export const ProgressBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 105px;
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
  font-family: "pretendardB";
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 5px;
    bottom: 24px;
    width: 8px;
    height: 8px;
    border: solid var(--key-color);
    border-width: 0 4px 4px 0;
    transform: rotate(-45deg);
  }
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
  font-family: "pretendardB";
  font-size: 24px;
  color: ${(props) => (props.$active ? "#ffffff" : "var(--text-color)")};
`;

export default {
  ProgressBarContainer,
  ProgressStep,
  StepNumber,
  StepLine,
  StepLabel
};
