import styled from "styled-components";
import SeatGrid from "./seatGrid/SeatGrid";
import { useAtomValue } from "jotai";
import { postersAtom, selectedPosterAtom } from "../../store/atom";
import convertPriceObjectToArray from "../../util/convertPriceObjectToArray";

const Stage = styled.div`
  display: flex;
  width: 400px;
  min-height: 70px;
  border: 2px solid var(--fill-color);
  border-radius: 4px;
  margin: 5px;
  align-items: center;
  justify-content: center;
`;

const SeatGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const DefalutSeatChart = () => {
  return (
    <>
      <Stage>스테이지</Stage>
      <SeatGridContainer>
        {/* SeatGrid 4개 배치 */}
        {[0, 1, 2, 3].map((gridIndex) => (
          <SeatGrid key={gridIndex} gridIndex={gridIndex} />
        ))}
      </SeatGridContainer>
    </>
  );
};

export default DefalutSeatChart;
