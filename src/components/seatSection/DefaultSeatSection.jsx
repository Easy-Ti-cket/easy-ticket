import Section from "./section/Section";
import styled from "styled-components";

const Sections = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-content: center;
`;
const DefaultSeatSection = () => {
  return (
    <Sections>
      {[1, 2, 3, 4].map((num) => (
        <Section key={num} num={num}></Section>
      ))}
    </Sections>
  );
};

export default DefaultSeatSection;
