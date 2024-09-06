import TicketMethod from "../../../../components/forms/ticket/TicketMethod";
import BookingPersonCheckBox from "../selectPrice/BookingPersonCheckBox";
import {
  SectionTitle,
  TicketMethodCont,
  TicketMethodWrap
} from "../../../../components/forms/ticket/TicketMethodStyle";

const TicketMethodTicketlink = ({
  option,
  setOption,
  setIsValidate,
  errorArray,
  handleChecked
}) => {
  //예매자 확인 체크 안되있을 시 오류 css
  const hasError = errorArray.includes("checkbox");
  return (
    <TicketMethodWrap>
      <TicketMethod
        option={option}
        setOption={setOption}
        setIsValidate={setIsValidate}
        errorArray={errorArray}
      />
      <TicketMethodCont $hasError={hasError}>
        {/* 체크 박스 */}
        <SectionTitle>예매자 확인</SectionTitle>
        <BookingPersonCheckBox
          handleChecked={handleChecked}
          hasError={hasError}
        />
      </TicketMethodCont>
    </TicketMethodWrap>
  );
};

export default TicketMethodTicketlink;
