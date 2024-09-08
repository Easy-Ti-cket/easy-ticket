// 툴팁 컴포넌트

import React from "react";
import styled from "styled-components";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const StyledTooltip = styled.div`
  .react-tooltip {
    background-color: var(--point-color2);
    color: var(--text-color2);
    font-family: pretendardM;
    padding: 10px;
    border-radius: 8px;
    z-index: 99;
  }

  // 위치에 따라 툴팁 꼬리 색깔 변경
  .react-tooltip.place-top::after {
    border-top-color: var(--point-color2);
  }
  .react-tooltip.place-bottom::after {
    border-bottom-color: var(--point-color2);
  }
  .react-tooltip.place-left::after {
    border-left-color: var(--point-color2);
  }
  .react-tooltip.place-right::after {
    border-right-color: var(--point-color2);
  }
`;

// 자식을 렌더링하여 부모 요소로 사용
const Tooltip = ({ text, children }) => (
  <>
    {React.cloneElement(children, { "data-tooltip-content": text })}
    <StyledTooltip>
      <ReactTooltip anchorSelect="[data-tooltip-content]" place="top" />
    </StyledTooltip>
  </>
);

export default Tooltip;
