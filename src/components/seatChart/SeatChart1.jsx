import styled from "styled-components";
import SeatGrid from "./seatGrid/SeatGrid";
import { useAtomValue, useSetAtom } from "jotai";
import { allowedSectionAtom, allowedSeatAtom } from "../../store/atom";
import getRandomInt from "../../util/getRandomInt";
import { useEffect } from "react";
import useFakeAllowedSeat from "../../hooks/useFakeAllowedSeat";
import ErrorText from "../errorText/ErrorText";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const SectionName = styled.div`
  font-family: "pretendardB";
  margin: 20px;
`;
const SeatChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  border: ${(props) =>
    props.$showError ? "2px dashed var(--point-color)" : "none"};
  border-radius: 8px;
`;

const SeatChart = ({ showError = false }) => {
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
    <Wrap>
      {showError && <ErrorText text="좌석을 선택해 주세요" />}
      <SeatChartContainer $showError={showError}>
        <SectionName>{allowedSection}구역</SectionName>
        <SeatGrid rows={10} columns={10} gridIndex={0} />
      </SeatChartContainer>
    </Wrap>
  );
};

export default SeatChart;
