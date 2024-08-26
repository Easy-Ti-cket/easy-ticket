import styled from "styled-components";
import { useAtom, useAtomValue } from "jotai";
import { levelAtom, isSeatSelectedAtom } from "../../../store/atom";
import AnimationArea from "../../Animation";
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
const Seat = ({ isallowed }) => {
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
      <SeatDiv $isallowed={isallowed} onClick={handleClick} />
    </SeatAnimationArea>
  );
};

export default Seat;
