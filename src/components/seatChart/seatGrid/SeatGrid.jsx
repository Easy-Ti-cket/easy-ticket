import styled from "styled-components";
import Seat from "./Seat";

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: ${(props) => `repeat(${props.rows}, 25px)`};
  grid-template-columns: ${(props) => `repeat(${props.columns}, 25px)`};
  place-items: center;
`;

// SeatGrid 컴포넌트, 기본 5x5 격자로 구성
const SeatGrid = ({ rows = 5, columns = 5 }) => {
  const renderSeats = () => {
    let seats = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        seats.push(<Seat key={`${row}-${col}`} />);
      }
    }
    return seats;
  };

  return (
    <GridContainer rows={rows} columns={columns}>
      {renderSeats()}
    </GridContainer>
  );
};

export default SeatGrid;
