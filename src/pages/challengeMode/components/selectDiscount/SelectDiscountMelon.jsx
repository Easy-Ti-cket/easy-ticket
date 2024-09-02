import { useState } from "react";
import styled from "styled-components";
// Styled components
const CouponContainer = styled.div`
  width: 100%;
  font-size: 24px;
  font-family: PretendardM;
  cursor: pointer;
  border-top: 1px solid var(--fill-color);
  padding: 15px 0;
`;
const LineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextContainer = styled.div``;
const CouponCount = styled.span`
  padding-left: 10px;
  color: var(--key-color);
`;
const ArrowBox = styled.div`
  padding-right: 20px;
  color: var(--fill-color);
`;

const CouponDetails = styled.div`
  margin-top: 30px;
  font-size: 14px;
  color: var(--text-color2);
  text-align: center;
  height: 50px;
`;

// React component
const SelectDiscountMelon = ({ name, detail }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <CouponContainer onClick={handleToggle}>
      <LineContainer>
        <TextContainer>
          {name} <CouponCount>0개</CouponCount>
        </TextContainer>
        <ArrowBox>{isExpanded ? "△" : "▽"}</ArrowBox>
      </LineContainer>
      {isExpanded && <CouponDetails>{detail}</CouponDetails>}
    </CouponContainer>
  );
};

export default SelectDiscountMelon;
