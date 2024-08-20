import styled from "styled-components";
import SeatGrid from "./seatGrid/SeatGrid";

//SeatChart 전체 컨테이너
const SeatChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  //임시로 크기 지정, contentsBox배치 시 달라질 수 있음
  width: 500px;
  height: 500px;
`;
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

const SeatChart = () => {
  return (
    <SeatChartContainer>
      <Stage>무대</Stage>
      <SeatGridContainer>
        {/* SeatGrid 4개 배치 */}
        {[0, 1, 2, 3].map((gridIndex) => (
          <SeatGrid key={gridIndex} gridIndex={gridIndex} />
        ))}
      </SeatGridContainer>
    </SeatChartContainer>
  );
};

export default SeatChart;
