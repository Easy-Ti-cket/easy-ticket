import styled from "styled-components";
import Button from "./button/Button";
import AnimationArea from "./Animation";
import { useAtomValue } from "jotai";
import {
  isSeatSelectedAtom,
  allowedSeatAtom,
  levelAtom,
  allowedSectionAtom
} from "../store/atom";

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
const SelectedSeatsInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const SeatGrade = styled.span`
  font-family: "pretendardM";
  font-size: 14px;
  margin: 0 24px 8px 0;
`;
const SeatPrice = styled.span`
  font-family: "pretendardM";
  font-size: 14px;
`;
const ButtonAnimationArea = styled(AnimationArea)`
  padding: 5px;
`;
const SeatInfo = () => {
  const isSeatSelected = useAtomValue(isSeatSelectedAtom);
  const allowedSection = useAtomValue(allowedSectionAtom);
  const allowedSeat = useAtomValue(allowedSeatAtom);
  const level = useAtomValue(levelAtom);

  const seats = [
    { grade: "1구역 0석", price: 99000 },
    { grade: "2구역 0석", price: 99000 },
    { grade: "3구역 0석", price: 49900 },
    { grade: "4구역 0석", price: 49900 }
  ];

  //allowedSection이 유효한지 확인, 유효하다면 해당 구역의 좌석을 1석으로 변경
  if (allowedSection > 0 && allowedSection <= seats.length) {
    seats[allowedSection - 1].grade = `${allowedSection}구역 1석`;
  }

  let isFocus = false;
  if (isSeatSelected && level == "low") {
    isFocus = true;
  }
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
        <SelectedSeatsHeader>
          총
          <span style={{ color: "var(--point-color)" }}>
            {isSeatSelected ? "1" : "0"}
          </span>
          석 선택되었습니다.
        </SelectedSeatsHeader>
      </Header>
      <SelectedSeats>
        <SelectedSeatsInfo>
          <SeatGrade>좌석등급</SeatGrade>
          <SeatPrice>좌석정보</SeatPrice>
          {isSeatSelected && (
            <>
              <SeatGrade>전석</SeatGrade>
              <SeatPrice>{`${allowedSeat.row + 1}열-${allowedSeat.col + 1}`}</SeatPrice>
            </>
          )}
        </SelectedSeatsInfo>
      </SelectedSeats>
      <ButtonAnimationArea $focus={isFocus}>
        <Button text={"좌석선택완료"} type={"select-seat"}></Button>
      </ButtonAnimationArea>
    </SeatInfoContainer>
  );
};

export default SeatInfo;
