import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
/*레이블*/
const Label = styled.span`
  font-size: 16px;
  min-width: 100px;
  width: auto;
  text-align: left;
`;
/*input 필드*/
const InputField = styled.input`
  width: 180px;
  height: 30px;
`;

/*props별 기본값 설정*/
const InputText = ({ text = "add text", onChange }) => {
  return (
    <InputContainer>
      <Label htmlFor="textInput">{text}</Label>
      <InputField id="textInput" onChange={onChange} />
    </InputContainer>
  );
};
export default InputText;
