import styled, { css, keyframes } from "styled-components";
//border 애니메이션 - 깜빡임
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

const InputContainer = styled.div`
  display: inline-flex;
  gap: 20px;
  align-items: center;
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
/*레이블*/
const Label = styled.span`
  font-size: 16px;
`;
/*input 필드*/
const InputField = styled.input`
  width: 180px;
  height: 30px;
`;

/*props별 기본값 설정*/
const Input = ({
  text = "add text",
  type = "text",
  focus = false,
  onChange = null,
}) => {
  return (
    <InputContainer $focus={focus}>
      <Label>{text}</Label>
      <InputField type={type} onChange={onChange} />
    </InputContainer>
  );
};
export default Input;
