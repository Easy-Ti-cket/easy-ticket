import SeatSection from "../../../components/seatSection/SeatSection";
import SeatInfo from "../../../components/seatInfo/SeatInfo";
import SeatChart from "../../../components/seatChart/SeatChart";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useAtomValue, useSetAtom, useAtom } from "jotai";
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
  gap: 80px;
`;
const SelectSeat = () => {
  const setStepTextNumber = useSetAtom(stepTextNumberAtom);
  const setHelpTextNumber = useSetAtom(helpTextNumberAtom);
  const stepTextNumber = useAtomValue(stepTextNumberAtom);
  const helpTextNumber = useAtomValue(helpTextNumberAtom);
  const [isSectionSelected, setIsSectionSelected] = useAtom(
    isSectionSelectedAtom
  );
  const [isSeatSelected, setIsSeatSelected] = useAtom(isSeatSelectedAtom);
  const setProgress = useSetAtom(progressAtom);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setProgress(2);
    setStepTextNumber(0);
    setHelpTextNumber(0);
    setIsSectionSelected(false);
    setIsSeatSelected(false);
    setInitialized(true); // 초기화 후 상태 변경
  }, []);

  useEffect(() => {
    if (initialized) {
      // 초기화된 이후에만 실행
      if (isSectionSelected && !isSeatSelected) {
        setStepTextNumber((prev) => prev + 1);
        setHelpTextNumber((prev) => prev + 1);
      } else if (isSeatSelected) {
        setStepTextNumber((prev) => prev + 1);
      }
    }
  }, [isSectionSelected, isSeatSelected, initialized]);

  const [showError, setShowError] = useState(false);

  return (
    <SelectSeatcontainer>
      {isSectionSelected ? (
        <SeatChart showError={showError} />
      ) : (
        <SeatSection showError={showError} />
      )}
      <SeatInfo setShowError={setShowError} />
    </SelectSeatcontainer>
  );
};

export default SelectSeat;
