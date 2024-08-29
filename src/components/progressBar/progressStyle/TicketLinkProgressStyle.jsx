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

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: -20px; /* 화살표가 오른쪽에 나오도록 위치 조정 */
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 45px 0 45px 20px; /* 화살표 크기 */
    border-color: transparent transparent transparent
      ${(props) => (props.$active ? "#000000" : "#000000")};
  }
`;
export const StepNumber = styled.div`
  display: none;
`;

export const StepLine = styled.div``;

export const StepLabel = styled.div`
  font-family: "pretendardB";
  font-size: 24px;
  color: #ffffff;
`;

export default {
  ProgressBarContainer,
  ProgressStep,
  StepNumber,
  StepLine,
  StepLabel
};
