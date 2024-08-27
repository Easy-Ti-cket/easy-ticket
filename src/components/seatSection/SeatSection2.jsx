import Section from "./section/Section";
import styled from "styled-components";
import { useAtomValue, useAtom, useSetAtom } from "jotai";
import {
  postersAtom,
  selectedPosterAtom,
  seatInfoAtom,
  allowedSeatAtom
} from "../../store/atom";
import convertPriceObjectToArray from "../../util/convertPriceObjectToArray";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;
const SectionColor = styled(Section)`
  background-color: ${(props) => props.color};
`;
// 구역별 color 배열, 빨강, 파랑, 노랑, 초록, 보라
const colors = ["#ff0000", "#0000ff", "#ffff00", "#00ff00", "#800080"];
//구역 개수 배열
const lengthOfSections = [8, 8, 8, 8];

const SeatSection1 = () => {
  const Posters = useAtomValue(postersAtom);
  const posterId = useAtomValue(selectedPosterAtom);
  const poster = Posters[posterId];
  const [seatInfo, setSeatInfo] = useAtom(seatInfoAtom);
  const [allowedSeat, setAllowedSeat] = useAtom(allowedSeatAtom);

  const priceArr = convertPriceObjectToArray(poster.price);
  const date = poster.date[0];
  const lengthOfprice = priceArr.length;
  const cycle = Math.ceil(6 / lengthOfprice);

  const storeSeatInfo = (sectionIndex) => {
    const sectionPrice = priceArr[Math.floor(sectionIndex / 2) % lengthOfprice];
    setSeatInfo({
      ...seatInfo,
      grade: sectionPrice.grade,
      price: sectionPrice.price,
      date: date,
      color: colors[Math.floor(sectionIndex / 2) % lengthOfprice]
    });
    setAllowedSeat({ ...allowedSeat, gridIndex: 1 });
  };
  console.log(colors);
  return (
    <Container>
      {[0, 1, 2, 3, 4, 5].map((sectionIndex) => (
        <SectionColor
          num={sectionIndex + 1}
          key={sectionIndex}
          size={"small"}
          shape={
            sectionIndex == 0
              ? "TrapezoidLeft"
              : sectionIndex == 1
                ? "Rectangle"
                : sectionIndex == 2
                  ? "TrapezoidRight"
                  : ""
          }
          color={colors[Math.floor(sectionIndex / cycle) % lengthOfprice]}
          storeSeatInfo={() => storeSeatInfo(sectionIndex)}
        ></SectionColor>
      ))}
    </Container>
  );
};

export default SeatSection1;
