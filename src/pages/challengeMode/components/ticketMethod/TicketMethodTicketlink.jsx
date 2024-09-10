import TicketMethod from "../../../../components/forms/ticket/TicketMethod";
import BookingPersonCheckBox from "../selectPrice/BookingPersonCheckBox";
import {
  SectionTitle,
  TicketMethodCont,
  TicketMethodWrap
} from "../../../../components/forms/ticket/TicketMethodStyle";
import ErrorText from "../../../../components/ErrorText";

const TicketMethodTicketlink = ({
  setIsValidate,
  errorArray,
  handleChecked
}) => {
  //예매자 확인 체크 안되있을 시 오류 css
  const hasError = errorArray.includes("checkbox");

  return (
    <TicketMethodWrap>
      <TicketMethod setIsValidate={setIsValidate} errorArray={errorArray} />
      <TicketMethodCont $hasError={hasError}>
        {/* 체크 박스 */}
        <SectionTitle>
          예매자 확인
          {hasError && (
            <ErrorText text="개인정보 수집 및 제 3자 제공에 동의해야 결제가 가능합니다." />
          )}
        </SectionTitle>
        <BookingPersonCheckBox
          handleChecked={handleChecked}
          hasError={hasError}
        />
      </TicketMethodCont>
    </TicketMethodWrap>
  );
};

export default TicketMethodTicketlink;
