import styled from "styled-components";
export const SectionDiv = styled.div`
  border: 2px solid var(--fill-color);
  border-radius: 4px;

  // props로 받은 size에 따라 다른 크기 적용
  width: ${(props) => (props.$size === "small" ? "150px" : "200px")};
  height: ${(props) => (props.$size === "small" ? "100px" : "150px")};

  cursor: pointer;
  margin: ${(props) => !props.$cursor && "3px"};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 2px solid var(--text-color);
  }
`;

// 다양한 모양의 섹션 스타일 컴포넌트
export const quarterLeftSectionDiv = styled(SectionDiv)`
  border-radius: 0 0 0 100px;
`;
export const quarterRightSectionDiv = styled(SectionDiv)`
  border-radius: 0 0 100px 0;
`;
export const trapezoidSectionDiv = styled(SectionDiv)`
  border-radius: 10px;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
`;

export const RoundedSectionDiv = styled(SectionDiv)`
  border-radius: 20px;
`;
