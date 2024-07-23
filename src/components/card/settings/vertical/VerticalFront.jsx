import CardBFront from "../../../../assests/images/cards/CardBFront.svg?react";
import styled from "styled-components";
import { CardWrap, Number } from "../CardStyles";

const VerticalFront = () => {
  return (
    <CardWrap>
      {/*카드 앞부분 */}
      <CardBFront />
    </CardWrap>
  );
};

export default VerticalFront;
