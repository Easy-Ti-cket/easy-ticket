import AnimationArea from "../Animation";
import InputRadio from "./InputRadio";
import InputText from "./InputText";

const Input = ({
  type = "text",
  text = "add text",
  value,
  name,
  onChange = null,
  $focus = false,
  isNumber = false,
  $hasError = false
}) => {
  return (
    <AnimationArea $focus={$focus}>
      {type !== "radio" && (
        <InputText
          name={name}
          type={isNumber && "number"}
          $hasError={$hasError}
          value={value}
          text={text}
          onChange={onChange}
        />
      )}
      {type === "radio" && (
        <InputRadio name={name} value={value} text={text} onChange={onChange} />
      )}
    </AnimationArea>
  );
};
export default Input;
