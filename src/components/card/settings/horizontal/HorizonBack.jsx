import styled from "styled-components";
import CardABack from "../../../../../public/assets/images/cards/CardABack.svg?react";
import { CardWrap, Number } from "../CardStyles";

/*카드 번호 감싸는 컴포넌트 */
export const CardNumWrap = styled.div`
  display: flex;
  position: absolute;
  bottom: 87px;
  right: 127px;
  z-index: 1000;
`;
const HorizonBack = ({ cvc }) => {
  return (
    <CardWrap>
      {/*카드 뒷부분 */}
      <CardABack />
      <CardNumWrap>
        <Number fontSize="10px" color="#797979" $bgc="white">
          {cvc}
        </Number>
      </CardNumWrap>
    </CardWrap>
  );
};

export default HorizonBack;
