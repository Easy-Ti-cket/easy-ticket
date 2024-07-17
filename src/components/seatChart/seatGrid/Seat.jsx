import styled from "styled-components";

const SeatDiv = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid var(--key-color);
  cursor: pointer;
`;

const Seat = () => {
  return <SeatDiv />;
};

export default Seat;
