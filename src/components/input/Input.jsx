import styled, { css, keyframes } from "styled-components";
import InputRadio from "./InputRadio";
import InputText from "./InputText";

/*border 애니메이션 - 깜빡임*/
const blink = keyframes`
    0%{
        border-color: transparent;
    }
    50%{
        border-color: var(--point-color);
    }
    100%{
        border-color: transparent;
    }`;

const AnimationArea = styled.div`
  display: inline-block;
  padding: 10px;
  /*애니메이션을 show 할 것인지 안 할 것인지*/
  border: ${(props) =>
    props.$focus ? "3px dashed var(--point-color)" : "none"};
  ${(props) =>
    props.$focus &&
    css`
      animation: ${blink} 1.5s infinite;
    `}
  border-radius: 8px;
`;

const Input = ({
  type = "text",
  text = "add text",
  onChange = null,
  focus = false,
}) => {
  return (
    <AnimationArea $focus={focus}>
      {type === "text" && <InputText text={text} onChange={onChange} />}
      {type === "radio" && <InputRadio text={text} onChange={onChange} />}
    </AnimationArea>
  );
};
export default Input;
