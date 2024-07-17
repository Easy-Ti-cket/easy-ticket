import AnimationArea from "../Animation";
import InputRadio from "./InputRadio";
import InputText from "./InputText";

const Input = ({
  type = "text",
  text = "add text",
  onChange = null,
  focus = false
}) => {
  return (
    <AnimationArea $focus={focus}>
      {type === "text" && <InputText text={text} onChange={onChange} />}
      {type === "radio" && <InputRadio text={text} onChange={onChange} />}
    </AnimationArea>
  );
};
export default Input;
