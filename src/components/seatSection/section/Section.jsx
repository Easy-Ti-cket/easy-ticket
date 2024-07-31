import styled from "styled-components";
import AnimationArea from "../../Animation";
import { useAtomValue, useSetAtom } from "jotai";
import {
  allowedSectionAtom,
  levelAtom,
  isSectionSelectedAtom
} from "../../../store/atom";

const SectionDiv = styled.div`
  border: 1px solid var(--key-color);
  border-radius: 4px;
  width: 200px;
  height: 150px;
  cursor: ${(props) => props.$cursor && "pointer"};
  margin: ${(props) => !props.$cursor && "3px"};
`;
const Section = ({ num }) => {
  const allowedSection = useAtomValue(allowedSectionAtom);
  const setIsSectionSelected = useSetAtom(isSectionSelectedAtom);
  const level = useAtomValue(levelAtom);
  let isfocus = false;
  if (num == allowedSection && level == "low") {
    isfocus = true;
  }
  const handleSectionClick = () => {
    if (num == allowedSection) {
      setIsSectionSelected(true);
    }
  };
  return (
    <AnimationArea $focus={isfocus}>
      <SectionDiv $cursor={isfocus} onClick={handleSectionClick}>
        {num}구역
      </SectionDiv>
    </AnimationArea>
  );
};

export default Section;
