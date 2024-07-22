import { InputContainer, InputField, Label } from "./InputStyle";

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
