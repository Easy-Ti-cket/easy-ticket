import SeatSection from "../../../components/seatSection/SeatSection";
import SeatInfo from "../../../components/seatInfo/SeatInfo";
import SeatChart from "../../../components/seatChart/SeatChart";
import styled from "styled-components";
import { useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { isSectionSelectedAtom, progressAtom } from "../../../store/atom";
const SelectSeatcontainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 80px;
`;
const SelectSeat = () => {
  const isSectionSelected = useAtomValue(isSectionSelectedAtom);
  const setProgress = useSetAtom(progressAtom);
  useEffect(() => setProgress(2));
  return (
    <SelectSeatcontainer>
      {isSectionSelected ? (
        <SeatChart></SeatChart>
      ) : (
        <SeatSection></SeatSection>
      )}
      <SeatInfo></SeatInfo>
    </SelectSeatcontainer>
  );
};

export default SelectSeat;
