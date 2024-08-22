import styled, { keyframes } from "styled-components";
const moveUpDown = keyframes`
    0%{
        transform: translateY(0);
    }
    50%{
        transform: translateY(5px)
    }
    100%{
        transform: translateY(0);
    }
`;
const ErrorTooltipContainer = styled.div`
  display: inline-flex;
  padding: 15px 50px;
  justify-content: center;
  align-items: center;
  background-color: var(--point-color2);
  border-radius: 8px;
  position: relative;

  /* 꼬리 스타일 */
  &::after {
    content: "";
    position: absolute;
    bottom: -9px; /* 툴팁의 하단에 꼬리가 위치하도록 설정 */
    left: 50%;
    transform: translateX(-50%); /* 꼬리를 가운데 정렬 */
    width: 0;
    height: 0;
    border-left: 10px solid transparent; /* 삼각형 꼬리 */
    border-right: 10px solid transparent;
    border-top: 10px solid var(--point-color2); /* 꼬리의 색상 */
  }
  animation: ${moveUpDown} 1s infinite;
`;

const ErrorTooltip = ({ contents }) => {
  return <ErrorTooltipContainer>{contents}</ErrorTooltipContainer>;
};

export default ErrorTooltip;
