import styled from "styled-components";
import Input from "../../input/Input";
import { FormWrap } from "../FormStyle";
import TicketBuyer from "./TicketBuyer";

const SectionTitle = styled.div`
  width: 550px;
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
  display: inline-flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: start;
`;

const TicketMethod = ({ option, setOption, setIsValidate, errorArray }) => {
  const handleOptionChange = (e) => {
    setOption(e.target.value);
    //검사 로직
    if (e.target.value) {
      setIsValidate((prev) =>
        prev.includes("method") ? prev : [...prev, "method"]
      );
    } else {
      setIsValidate((prev) => prev.filter((item) => item !== "method"));
    }
  };
  // css 설정
  const hasError = errorArray.includes("method");

  return (
    <TicketMethodWrap>
      {/* 티켓수령방법 */}
      <TicketMethodCont $hasError={hasError}>
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
        <SectionTitle>주문자 정보</SectionTitle>
        <TicketBuyer
          option={"현장수령"}
          errorArray={errorArray}
          setIsValidate={setIsValidate}
        />
      </TicketMethodCont>
      <TicketMethodCont>
        {option.includes("배송") && (
          <>
            <SectionTitle>배송지 정보</SectionTitle>
            <TicketBuyer
              option={"배송(+3200)"}
              setIsValidate={setIsValidate}
              errorArray={errorArray}
            />
          </>
        )}
      </TicketMethodCont>
    </TicketMethodWrap>
  );
};

export default TicketMethod;
