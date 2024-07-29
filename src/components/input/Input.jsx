import AnimationArea from "../Animation";
import InputRadio from "./InputRadio";
import InputText from "./InputText";

const Input = ({
  type = "text",
  text = "add text",
  value,
  name,
  onChange = null,
  focus = false
}) => {
  return (
    <AnimationArea $focus={focus}>
      {type === "text" && (
        <InputText name={name} value={value} text={text} onChange={onChange} />
      )}
      {type === "radio" && (
        <InputRadio name={name} value={value} text={text} onChange={onChange} />
      )}
    </AnimationArea>
  );
};
export default Input;
