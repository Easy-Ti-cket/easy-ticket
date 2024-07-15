import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  max-width: 100px;
`;
/*레이블*/
const Label = styled.span`
  font-size: 16px;
  min-width: 100px;
`;

/*props별 기본값 설정*/
const InputRadio = ({ text = "add text", onChange = null }) => {
  return (
    <InputContainer>
      <input id="radioInput" type="radio" onChange={onChange} />
      <Label htmlFor="radioInput">{text}</Label>
    </InputContainer>
  );
};
export default InputRadio;
