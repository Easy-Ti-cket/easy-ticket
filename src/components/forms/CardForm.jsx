import styled from "styled-components";
import Input from "../input/Input";
import { InputContainer, InputField, Label } from "../input/InputStyle";
import AnimationArea from "../Animation";
import { FormWrap } from "./FormStyle";
import { useAtomValue } from "jotai";
import { levelAtom } from "../../store/atom";

const CardInputFied = styled(InputField)`
  width: 40px;
`;
const CardForm = ({ focusNum, handleChange }) => {
  const level = useAtomValue(levelAtom);
  return (
    <FormWrap>
      {/*카드 번호 */}
      <AnimationArea $focus={level === "low" && focusNum == 0}>
        <InputContainer>
          <Label>카드 번호</Label>
          <CardInputFied name="cardNum1" onChange={handleChange} />-
          <CardInputFied name="cardNum2" onChange={handleChange} />-
          <CardInputFied name="cardNum3" onChange={handleChange} />-
          <CardInputFied name="cardNum4" onChange={handleChange} />
        </InputContainer>
      </AnimationArea>
      <Input
        $focus={level === "low" && focusNum == 1}
        text="카드 비밀번호"
        name="cardPassword"
        onChange={handleChange}
      />
      <Input
        $focus={level === "low" && focusNum == 2}
        text="cvc 번호"
        name="cvc"
        onChange={handleChange}
      />
    </FormWrap>
  );
};

export default CardForm;
