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
  justify-content: center;
  flex-wrap: wrap;
  width: 600px;
  height: 400px;
`;
const SectionColor = styled(Section)`
  background-color: ${(props) => props.color};
`;

const SeatSection1 = () => {
  const Posters = useAtomValue(postersAtom);
  const posterId = useAtomValue(selectedPosterAtom);
  const poster = Posters[posterId];

  const colors = useAtomValue(sectionColorAtom);

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
    0: "TrapezoidRight",
    2: "TrapezoidLeft"
  };
  const colorMapping = {
    0: colors[0],
    1: colors[1],
    2: colors[0],
    3: colors[2],
    4: colors[1],
    5: colors[2],
    6: colors[3],
    7: colors[3]
  };
  return (
    <Container>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((sectionIndex) => (
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

export default SeatSection1;
