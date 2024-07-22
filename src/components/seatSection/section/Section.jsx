import styled from "styled-components";
import AnimationArea from "../../Animation";
import { useAtomValue } from "jotai";
import { allowedSectionAtom, levelAtom } from "../../../store/atom";

const SectionDiv = styled.div`
  border: 1px solid var(--key-color);
  width: 200px;
  height: 150px;
  cursor: ${(props) => props.$cursor && "pointer"};
  margin: ${(props) => !props.$cursor && "3px"};
`;
const Section = ({ num }) => {
  const allowedSection = useAtomValue(allowedSectionAtom);
  const level = useAtomValue(levelAtom);
  let isfocus = false;
  if (num == allowedSection && level == "low") {
    isfocus = true;
  }
  return (
    <AnimationArea $focus={isfocus}>
      <SectionDiv $cursor={isfocus}>{num}구역</SectionDiv>
    </AnimationArea>
  );
};

export default Section;
