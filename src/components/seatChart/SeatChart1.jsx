import styled from "styled-components";
import SeatGrid from "./seatGrid/SeatGrid";
import { useAtomValue, useSetAtom } from "jotai";
import { allowedSectionAtom, allowedSeatAtom } from "../../store/atom";
import getRandomInt from "../../util/getRandomInt";
import { useEffect } from "react";
import useFakeAllowedSeat from "../../hooks/useFakeAllowedSeat";
const SectionName = styled.div`
  font-family: "pretendardB";
  margin: 20px;
`;
const SeatChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SeatChart = () => {
  const allowedSection = useAtomValue(allowedSectionAtom);

  const setAllowedSeat = useSetAtom(allowedSeatAtom);

  useEffect(() => {
    setAllowedSeat({
      gridIndex: 0,
      row: getRandomInt(0, 9),
      col: getRandomInt(0, 9)
    });
  }, []);

  useFakeAllowedSeat(0, 9, 9);

  return (
    <SeatChartContainer>
      <SectionName>{allowedSection}구역</SectionName>
      <SeatGrid rows={10} columns={10} gridIndex={0} />
    </SeatChartContainer>
  );
};

export default SeatChart;
