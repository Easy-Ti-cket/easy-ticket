import styled from "styled-components";
import SeatSection0 from "./SeatSection0";
import SeatSection1 from "./SeatSection1";
import SeatSection2 from "./SeatSection2";
import SeatSection3 from "./SeatSection3";
import DefaultSeatSection from "./DefaultSeatSection";
import { useAtomValue } from "jotai";
import { postersAtom, selectedPosterAtom } from "../../store/atom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ErrorText from "../errorText/ErrorText";

//에러텍스트 + 컨텐츠
const Wrap = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  border: ${(props) =>
    props.$showError ? "2px dashed var(--point-color)" : "none"};
  border-radius: 8px;
`;
const SeatSectionContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  padding: 8px;
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
    case 0:
      return SeatSection0;
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

//구역 개수 배열
const SeatSection = ({ showError }) => {
  const posterId = useAtomValue(selectedPosterAtom);
  const [seatSectionType, setSeatSectionType] = useState("default");

  const path = useLocation().pathname;

  useEffect(() => {
    if (path.includes("challenge")) {
      setSeatSectionType(posterId);
    }
  }, []);
  const SelectedSection = getSectionNum(seatSectionType);

  return (
    <SeatSectionContainer>
      <Stage>스테이지</Stage>
      {showError && <ErrorText text="구역을 선택해 주세요" />}
      <Wrap $showError={showError}>
        <SelectedSection />
      </Wrap>
    </SeatSectionContainer>
  );
};

export default SeatSection;
