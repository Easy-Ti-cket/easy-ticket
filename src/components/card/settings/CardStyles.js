import styled from "styled-components";

/*각 카드 +  번호 감싸는 컴포넌트 */
export const CardWrap = styled.div`
  position: relative;
`;

/*카드 번호 + CVC 컴포넌트 */
export const Number = styled.div`
  font-size: ${(props) => props.fontSize};
  height: 10px;
  padding: 5px 5px;
  font-family: "pretendardB";
  text-align: center;
  color: ${(props) => props.color};
  background-color: ${(props) => props.$bgc};
`;
