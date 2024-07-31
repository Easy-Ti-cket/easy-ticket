import SeatSection from "../../../components/seatSection/SeatSection";
import SeatInfo from "../../../components/seatInfo/SeatInfo";
import SeatChart from "../../../components/seatChart/SeatChart";
import styled from "styled-components";
import { useAtomValue } from "jotai";
import { isSectionSelectedAtom } from "../../../store/atom";
const SelectSeatcontainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const SelectSeat = () => {
  const isSectionSelected = useAtomValue(isSectionSelectedAtom);
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
