import styled from "styled-components";
import AnimationArea from "../../Animation";
import {
  SectionDiv,
  QuarterLeftSectionDiv,
  QuarterRightSectionDiv,
  TrapezoidLeftSectionDiv,
  TrapezoidRightSectionDiv,
  RectangleSectionDiv,
  RoundedSectionDiv
} from "./SectionDiv";
import { useAtomValue, useSetAtom } from "jotai";
import {
  allowedSectionAtom,
  levelAtom,
  isSectionSelectedAtom
} from "../../../store/atom";
import { useLocation } from "react-router-dom";

// Section 스타일을 선택하는 함수
const getSectionStyle = (shape) => {
  switch (shape) {
    case "QuarterLeft":
      return QuarterLeftSectionDiv;
    case "QuarterRight":
      return QuarterRightSectionDiv;
    case "TrapezoidLeft":
      return TrapezoidLeftSectionDiv;
    case "TrapezoidRight":
      return TrapezoidRightSectionDiv;
    case "Rectangle":
      return RectangleSectionDiv;
    default:
      return SectionDiv;
  }
};
const Section = ({ num, shape, size, color, storeSeatInfo }) => {
  const allowedSection = useAtomValue(allowedSectionAtom);
  const setIsSectionSelected = useSetAtom(isSectionSelectedAtom);
  const setAllowedSection = useSetAtom(allowedSectionAtom);
  const path = useLocation().pathname;

  const level = useAtomValue(levelAtom);
  let isfocus = false;
  if (num == allowedSection && level == "low") {
    isfocus = true;
  }

  const handleSectionClick = () => {
    if (num == allowedSection || path.includes("challenge")) {
      setIsSectionSelected(true);
      if (path.includes("challenge")) {
        storeSeatInfo();
        setAllowedSection(num);
      }
    } else {
      alert("알맞은 구역을 선택해주세요.");
    }
  };
  // 선택된 모양의 스타일 컴포넌트를 가져옴
  const StyledSectionDiv = getSectionStyle(shape);

  return (
    <AnimationArea $focus={isfocus}>
      <StyledSectionDiv
        $cursor={isfocus}
        onClick={handleSectionClick}
        $size={size}
        color={color}
      >
        {num}구역
      </StyledSectionDiv>
    </AnimationArea>
  );
};

export default Section;
