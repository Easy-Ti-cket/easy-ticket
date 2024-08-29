import styled from "styled-components";
export const ProgressBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 105px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
`;
export const ProgressStep = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  height: 100%;
  width: 100%;
`;
export const StepNumber = styled.div`
  color: #ffffff;
  font-family: "pretendardR";
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  background-color: ${(props) =>
    props.$active ? "var(--key-color)" : "var(--fill-color)"};
  width: 60px;
  height: 30px;
  &::before {
    content: "step";
  }
  margin-right: 5px;
`;

export const StepLine = styled.div``;

export const StepLabel = styled.div`
  font-size: 24px;
  color: ${(props) => (props.$active ? "#000000" : "var(--fill-color)")};
`;

export default {
  ProgressBarContainer,
  ProgressStep,
  StepNumber,
  StepLine,
  StepLabel
};
