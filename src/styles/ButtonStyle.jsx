// 버튼 모듈 css 컬러 변수 전역 적용
import { createGlobalStyle } from "styled-components";

const ButtonStyle = createGlobalStyle`
  :root {
    --key-color: ${(props) => props.theme.keyColor};
    --hover-color: ${(props) => props.theme.hoverColor};
    --sub-color: ${(props) => props.theme.subColor};
  }
`;

export default ButtonStyle;
