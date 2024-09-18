import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SelectPriceCheckBox from "../../components/selectPrice/SelectPriceCheckBox";
import { useAtomValue, useSetAtom } from "jotai";
import { optionAtom, progressAtom } from "../../../../store/atom";
import PrevNextButton from "../../../../components/myBookingInfo/PrevNextButton";
import { MyBookingInfoContainer } from "../../../../components/myBookingInfo/MyBookingInfoContainer";
import { useNavigate } from "react-router-dom";
import { useBookingValidate } from "../../../../hooks/useBookingValidate";
import MyBookingInfo from "../../../../components/myBookingInfo/MyBookingInfo";
import SeatCountTicketlink from "../../components/seatCount/SeatCountTicketlink";
import TicketMethodTicketlink from "../../components/ticketMethod/TicketMethodTicketlink";
import ErrorText from "../../../../components/errorText/ErrorText";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  padding: 0 20px;
  gap: 20px;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 세로 방향으로 위에서 아래로 배치 */
  align-items: flex-start; /* 왼쪽으로 정렬 */
  gap: 20px; /* 각 요소 사이의 간격 */
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const CheckboxContainer = styled.div`
  display: flex;
`;
//취소 기한 및 수수료 동의
const CancelCheckbox = styled.input.attrs({
  type: "checkbox"
})``;

const CancelLabel = styled.label`
  font-size: 24px;
  color: ${(props) =>
    props.$hasError ? "var(--point-color)" : "var(--text-color)"};
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SelectPriceTicketlink = () => {
  const option = useAtomValue(optionAtom);

  //검사 로직
  // 폼 검사 로직용
  const [isValidate, setIsValidate] = useState([]);
  const [errorArray, setErrorArray] = useState([]); //css 변경용
  const [step3Stage, setStep3Stage] = useState(1);
  const addStage = (num) => setStep3Stage(num);

  //프로그래스 바
  const setProgress = useSetAtom(progressAtom);
  useEffect(() => setProgress(3), [setProgress]);
  useEffect(() => {
    if (step3Stage === 2) {
      setProgress(4);
    }
  }, [step3Stage]);

  //체크박스 체크 여부
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isAgreeAll, setIsAgreeAll] = useState(false);
  const handleChecked = (checked, checkboxId) => {
    let newChecked1 = isChecked1;
    let newChecked2 = isChecked2;
    if (checkboxId === 1) newChecked1 = checked;
    if (checkboxId === 2) newChecked2 = checked;
    // 두 체크박스가 모두 체크되었는지 확인
    setIsChecked1(newChecked1);
    setIsChecked2(newChecked2);
    setIsAgreeAll(newChecked1 && newChecked2);
  };
  useEffect(() => {
    if (isAgreeAll) {
      setIsValidate((prev) =>
        prev.includes("checkbox") ? prev : [...prev, "checkbox"]
      );
    } else {
      setIsValidate((prev) => prev.filter((item) => item !== "checkbox"));
    }
  }, [isAgreeAll]);

  //취소기한 및 수수료 동의
  const [isCancelChecked, setIsCancelChecked] = useState(false);
  const handleCancelChecked = (e) => {
    setIsCancelChecked(e.target.checked);
    if (e.target.checked) {
      setIsValidate((prev) =>
        prev.includes("cancel") ? prev : [...prev, "cancel"]
      );
    } else {
      setIsValidate((prev) => prev.filter((item) => item !== "cancel"));
    }
  };

  //검사 후 이동할 위치
  const location = "../step5-1";
  // 버튼에 넘겨줄 검사로직 (티켓가격 + 예매자 정보 확인용)
  const { handleButtonClick, showError } = useBookingValidate(
    addStage,
    step3Stage,
    isValidate,
    setErrorArray,
    location,
    { isAgreeAll: isAgreeAll, isCancelChecked: isCancelChecked }
  );

  //error css
  const cancelError = errorArray.includes("cancel");
  const nav = useNavigate();

  return (
    <>
      {step3Stage === 1 ? (
        <Container>
          <LeftSection>
            <SelectPriceCheckBox handleChecked={handleChecked} />
            <SeatCountTicketlink hasError={showError} />
          </LeftSection>
          <RightSection>
            <MyBookingInfoContainer>
              <MyBookingInfo option={option} />
              <PrevNextButton
                prevButtonOnClick={() => addStage(1)}
                nextButtonOnClick={handleButtonClick}
              />
            </MyBookingInfoContainer>
          </RightSection>
        </Container>
      ) : (
        <Container>
          <LeftSection>
            <TicketMethodTicketlink
              setIsValidate={setIsValidate}
              errorArray={errorArray}
              handleChecked={handleChecked}
            />
          </LeftSection>
          <RightSection>
            <MyBookingInfoContainer>
              <MyBookingInfo option={option} />

              {/* 취소기한 확인용 체크박스 */}
              <CancelLabel
                $hasError={cancelError}
                checked={isCancelChecked}
                onChange={handleCancelChecked}
              >
                <ErrorContainer>
                  {cancelError && (
                    <ErrorText text="아래 체크박스에 동의해 주세요" />
                  )}
                  <CheckboxContainer>
                    <CancelCheckbox />
                    취소기한 및 수수료 동의
                  </CheckboxContainer>
                </ErrorContainer>
              </CancelLabel>
              <PrevNextButton
                prevButtonOnClick={
                  step3Stage === 1 ? () => nav("../step2") : () => addStage(1)
                }
                nextButtonOnClick={handleButtonClick}
              />
            </MyBookingInfoContainer>
          </RightSection>
        </Container>
      )}
    </>
  );
};

export default SelectPriceTicketlink;
