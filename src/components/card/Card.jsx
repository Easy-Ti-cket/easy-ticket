import React, { useEffect } from "react";
import styled from "styled-components";
import useRandomNum from "./settings/useRandomNum"; // randomNum 훅 사용
import HorizonFront from "./settings/horizontal/HorizonFront";
import HorizonBack from "./settings/horizontal/HorizonBack";
import VerticalFront from "./settings/vertical/VerticalFront";
import VerticalBack from "./settings/vertical/VerticalBack";

const Wrap = styled.div`
  display: flex;
  gap: 20px;
`;

const Card = () => {
  const { cardNumbers } = useRandomNum(); // useRandomNum 훅 호출
  //0 또는 1 선택 - 카드 타입 랜덤 선택
  const cardType = Math.floor(Math.random() * 2);
  return (
    <Wrap>
      {cardType === 1 ? (
        <>
          <HorizonFront numbers={cardNumbers.slice(0, 4)} />
          <HorizonBack cvc={cardNumbers.slice(4)} />
        </>
      ) : (
        <>
          <VerticalFront />
          <VerticalBack
            numbers={cardNumbers.slice(0, 4)}
            cvc={cardNumbers.slice(4)}
          />
        </>
      )}
    </Wrap>
  );
};

export default Card;
