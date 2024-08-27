import Section from "./section/Section";
import styled from "styled-components";
import SeatSection1 from "./SeatSection1";
import SeatSection2 from "./SeatSection2";
import SeatSection3 from "./SeatSection3";
import DefaultSeatSection from "./DefaultSeatSection";
import { useAtomValue, useSetAtom } from "jotai";
import {
  postersAtom,
  selectedPosterAtom,
  allowedSeatAtom
} from "../../store/atom";
import convertPriceObjectToArray from "../../util/convertPriceObjectToArray";

const SeatSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  width: 500px;
  height: 500px;
`;
const Stage = styled.div`
  width: 400px;
  min-height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border: 2px solid var(--fill-color);
  border-radius: 4px;
`;

const getSectionNum = (num) => {
  switch (num) {
    case 1:
      return SeatSection1;
    case 2:
      return SeatSection2;
    case 3:
      return SeatSection3;
    default:
      return DefaultSeatSection;
  }
};

// 구역별 color 배열, 빨강, 파랑, 노랑, 초록, 보라
const colors = ["#ff0000", "#0000ff", "#ffff00", "#00ff00", "#800080"];
//구역 개수 배열
const numOfSections = [8, 8, 8, 8];
const SeatSection = ({ num = 0 }) => {
  const Posters = useAtomValue(postersAtom);
  const posterId = useAtomValue(selectedPosterAtom);
  const poster = Posters[posterId];

  const price = convertPriceObjectToArray(poster.price);

  const SelectedSection = getSectionNum(num);

  return (
    <SeatSectionContainer>
      <Stage>스테이지</Stage>
      <SelectedSection></SelectedSection>
    </SeatSectionContainer>
  );
};

export default SeatSection;
