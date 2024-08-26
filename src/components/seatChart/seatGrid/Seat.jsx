import styled from "styled-components";
import { useAtom, useAtomValue } from "jotai";
import {
  levelAtom,
  isSeatSelectedAtom,
  postersAtom,
  selectedPosterAtom
} from "../../../store/atom";
import AnimationArea from "../../Animation";
import convertPriceObjectToArray from "../../../util/convertPriceObjectToArray";
import { useEffect } from "react";
const SeatDiv = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.$isallowed ? "var(--key-color)" : "var(--fill-color)"};
  cursor: ${(props) => props.$isallowed && "pointer"};
`;
const SeatAnimationArea = styled(AnimationArea)`
  padding: 3px;
`;
const Seat = ({ isallowed, section = "default" }) => {
  const level = useAtomValue(levelAtom);
  const [isSeatSelected, setIsSeatSelected] = useAtom(isSeatSelectedAtom);

  const handleClick = () => {
    if (isallowed && !isSeatSelected) {
      setIsSeatSelected(true);
    }
  };

  let focus = false;

  if (level == "low" && isallowed && !isSeatSelected) {
    focus = true;
  }
  return (
    <SeatAnimationArea $focus={focus}>
      <SeatDiv $isallowed={isallowed} onClick={handleClick} $title={section} />
    </SeatAnimationArea>
  );
};

export default Seat;
