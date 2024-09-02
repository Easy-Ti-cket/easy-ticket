import styled from "styled-components";
import Input from "../../../../components/input/Input";
import { FormWrap } from "../../../../components/forms/FormStyle";
import TicketBuyer from "../../../../components/forms/ticket/TicketBuyer";

const SectionTitle = styled.div`
  width: ${(props) => (props.$option === "현장수령" ? "500px" : "800px")};
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
  gap: 50px;
  justify-content: center;
  align-items: start;
  height: 417px;
`;
const TicketMethodMelon = ({
  option,
  setOption,
  setIsValidate,
  errorArray
}) => {
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
      {/*티켓수령방법 */}
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
          value="배송"
          text="배송(+3000)"
          name="TicketMethod"
          onChange={handleOptionChange}
        />
      </TicketMethodCont>
      <TicketMethodCont>
        {/*예매자 확인 */}
        <SectionTitle $option={option}>예매자 확인</SectionTitle>
        <TicketBuyer
          option={option}
          setIsValidate={setIsValidate}
          errorArray={errorArray}
        />
      </TicketMethodCont>
    </TicketMethodWrap>
  );
};

export default TicketMethodMelon;
