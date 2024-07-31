import SeatSection from "../../../components/seatSection/SeatSection";
import SeatInfo from "../../../components/seatInfo/SeatInfo";
import styled from "styled-components";
const SelectSeatcontainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const SelectSeat = () => {
  return (
    <SelectSeatcontainer>
      <SeatSection></SeatSection>
      <SeatInfo></SeatInfo>
    </SelectSeatcontainer>
  );
};

export default SelectSeat;
