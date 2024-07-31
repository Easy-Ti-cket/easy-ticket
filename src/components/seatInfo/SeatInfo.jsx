import Button from "../button/Button";
import { useAtomValue } from "jotai";
import {
  isSeatSelectedAtom,
  allowedSeatAtom,
  levelAtom,
  allowedSectionAtom
} from "../../store/atom";
import {
  SeatInfoContainer,
  Header,
  SeatTableContainer,
  SeatTableDiv,
  SelectedSeats,
  SelectedSeatsHeader,
  SelectedSeatsInfo,
  SeatGrade,
  SeatPrice,
  ButtonAnimationArea
} from "./SeatInfoStyles";
import { useNavigate } from "react-router-dom";
const SeatInfo = () => {
  const isSeatSelected = useAtomValue(isSeatSelectedAtom);
  const allowedSeat = useAtomValue(allowedSeatAtom);
  const allowedSection = useAtomValue(allowedSectionAtom);
  const level = useAtomValue(levelAtom);
  const seats = [
    { grade: "1구역 0석", price: 99000 },
    { grade: "2구역 0석", price: 99000 },
    { grade: "3구역 0석", price: 49900 },
    { grade: "4구역 0석", price: 49900 }
  ];
  const nav = useNavigate();
  //allowedSection이 유효한지 확인, 유효하다면 해당 구역의 좌석을 1석으로 변경
  if (allowedSection > 0 && allowedSection <= seats.length) {
    seats[allowedSection - 1].grade = `${allowedSection}구역 1석`;
  }

  let isFocus = false;
  if (isSeatSelected && level == "low") {
    isFocus = true;
  }
  const handleButtonClick = () => {
    if (isSeatSelected) {
      nav("/progress/step3");
    } else {
      alert("좌석을 선택해주세요.");
    }
  };
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
        <Button
          text={"좌석선택완료"}
          type={"select-seat"}
          onClick={handleButtonClick}
        ></Button>
      </ButtonAnimationArea>
    </SeatInfoContainer>
  );
};

export default SeatInfo;
