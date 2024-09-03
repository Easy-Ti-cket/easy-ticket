import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../../../../components/input/Input";
import { FormWrap } from "../../../../../components/forms/FormStyle";
import TicketBuyer from "./TicketBuyer";
import BookingPersonCheckBox from "../BookingPersonCheckBox";

const SectionTitle = styled.div`
  width: ${(props) => (props.$option === "현장수령" ? "420px" : "800px")};
  font-size: 20px;
  font-family: "pretendardB";
  margin-bottom: 20px;
  padding: 10px 0;
  border-bottom: 1px solid var(--fill-color);
`;

const TicketMethodCont = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.$hasError && "var(--point-color)"};
`;

const TicketMethodWrap = styled(FormWrap)`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: start;
`;

const TicketMethod = ({ option, setOption, handleChecked }) => {
  const handleOptionChange = (e) => {
    setOption(e.target.value);
  };

  return (
    <TicketMethodWrap>
      {/* 티켓수령방법 */}
      <TicketMethodCont>
        <SectionTitle $option={option}>티켓수령방법</SectionTitle>
        <Input
          type="radio"
          value="현장수령"
          text="현장수령"
          name="TicketMethod"
          onChange={handleOptionChange}
        />
        <Input
          type="radio"
          value="배송(+3200)"
          text="배송(+3200)"
          name="TicketMethod"
          onChange={handleOptionChange}
        />
      </TicketMethodCont>
      {/* 주문자 정보 및 배송지 정보 렌더링 조건 변경 */}
      <TicketMethodCont>
        <SectionTitle $option={"현장수령"}>주문자 정보</SectionTitle>
        <TicketBuyer option={"현장수령"} />

        {option !== "현장수령" && (
          <>
            <SectionTitle $option={"배송(+3200)"}>배송지 정보</SectionTitle>
            <TicketBuyer option={"배송(+3200)"} />
          </>
        )}
      </TicketMethodCont>
      <TicketMethodCont>
        {/* 체크 박스 */}
        <SectionTitle>예매자 확인</SectionTitle>
        <BookingPersonCheckBox handleChecked={handleChecked} />
      </TicketMethodCont>
    </TicketMethodWrap>
  );
};

export default TicketMethod;
