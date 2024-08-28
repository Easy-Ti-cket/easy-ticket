import Section from "./section/Section";
import styled from "styled-components";
import { useAtomValue, useAtom, useSetAtom } from "jotai";
import {
  postersAtom,
  selectedPosterAtom,
  seatInfoAtom,
  allowedSeatAtom,
  sectionColorAtom
} from "../../store/atom";
import convertPriceObjectToArray from "../../util/convertPriceObjectToArray";

const Container = styled.div`
  display: flex;
  // grid-template-columns: repeat(4, 1fr);
  // grid-template-rows: 1fr repeat(2, 1fr) 1fr;
  width: 800px;
  height: 400px;
  flex-wrap: wrap;
  justify-content: center;
`;
const SectionColor = styled(Section)`
  background-color: ${(props) => props.color};
`;

const SeatSection0 = () => {
  const Posters = useAtomValue(postersAtom);
  const posterId = useAtomValue(selectedPosterAtom);
  const poster = Posters[posterId];

  const colors = useAtomValue(sectionColorAtom);
  console.log(colors);
  const [seatInfo, setSeatInfo] = useAtom(seatInfoAtom);
  const [allowedSeat, setAllowedSeat] = useAtom(allowedSeatAtom);

  const priceArr = convertPriceObjectToArray(poster.price);
  const date = poster.date[0];
  const lengthOfprice = priceArr.length;

  const storeSeatInfo = (sectionIndex) => {
    const sectionPrice = priceArr[Math.floor(sectionIndex / 2) % lengthOfprice];
    setSeatInfo({
      ...seatInfo,
      grade: sectionPrice.grade,
      price: sectionPrice.price,
      date: date,
      color: colorMapping[sectionIndex]
    });
    setAllowedSeat({ ...allowedSeat, gridIndex: 1 });
  };

  const shapeMapping = {
    1: "TrapezoidLeft",
    2: "TrapezoidRight",
    4: "QuarterLeft",
    7: "QuarterRight"
  };
  const colorMapping = {
    0: colors[1],
    1: colors[4],
    2: colors[4],
    3: colors[1],
    4: colors[3],
    5: colors[4],
    6: colors[4],
    7: colors[3],
    8: colors[0],
    9: colors[0]
  };
  return (
    <Container>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((sectionIndex) => (
        <SectionColor
          num={sectionIndex + 1}
          key={sectionIndex}
          size="small"
          shape={shapeMapping[sectionIndex]}
          color={colorMapping[sectionIndex]}
          storeSeatInfo={() => storeSeatInfo(sectionIndex)}
        ></SectionColor>
      ))}
    </Container>
  );
};

export default SeatSection0;
