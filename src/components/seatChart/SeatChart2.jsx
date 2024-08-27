import styled from "styled-components";
import SeatGrid from "./seatGrid/SeatGrid";
import { useAtomValue, useSetAtom } from "jotai";
import { allowedSectionAtom, allowedSeatAtom } from "../../store/atom";
import getRandomInt from "../../util/getRandomInt";
import { useEffect } from "react";

const SectionName = styled.div`
  font-family: "pretendardB";
  margin: 20px;
`;

const SeatChart = () => {
  const allowedSection = useAtomValue(allowedSectionAtom);

  const setAllowedSeat = useSetAtom(allowedSeatAtom);

  useEffect(() => {
    setAllowedSeat({
      gridIndex: 1,
      row: getRandomInt(0, 9),
      col: getRandomInt(0, 9)
    });
  }, []);

  return (
    <>
      <SectionName>{allowedSection}구역</SectionName>
      <SeatGrid rows={10} columns={10} gridIndex={1} />
    </>
  );
};

export default SeatChart;
