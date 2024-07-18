import styled from "styled-components";
import { useAtomValue } from "jotai";
import { difficultyAtom } from "../../../store/atom";
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
  const difficulty = useAtomValue(difficultyAtom);
  let focus = false;
  if (difficulty == "easy" && isallowed) {
    focus = true;
  }
  return (
    <SeatAnimationArea $focus={focus}>
      <SeatDiv $isallowed={isallowed} />
    </SeatAnimationArea>
  );
};

export default Seat;
