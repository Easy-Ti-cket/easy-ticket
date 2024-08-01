import styled from "styled-components";
import Button from "../button/Button";
import Animation from "../Animation";
import {
  allowedSeatAtom,
  isDeliverySelectedAtom,
  seatCountAtom
} from "../../store/atom";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  border: 1px solid var(--key-color);
  border-radius: 8px;
  width: 400px;
  height: 457px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  font-family: pretendardB;
  margin-bottom: 20px;
  margin: 20px 20px 0 20px;
`;

const InfoContatiner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px 0 20px;
  font-family: pretendardR;
`;
const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;
const InfoText = styled.div``;
const TotalAmount = styled.div`
  margin: 0 20px 0 20px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--key-color);
`;

const AmountTitle = styled.div`
  font-family: B;
  margin-top: 20px;
  font-family: pretendardB;
`;
const AmountContent = styled.div`
  font-family: pretendardB;
  font-size: 28px;
  margin-top: 20px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const PaddingContainer = styled.div`
  padding: 6px;
`;
const NextAnimation = styled(Animation)`
  padding: 3px;
`;
const MyBookingInfo = () => {
  const allowedSeat = useAtomValue(allowedSeatAtom);
  const delivery = useAtomValue(isDeliverySelectedAtom);
  const seatCount = useAtomValue(seatCountAtom);
  const [buttonText, setButtonText] = useState("다음 단계");
  const [focus, setFocus] = useState(false);
  const Info = [
    // 공연 날짜 및 시간
    { title: "일시", content: "2024년 6월 29일(토) 14:00" },
    {
      title: "선택좌석(1석)",
      content: `${allowedSeat.row + 1}열-${allowedSeat.col + 1}`
    },
    { title: "티켓금액", price: `${seatCount ? 99000 : 0}` },
    { title: "수수료", price: `${seatCount ? 2000 : 0}` },
    { title: "배송비", price: `${delivery ? 3000 : 0}` },
    { title: "쿠폰할인", price: 0 }
  ];

  // const nav = useNavigate();
  const handleButtonClick = () => {
    if (seatCount === 0) {
      alert("좌석을 선택해주세요.");
      return;
    }
    if (seatCount > 0) {
      setButtonText("결제하기");
      return;
    }
    if (buttonText === "결제하기") {
      // nav("/progress/step4-1");
    }
  };
  const totalAmount = Info.reduce((acc, currentValue) => {
    if (currentValue.price !== undefined) {
      return acc + Number(currentValue.price);
    }
    return acc;
  }, 0);

  // 애니메이션 등장 조절
  useEffect(() => {
    if (seatCount > 0) {
      setFocus(true);
    }
  }, [seatCount]);

  return (
    <Container>
      <Title>My 예매 정보</Title>
      <InfoContatiner>
        {Info.map((item, index) => (
          <InfoItem key={index}>
            <InfoText>{item.title}</InfoText>
            <InfoText>
              {item.price != undefined ? item.price + "원" : item.content}
            </InfoText>
          </InfoItem>
        ))}
      </InfoContatiner>
      <TotalAmount>
        <AmountTitle>총 결제금액</AmountTitle>
        <AmountContent>{totalAmount}</AmountContent>
      </TotalAmount>
      <ButtonContainer>
        <PaddingContainer>
          <Button text="이전 단계" type="prev"></Button>
        </PaddingContainer>

        <NextAnimation $focus={focus}>
          <Button text={buttonText} onClick={handleButtonClick}></Button>
        </NextAnimation>
      </ButtonContainer>
    </Container>
  );
};

export default MyBookingInfo;
