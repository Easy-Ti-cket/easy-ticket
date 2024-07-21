import styled from "styled-components";
import Button from "./button/Button";
const SeatInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--key-color);
  padding: 8px;
  width: 300px;
  height: 480px;
`;

const Header = styled.span`
  width: 280px;
  height: 30px;
  font-family: "pretendardB";
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const SeatTableContainer = styled.div`
  border: 1px solid var(--key-color);
  padding: 16px 8px;
  width: 265px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const SeatTableDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SelectedSeats = styled.div`
  border: 1px solid var(--key-color);
  padding: 8px;
  width: 265px;
  height: 140px;
`;

const SelectedSeatsHeader = styled.span`
  font-size: 14px;
  align-items: end;
`;
const SelectedSeatsInfo = styled.div``;
const SeatsList = styled.div`
  padding: 8px 0;
`;
const SeatGrade = styled.span`
  font-family: "pretendardM";
  font-size: 14px;
  margin-right: 24px;
`;
const SeatPrice = styled.span`
  font-family: "pretendardM";
  font-size: 14px;
`;

const SeatInfo = () => {
  const seats = [
    { grade: "1구역 0석", price: 99000 },
    { grade: "2구역 1석", price: 99000 },
    { grade: "3구역 0석", price: 49900 },
    { grade: "4구역 0석", price: 49900 }
  ];

  return (
    <SeatInfoContainer>
      <Header>좌석등급 / 잔여석</Header>
      <SeatTableContainer>
        {seats.map((seat, index) => (
          <SeatTableDiv key={index}>
            <SeatGrade>{seat.grade}</SeatGrade>
            <SeatPrice>{seat.price}원</SeatPrice>
          </SeatTableDiv>
        ))}
      </SeatTableContainer>
      <Header>
        선택좌석
        <SelectedSeatsHeader>총 0석 선택되었습니다.</SelectedSeatsHeader>
      </Header>
      <SelectedSeats>
        <SelectedSeatsInfo>
          <SeatGrade>좌석등급</SeatGrade>
          <SeatPrice>좌석정보</SeatPrice>
          <SeatsList></SeatsList>
        </SelectedSeatsInfo>
      </SelectedSeats>
      <Button text={"좌석선택완료"} type={"select-seat"}></Button>
    </SeatInfoContainer>
  );
};

export default SeatInfo;
