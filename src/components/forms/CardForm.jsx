import styled from "styled-components";
import Input from "../input/Input";
import { useState } from "react";

const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardForm = () => {
  const [isanswer, setIsAnswer] = useState(false);
  const answer = [];
  const onChange = (e) => {
    answer.push(e.target.value);
  };
  return (
    <FormWrap>
      <Input text="카드 번호" onChange={onChange} />
      <Input text="카드 비밀번호" onChange={onChange} />
      <Input text="cvc 번호" onChange={onChange} />
    </FormWrap>
  );
};

export default CardForm;
