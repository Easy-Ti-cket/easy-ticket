import { useAtom, useSetAtom } from "jotai";
import Input from "../../input/Input";
import TicketBuyer from "./TicketBuyer";
import {
  SectionTitle,
  TicketMethodCont,
  TicketMethodWrap
} from "./TicketMethodStyle";
import { optionAtom } from "../../../store/atom";
import ErrorText from "../../errorText/ErrorText";

const TicketMethod = ({ setIsValidate, errorArray }) => {
  const [option, setOption] = useAtom(optionAtom);

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
        <SectionTitle $option={option}>
          티켓수령방법
          {hasError && <ErrorText text="티켓 수령 방법을 선택해 주세요" />}
        </SectionTitle>
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
