import styled from "styled-components";
import Input from "../input/Input";
import { useState } from "react";
import { InputContainer, InputField, Label } from "../input/InputStyle";
import AnimationArea from "../Animation";

const FormWrap = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: fit-content;
  background-color: #797979;
`;
const CardInputFied = styled(InputField)`
  width: 40px;
`;
const CardForm = () => {
  const [isanswer, setIsAnswer] = useState(false);
  const answer = [];
  const onChange = (e) => {
    answer.push(e.target.value);
    console.log(answer);
  };
  return (
    <FormWrap>
      {/*카드 번호 */}
      <AnimationArea focus={true}>
        <InputContainer>
          <Label>카드 번호</Label>
          <CardInputFied />-
          <CardInputFied />-
          <CardInputFied />-
          <CardInputFied />
        </InputContainer>
      </AnimationArea>
      <Input text="카드 비밀번호" onChange={onChange} />
      <Input text="cvc 번호" onChange={onChange} />
    </FormWrap>
  );
};

export default CardForm;
