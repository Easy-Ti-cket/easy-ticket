import styled from "styled-components";
import CardBBack from "/public/assets/images/cards/CardBBack.svg?react";
import { CardWrap, Number } from "../CardStyles";

/*카드 번호 감싸는 컴포넌트 */
export const CardNumWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  position: absolute;
  bottom: 180px;
  right: 20px;
  z-index: 1000;
`;
export const CvcWrap = styled.div`
  position: absolute;
  bottom: 157px;
  right: 20px;
`;
const VerticalBack = ({ cvc, numbers }) => {
  const [cardNum1, cardNum2, cardNum3, cardNum4] = numbers;
  return (
    <CardWrap>
      {/*카드 번호 */}
      <CardBBack />
      <CardNumWrap>
        <Number fontSize="12px" color="white" $bgc="#353B72">
          {cardNum1}
        </Number>
        <Number fontSize="12px" color="white" $bgc="#353B72">
          {cardNum2}
        </Number>
        <Number fontSize="12px" color="white" $bgc="#353B72">
          {cardNum3}
        </Number>
        <Number fontSize="12px" color="white" $bgc="#353B72">
          {cardNum4}
        </Number>
      </CardNumWrap>
      {/*cvc */}
      <CvcWrap>
        <Number fontSize="10px" color="white" $bgc="#353B72">
          {cvc}
        </Number>
      </CvcWrap>
    </CardWrap>
  );
};

export default VerticalBack;
