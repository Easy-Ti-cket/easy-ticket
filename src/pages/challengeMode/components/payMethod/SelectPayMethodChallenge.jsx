import styled from "styled-components";
import DetailPayForm from "../../../../components/forms/pay/DetailPayForm";
import { MyBookingInfoContainer } from "../../../../components/myBookingInfo/MyBookingInfoContainer";
import PrevNextButton from "../../../../components/myBookingInfo/PrevNextButton";
import { useNavigate } from "react-router-dom";
import { usePaymentValidate } from "../../../../hooks/usePaymentValidate";
import { useForm } from "../../../../hooks/useForm";
import PayMethodForm from "../../../../components/forms/pay/PayMethodForm";
import ErrorTooltip from "../../../../components/tooltip/ErrorTooltip";
import MyBookingInfo from "../../../../components/myBookingInfo/MyBookingInfo";
import { FormWrap } from "../../../../components/forms/FormStyle";
import ErrorText from "../../../../components/ErrorText";
import { useEffect } from "react";

const SubTitle = styled.div`
  width: 400px;
  display: flex;
  gap: 10px;
  align-items: center;
  border-bottom: 1px solid var(--fill-color);
  padding-bottom: 8px;
  margin-right: 8px;
`;
//결제 수단 + 결제 방식 + 내 예매 정보
const PayMethodWrap = styled.div`
  display: inline-flex;
  gap: 15px;
`;

//결제 수단
const PayMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-right: 2px solid var(--fill-color);
`;

//결제 방식
const DetailPayFormContainer = styled(FormWrap)`
  width: 400px;
  gap: 20px;
  border-right: 2px solid var(--fill-color);
`;
const CardInfo = styled.div`
  display: flex;
  gap: 20px;
  background-color: var(--dimmed-color);
  padding: 10px;
`;

//무이자 할부 안내 버튼
const FakeButton = styled.div`
  background-color: var(--point-color);
  color: #fff;
  font-size: 14px;
  width: 120px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

//결제방식관련 안내 문구
const PayMethodInfo = styled.span`
  font-family: "pretendardB";
  font-size: 12px;
  color: var(--text-color);
`;

const SelectPayMethodChallenge = ({
  isAllChecked = null,
  setShowError = null
}) => {
  //nav
  const nav = useNavigate();
  //검사로직
  const { correctList, handleChange, isAnswer } = useForm(3);
  const { handlePayment, hasPayFormError, cardTypesError, checkboxError } =
    usePaymentValidate({ correctList, isAllChecked });
  //'신용카드'를 정확히 골랐을 경우 '결제 수단 입력' 창 생성
  const isPayMethodCorrect = correctList["PayMethodForm"];

  useEffect(() => {
    setShowError(checkboxError);
  }, [checkboxError]);

  return (
    <PayMethodWrap>
      <PayMethodContainer>
        {!isPayMethodCorrect && (
          <ErrorTooltip
            contents={
              <PayMethodInfo>
                실전모드에선 '신용카드' 결제만 가능합니다.
              </PayMethodInfo>
            }
          >
            <br />
          </ErrorTooltip>
        )}
        {/*결제 수단 */}
        <SubTitle>결제 수단</SubTitle>
        {hasPayFormError && <ErrorText text="신용카드를 선택해 주세요" />}
        <PayMethodForm
          isSelected={isPayMethodCorrect}
          handleChange={handleChange}
        />
      </PayMethodContainer>
      {/*결제 방식 */}
      <DetailPayFormContainer>
        {!correctList["DetailPayForm"] && (
          <ErrorTooltip
            contents={
              <PayMethodInfo>
                실전모드에선 "일반 신용카드" 결제만 가능합니다.
              </PayMethodInfo>
            }
          >
            <br />
          </ErrorTooltip>
        )}
        <SubTitle>결제 방식</SubTitle>
        {hasPayFormError && <ErrorText text="일반신용카드를 선택해 주세요" />}
        {isPayMethodCorrect && (
          <>
            <CardInfo>
              {">"} 신용카드 정보 <FakeButton>무이자 할부 안내</FakeButton>
            </CardInfo>
            <DetailPayForm
              isSelected={correctList["DetailPayForm"]}
              isAnswer={isAnswer}
              handleChange={handleChange}
              hasPayFormError={hasPayFormError}
              cardTypesError={cardTypesError}
            />
          </>
        )}
      </DetailPayFormContainer>
      {/*내 예매 정보 */}
      <div>
        <MyBookingInfoContainer>
          <MyBookingInfo />
          <PrevNextButton
            prevButtonOnClick={() => {
              nav("../step3/step4");
            }}
            nextButtonOnClick={handlePayment}
          />
        </MyBookingInfoContainer>
      </div>
    </PayMethodWrap>
  );
};
export default SelectPayMethodChallenge;
