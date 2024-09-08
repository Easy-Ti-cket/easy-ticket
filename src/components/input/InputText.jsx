import { InputContainer, InputField, Label } from "./InputStyle";

/*props별 기본값 설정*/
const InputText = ({
  name,
  value,
  $hasError,
  type,
  text = "add text",
  onChange
}) => {
  return (
    <InputContainer>
      <Label htmlFor="textInput">{text}</Label>
      <InputField
        name={name}
        value={value}
        id="textInput"
        onChange={onChange}
        type={type}
        $hasError={$hasError}
      />
    </InputContainer>
  );
};
export default InputText;
