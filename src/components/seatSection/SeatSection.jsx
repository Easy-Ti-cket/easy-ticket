import Section from "./section/Section";
import styled from "styled-components";

const SeatSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  width: 500px;
`;
const Stage = styled.div`
  width: 400px;
  min-height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border: 1px solid var(--key-color);
`;
const Sections = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const SeatSection = () => {
  return (
    <SeatSectionContainer>
      <Stage>스테이지</Stage>
      <Sections>
        {[1, 2, 3, 4].map((num) => (
          <Section num={num}></Section>
        ))}
      </Sections>
    </SeatSectionContainer>
  );
};

export default SeatSection;
