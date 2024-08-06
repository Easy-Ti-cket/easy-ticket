import Button from "../button/Button";
import { useAtomValue, useAtom } from "jotai";
import {
  isSeatSelectedAtom,
  allowedSeatAtom,
  levelAtom,
  allowedSectionAtom,
  postersAtom,
  selectedPosterAtom,
  seatInfoAtom
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
import convertPriceObjectToArray from "../../util/convertPriceObjectToArray";
import getRandomSeat from "../../util/getRandomSeat";
import { useEffect } from "react";

const SeatInfo = () => {
  const isSeatSelected = useAtomValue(isSeatSelectedAtom);
  const allowedSeat = useAtomValue(allowedSeatAtom);
  const level = useAtomValue(levelAtom);

  const posters = useAtomValue(postersAtom);
  const posterId = useAtomValue(selectedPosterAtom);
  const selectedPoster = posters[posterId];

  const seats = convertPriceObjectToArray(selectedPoster.price);
  const [seatInfo, setSeatInfo] = useAtom(seatInfoAtom);
  useEffect(() => {
    if (isSeatSelected) {
      setSeatInfo(getRandomSeat(selectedPoster));
    }
  }, [isSeatSelected]);

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
              <SeatGrade>{seatInfo.grade}</SeatGrade>
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
