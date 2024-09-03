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

const CardForm = ({ focusNum, handleChange, hasErrorArray }) => {
  console.log(hasErrorArray);
  const level = useAtomValue(levelAtom);

  return (
    <FormWrap>
      {/*카드 번호 */}
      <AnimationArea $focus={level === "low" && focusNum == 0}>
        <InputContainer>
          <Label>카드 번호</Label>
          <CardInputFied
            name="cardNum1"
            type="number"
            onChange={handleChange}
            $hasError={hasErrorArray.includes("cardNum1")}
          />
          -
          <CardInputFied
            name="cardNum2"
            type="number"
            onChange={handleChange}
            $hasError={hasErrorArray.includes("cardNum2")}
          />
          -
          <CardInputFied
            name="cardNum3"
            type="number"
            onChange={handleChange}
            $hasError={hasErrorArray.includes("cardNum3")}
          />
          -
          <CardInputFied
            name="cardNum4"
            type="number"
            onChange={handleChange}
            $hasError={hasErrorArray.includes("cardNum4")}
          />
        </InputContainer>
      </AnimationArea>
      <Input
        $focus={level === "low" && focusNum == 1}
        text="카드 비밀번호"
        name="cardPassword"
        onChange={handleChange}
        isNumber={true}
        $hasError={hasErrorArray.includes("cardPassword")}
      />
      <Input
        $focus={level === "low" && focusNum == 2}
        text="cvc 번호"
        name="cvc"
        onChange={handleChange}
        isNumber={true}
        $hasError={hasErrorArray.includes("cvc")}
      />
    </FormWrap>
  );
};

export default CardForm;
