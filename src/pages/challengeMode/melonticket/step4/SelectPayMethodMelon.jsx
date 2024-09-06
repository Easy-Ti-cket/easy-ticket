import DetailPayFormMelon from "../../components/payMethod/DetailPayFormMelon";
import PayMethodForm from "../../../../components/forms/pay/PayMethodForm";
import AgreeMentMelon from "../../components/AgreementMelon";
import ErrorTooltip from "../../../../components/tooltip/ErrorTooltip";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useAtom, useSetAtom } from "jotai";
import MyBookingInfo from "../../../../components/myBookingInfo/MyBookingInfo";
import { MyBookingInfoContainer } from "../../../../components/myBookingInfo/MyBookingInfoContainer";
import PrevNextButton from "../../../../components/myBookingInfo/PrevNextButton";
import { useNavigate } from "react-router-dom";
import { optionAtom, progressAtom } from "../../../../store/atom";
import TicketMethod from "../../../../components/forms/ticket/TicketMethod";
import { useBookingValidate } from "../../../../hooks/useBookingValidate";
import { useForm } from "../../../../hooks/useForm";
import { PayMethodInfo } from "../../components/payMethod/payMethodStyle";

const TicketMethodMelonContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const PayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
`;
const TextBox = styled.div`
  font-family: pretendardB;
`;
const PayMethodContainer = styled.div`
  color: ${(props) => props.$hasError && "var(--point-color)"};
`;
const MyBookingInfoContainerMelon = styled(MyBookingInfoContainer)`
  height: 500px;
`;
const GrayLine = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid var(--fill-color);
  padding: 10px 0;
  margin-top: 5px;
`;
const Container = styled.div``;
const ErrorTooltipContainer = styled.div`
  margin: 20px;
`;

const SelectPayMethodMelon = () => {
  const setProgress = useSetAtom(progressAtom);
  useEffect(() => setProgress(3), [setProgress]);
  //현장수령 or 배송
  const [option, setOption] = useAtom(optionAtom);
  // 체크박스 상태 관리
  const [isAgreeAll, setIsAgreeAll] = useState(false);
  const [isAgree, setIsAgree] = useState([false, false, false, false, false]);
  // 폼 검사 로직용
  const [isValidate, setIsValidate] = useState([]);
  const [errorArray, setErrorArray] = useState([]); //css 변경용
  const [step3Stage, setStep3Stage] = useState(2);
  const addStage = (num) => setStep3Stage(num);
  //검사후 이동할 위치
  const nav = useNavigate();
  const location = "../step5-2";
  // 결제 수단 검사로직
  const { correctList, handleChange } = useForm(1);
  // 실전모드는 '신용카드' 선택만 가능
  const isPayMethodCorrect = correctList["PayMethodForm"];
  // 버튼에 넘겨줄 검사로직 (티켓가격 + 예매자 정보 확인용)
  const { handleButtonClick } = useBookingValidate(
    addStage,
    step3Stage,
    isValidate,
    setErrorArray,
    location,
    { isAgreeAll: isAgreeAll, isPayMethodCorrect: isPayMethodCorrect }
  );

  return (
    <TicketMethodMelonContainer>
      <Container>
        {/*티켓 수령 방법 / 예매자 확인*/}
        <TicketMethod setIsValidate={setIsValidate} errorArray={errorArray} />

        <PayContainer>
          {/*결제 수단 선택*/}
          <ErrorTooltipContainer>
            {!isPayMethodCorrect && (
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
          </ErrorTooltipContainer>
          <PayMethodContainer $hasError={errorArray.includes("payMethod")}>
            <TextBox>결제수단을 선택하세요</TextBox>
            <GrayLine />
            <PayMethodForm
              isSelected={isPayMethodCorrect}
              handleChange={handleChange}
            />
          </PayMethodContainer>

          <DetailPayFormMelon />
          {/*동의 박스*/}
          <AgreeMentMelon
            isAgree={isAgree}
            isAgreeAll={isAgreeAll}
            setIsAgreeAll={setIsAgreeAll}
            setIsAgree={setIsAgree}
            errorArray={errorArray}
          />
        </PayContainer>
      </Container>
      {/*내 예매 정보*/}
      <MyBookingInfoContainerMelon>
        <MyBookingInfo />
        <PrevNextButton
          prevButtonOnClick={() => {
            nav("../step3/step4");
          }}
          nextButtonOnClick={handleButtonClick}
        />
      </MyBookingInfoContainerMelon>
    </TicketMethodMelonContainer>
  );
};

export default SelectPayMethodMelon;
