import styled from "styled-components";
import Seat from "./Seat";
import { useAtomValue, useAtom } from "jotai";
import {
  allowedSeatAtom,
  fakeAllowedSeatAtom,
  levelAtom
} from "../../../store/atom.js";
import { useState } from "react";

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: ${(props) => `repeat(${props.$rows}, 25px)`};
  grid-template-columns: ${(props) => `repeat(${props.$columns}, 25px)`};
  place-items: center;
  padding: 0;
`;

const SeatGrid = ({ rows = 5, columns = 5, gridIndex }) => {
  const allowedSeat = useAtomValue(allowedSeatAtom);
  const [fakeAllowedSeat, setFakeAllowedSeat] = useAtom(fakeAllowedSeatAtom);
  const deleteFakeAllowed = (row, col) => {
    setFakeAllowedSeat(
      fakeAllowedSeat.filter(
        (seat) =>
          seat.gridIndex === gridIndex && seat.row !== row && seat.col !== col
      )
    );
  };
  const renderSeats = () => {
    let seats = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        let isallowed =
          allowedSeat.gridIndex === gridIndex &&
          allowedSeat.row === row &&
          allowedSeat.col === col;
        let isFakeAllowed = fakeAllowedSeat.some(
          (seat) =>
            seat.gridIndex === gridIndex && seat.row === row && seat.col === col
        );

        if (isallowed) {
          seats.push(<Seat key={`${row}-${col}`} isallowed={true} />);
          continue;
        }
        if (isFakeAllowed) {
          seats.push(
            <Seat
              key={`${row}-${col}`}
              isfakeallowed={true}
              deleteFakeAllowed={() => deleteFakeAllowed(row, col)}
            />
          );
          continue;
        }
        seats.push(<Seat key={`${row}-${col}`} isallowed={false} />);
      }
    }
    return seats;
  };

  return (
    <GridContainer $rows={rows} $columns={columns}>
      {renderSeats()}
    </GridContainer>
  );
};

export default SeatGrid;
