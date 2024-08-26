import Section from "./section/Section";
import styled from "styled-components";
import SeatSection1 from "./SeatSection1";
import DefaultSeatSection from "./DefaultSeatSection";

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

const getSectionNum = ({ num }) => {
  switch (num) {
    case 1:
      return SeatSection1;
    default:
      return DefaultSeatSection;
  }
};
const SeatSection = (num = 0) => {
  const SelectedSection = getSectionNum(num);
  console.log(SelectedSection);
  return (
    <SeatSectionContainer>
      <Stage>스테이지</Stage>
      <SelectedSection></SelectedSection>
    </SeatSectionContainer>
  );
};

export default SeatSection;
