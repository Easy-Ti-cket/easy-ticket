import SeatSection from "../../../components/seatSection/SeatSection";
import SeatInfo from "../../../components/seatInfo/SeatInfo";
import SeatChart from "../../../components/seatChart/SeatChart";
import styled from "styled-components";
import { useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import {
  isSectionSelectedAtom,
  isSeatSelectedAtom,
  progressAtom,
  stepTextNumberAtom,
  helpTextNumberAtom
} from "../../../store/atom";
const SelectSeatcontainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const SelectSeat = () => {
  const setStepTextNumber = useSetAtom(stepTextNumberAtom);
  const setHelpTextNumber = useSetAtom(helpTextNumberAtom);
  const isSectionSelected = useAtomValue(isSectionSelectedAtom);
  const isSeatSelected = useAtomValue(isSeatSelectedAtom);
  const setProgress = useSetAtom(progressAtom);

  useEffect(() => {
    setProgress(2);
    setStepTextNumber(0);
    setHelpTextNumber(0);
  }, []);

  useEffect(() => {
    if (isSectionSelected || isSeatSelected) {
      setStepTextNumber((prev) => prev + 1);
      setHelpTextNumber((prev) => prev + 1);
    }
  }, [isSectionSelected, isSeatSelected]);

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
