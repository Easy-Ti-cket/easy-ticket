import Section from "./section/Section";
import styled from "styled-components";
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const SeatSection1 = () => {
  return (
    <Container>
      <Section size="small"></Section>
      <Section size="small"></Section>
      <Section size="small"></Section>
      <Section size="small"></Section>
      <Section size="small" shape="quarterLeft"></Section>
      <Section size="small"></Section>
      <Section size="small"></Section>
      <Section size="small" shape="quarterRight"></Section>
    </Container>
  );
};

export default SeatSection1;
