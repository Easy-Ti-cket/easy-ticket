import styled from "styled-components";
import { useAtom, useAtomValue } from "jotai";
import { levelAtom, isSeatSelectedAtom } from "../../../store/atom";
import AnimationArea from "../../Animation";
const SeatDiv = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid var(--key-color);
  background-color: ${(props) =>
    props.$isallowed ? "var(--key-color)" : "null"};
  cursor: ${(props) => (props.$isallowed ? "pointer" : "null")};
`;
const SeatAnimationArea = styled(AnimationArea)`
  padding: 5px;
`;
const Seat = ({ isallowed }) => {
  const level = useAtomValue(levelAtom);
  const [isSeatSelected, setIsSeatSelected] = useAtom(isSeatSelectedAtom);
  const handleClick = () => {
    if (isallowed && isSeatSelected == false) {
      setIsSeatSelected(true);
    }
  };
  let focus = false;
  if (level == "easy" && isallowed && isSeatSelected == false) {
    focus = true;
  }
  return (
    <SeatAnimationArea $focus={focus}>
      <SeatDiv $isallowed={isallowed} onClick={handleClick} />
    </SeatAnimationArea>
  );
};

export default Seat;
