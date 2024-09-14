import Button from "../button/Button";
import { useAtomValue, useAtom } from "jotai";
import {
  isSeatSelectedAtom,
  isSectionSelectedAtom,
  allowedSeatAtom,
  levelAtom,
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
  SeatInfoCont,
  SeatPrice,
  ButtonAnimationArea
} from "./SeatInfoStyles";
import convertPriceObjectToArray from "../../util/convertPriceObjectToArray";
import getRandomSeat from "../../util/getRandomSeat";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SeatInfo = ({ setShowError }) => {
  const isSeatSelected = useAtomValue(isSeatSelectedAtom);
  const isSectionSelected = useAtomValue(isSectionSelectedAtom);
  const allowedSeat = useAtomValue(allowedSeatAtom);
  const level = useAtomValue(levelAtom);
  const posters = useAtomValue(postersAtom);
  const posterId = useAtomValue(selectedPosterAtom);
  const selectedPoster = posters[posterId];
  const seats = convertPriceObjectToArray(selectedPoster.price);
  const [seatInfo, setSeatInfo] = useAtom(seatInfoAtom);
  const path = useLocation().pathname;
  //seatInfo가 저장되는 시점 , 고칠 필요 있음
  useEffect(() => {
    if (isSeatSelected) {
      const newSeatInfo = getRandomSeat(selectedPoster);
      setSeatInfo({
        ...seatInfo,
        grade: newSeatInfo.grade,
        price: newSeatInfo.price,
        date: newSeatInfo.date,
        seat: `${allowedSeat.row + 1}열 ${allowedSeat.col + 1}`,
        fee: newSeatInfo.fee
      });
    }
  }, [isSeatSelected, allowedSeat, selectedPoster]);

  let isFocus = false;
  if (isSeatSelected && level == "low") {
    isFocus = true;
  }
  const nav = useNavigate();

  const handleButtonClick = () => {
    if (isSeatSelected) {
      if (path.includes("challenge")) {
        nav("../step3/step4");
        return;
      }
      nav("../step3-1");
    }

    if (!isSectionSelected) {
      setShowError(true);
      return;
    }
    if (!isSeatSelected) {
      setShowError(true);
      return;
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
          <SeatGrade>좌석정보</SeatGrade>
          {isSeatSelected && (
            <>
              <SeatInfoCont>{seatInfo.grade}</SeatInfoCont>
              <SeatInfoCont>{seatInfo.seat}</SeatInfoCont>
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
