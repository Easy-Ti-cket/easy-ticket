import styled from "styled-components";
import {
  allowedSeatAtom,
  seatCountAtom,
  levelAtom,
  seatInfoAtom
} from "../../store/atom";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";

const Container = styled.div`
  border: 2px solid var(--fill-color);
  border-radius: 8px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 20px;
`;

const Title = styled.div`
  font-family: "pretendardB";
  margin-bottom: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;
const InfoTitle = styled.span`
  color: var(--text-color);
  font-family: "pretendardB";
  font-size: 16px;
`;
const InfoText = styled.div`
  font-family: "pretendardB";
  font-size: 16px;
`;
const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 2px solid var(--fill-color);
  padding: 20px 0;
`;

const AmountTitle = styled.div`
  font-family: pretendardB;
`;
const AmountContent = styled.div`
  font-family: pretendardB;
  font-size: 28px;
`;

const MyBookingInfo = ({ option }) => {
  const allowedSeat = useAtomValue(allowedSeatAtom);
  const seatCount = useAtomValue(seatCountAtom);
  const seatInfo = useAtomValue(seatInfoAtom);
  const level = useAtomValue(levelAtom);

  const Info = [
    // 공연 날짜 및 시간
    { title: "일시", content: seatInfo.date },
    {
      title: "선택좌석(1석)",
      content: `${allowedSeat.row + 1}열-${allowedSeat.col + 1}`
    },
    { title: "티켓금액", price: `${seatCount ? seatInfo.price : 0}` },
    { title: "수수료", price: `${seatCount ? 2000 : 0}` },
    { title: "배송비", price: `${option === "배송" ? 3000 : 0}` },
    { title: "쿠폰할인", price: 0 }
  ];

  const totalAmount = Info.reduce((acc, currentValue) => {
    if (currentValue.price !== undefined) {
      return acc + Number(currentValue.price);
    }
    return acc;
  }, 0);

  return (
    <Container>
      <Title>My 예매 정보</Title>
      <InfoContainer>
        {Info.map((item, index) => (
          <InfoItem key={index}>
            <InfoTitle>{item.title}</InfoTitle>
            <InfoText>
              {item.price != undefined ? item.price + "원" : item.content}
            </InfoText>
          </InfoItem>
        ))}
      </InfoContainer>
      <TotalAmount>
        <AmountTitle>총 결제금액</AmountTitle>
        <AmountContent>{totalAmount}원</AmountContent>
      </TotalAmount>
    </Container>
  );
};

export default MyBookingInfo;
