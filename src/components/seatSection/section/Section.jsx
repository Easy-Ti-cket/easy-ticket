import styled from "styled-components";
import AnimationArea from "../../Animation";
import { useAtomValue } from "jotai";
import { allowedSectionAtom } from "../../../store/atom";

const SectionDiv = styled.div`
  border: 1px solid var(--key-color);
  width: 200px;
  height: 150px;
  cursor: ${(props) => props.$cursor && "pointer"};
`;
const Section = ({ num }) => {
  const allowedSection = useAtomValue(allowedSectionAtom);
  let isfocus = false;
  if (num == allowedSection) {
    isfocus = true;
  }
  return (
    <AnimationArea $focus={isfocus}>
      <SectionDiv $cursor={isfocus}>{num}구역</SectionDiv>
    </AnimationArea>
  );
};

export default Section;
