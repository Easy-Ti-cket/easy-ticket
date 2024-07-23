import CardAFront from "../../../../assests/images/cards/CardAFront.svg?react";
import styled from "styled-components";
import { CardWrap, Number } from "../CardStyles";
/*카드 번호 감싸는 컴포넌트 */
export const CardNumWrap = styled.div`
  display: flex;
  position: absolute;
  bottom: 60px;
  left: 16px;
  z-index: 1000;
`;
const HorizonFront = ({ numbers }) => {
  const [cardNum1, cardNum2, cardNum3, cardNum4] = numbers;
  return (
    <CardWrap>
      {/*카드 앞부분 */}
      <CardAFront />
      <CardNumWrap>
        <Number fontSize="18px" color="white" $bgc="#0058DC">
          {cardNum1}
        </Number>
        <Number fontSize="18px" color="white" $bgc="#0058DC">
          {cardNum2}
        </Number>
        <Number fontSize="18px" color="white" $bgc="#0058DC">
          {cardNum3}
        </Number>
        <Number fontSize="18px" color="white" $bgc="#0058DC">
          {cardNum4}
        </Number>
      </CardNumWrap>
    </CardWrap>
  );
};

export default HorizonFront;
