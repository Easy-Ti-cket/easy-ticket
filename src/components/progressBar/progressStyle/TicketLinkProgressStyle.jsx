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
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.$active ? "var(--text-color2)" : "var(--text-color)"};
  height: 90px;
  width: 100%;
  position: relative;
  &:not(:last-child)::after {
    /* 마지막 ProgressStep을 제외한 모든 컴포넌트에 화살표를 표시 */
    content: "";
    position: absolute;
    z-index: 1;
    right: -20px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 45px 0 45px 20px; /* 화살표 크기 */
    border-color: transparent transparent transparent
      ${(props) => (props.$active ? "var(--text-color2)" : "var(--text-color)")};
  }
`;
export const StepNumber = styled.div`
  display: none;
`;

export const StepLine = styled.div``;

export const StepLabel = styled.div`
  font-family: "pretendardB";
  font-size: 24px;
  margin-left: 10px;
  color: #ffffff;
`;

export default {
  ProgressBarContainer,
  ProgressStep,
  StepNumber,
  StepLine,
  StepLabel
};
