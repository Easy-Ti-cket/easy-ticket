import styled from "styled-components";
import Input from "../../input/Input";
import { FormWrap } from "../FormStyle";
import TicketBuyer from "./TicketBuyer";
import { useState } from "react";

const SectionTitle = styled.div`
  font-size: 20px;
  font-family: "pretendardB";
  margin-bottom: 20px;
`;
const TicketMethodCont = styled.div`
  display: flex;
  flex-direction: column;
`;
const TicketMethodWrap = styled(FormWrap)`
  border: 1px solid var(--key-color);
  border-radius: 8px;
  display: inline-flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: start;
  padding: 20px;
`;
const TicketMethod = ({ option, setOption }) => {
  const handleOptionChange = (e) => {
    setOption(e.target.value);
  };
  return (
    <TicketMethodWrap>
      {/*티켓수령방법 */}
      <TicketMethodCont>
        <SectionTitle>티켓수령방법</SectionTitle>
        <Input
          type="radio"
          value="현장수령"
          text="현장수령"
          name="TicketMethod"
          onChange={handleOptionChange}
        />
        <Input
          type="radio"
          value="배송"
          text="배송(+3000)"
          name="TicketMethod"
          onChange={handleOptionChange}
        />
      </TicketMethodCont>
      <TicketMethodCont>
        {/*예매자 확인 */}
        <SectionTitle>예매자 확인</SectionTitle>
        <TicketBuyer option={option} />
      </TicketMethodCont>
    </TicketMethodWrap>
  );
};

export default TicketMethod;
