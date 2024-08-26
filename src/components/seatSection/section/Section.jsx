import styled from "styled-components";
import AnimationArea from "../../Animation";
import {
  SectionDiv,
  quarterLeftSectionDiv,
  quarterRightSectionDiv,
  trapezoidSectionDiv,
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
    case "quarterLeft":
      return quarterLeftSectionDiv;
    case "quarterRight":
      return quarterRightSectionDiv;
    case "trapezoid":
      return trapezoidSectionDiv;
    case "rounded":
      return RoundedSectionDiv;
    default:
      return SectionDiv;
  }
};
const Section = ({ num, shape = "default", size = "midium" }) => {
  const allowedSection = useAtomValue(allowedSectionAtom);
  const setIsSectionSelected = useSetAtom(isSectionSelectedAtom);
  const path = useLocation().pathname;

  const level = useAtomValue(levelAtom);
  let isfocus = false;
  if (num == allowedSection && level == "low") {
    isfocus = true;
  }

  const handleSectionClick = () => {
    if (num == allowedSection || path.includes("challenge")) {
      setIsSectionSelected(true);
    } else {
      alert("알맞은 구역을 선택해주세요.");
    }
  };
  // 선택된 모양의 스타일 컴포넌트를 가져옵니다
  const StyledSectionDiv = getSectionStyle(shape);

  return (
    <AnimationArea $focus={isfocus}>
      <StyledSectionDiv
        $cursor={isfocus}
        onClick={handleSectionClick}
        $size={size}
      >
        {num}구역
      </StyledSectionDiv>
    </AnimationArea>
  );
};

export default Section;
