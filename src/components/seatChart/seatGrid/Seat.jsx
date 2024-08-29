import styled from "styled-components";
import { useAtom, useAtomValue } from "jotai";
import {
  levelAtom,
  isSeatSelectedAtom,
  postersAtom,
  selectedPosterAtom,
  allowedSeatAtom,
  seatInfoAtom,
  fakeAllowedSeatAtom
} from "../../../store/atom";
import AnimationArea from "../../Animation";
import convertPriceObjectToArray from "../../../util/convertPriceObjectToArray";
import { useEffect, useState } from "react";
const SeatDiv = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.$isallowed || props.$fakeallowed
      ? props.$color
        ? props.$color
        : "var(--key-color)"
      : "var(--fill-color)"};
  cursor: ${(props) => (props.$isallowed || props.$fakeallowed) && "pointer"};
`;
const SeatAnimationArea = styled(AnimationArea)`
  padding: 3px;
`;
const Seat = ({ isallowed, isfakeallowed, deleteFakeAllowed }) => {
  const level = useAtomValue(levelAtom);
  const [isSeatSelected, setIsSeatSelected] = useAtom(isSeatSelectedAtom);
  const [fakeAllowedSeat, setFakeAllowedSeat] = useAtom(fakeAllowedSeatAtom);
  const allowedSeat = useAtomValue(allowedSeatAtom);
  const seatInfo = useAtomValue(seatInfoAtom);
  // const isFakeAllowed = useState(false);
  const color = seatInfo.color;

  const handleClick = () => {
    if (isallowed && !isSeatSelected) {
      setIsSeatSelected(true);
    }
    if (isfakeallowed) {
      alert("이미 선택된 좌석입니다.");
      deleteFakeAllowed();
    }
  };
  let focus = false;

  if (level == "low" && isallowed && !isSeatSelected) {
    focus = true;
  }
  return (
    <SeatAnimationArea $focus={focus}>
      <SeatDiv
        $isallowed={isallowed}
        $color={color}
        onClick={handleClick}
        $fakeallowed={isfakeallowed}
      />
    </SeatAnimationArea>
  );
};

export default Seat;
