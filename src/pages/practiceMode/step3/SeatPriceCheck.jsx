import styled from "styled-components";
import MyBookingInfo from "../../../components/myBookingInfo/MyBookingInfo";
import SeatCount from "../../../components/SeatCount";
import { useEffect, useState } from "react";
import TicketMethod from "../../../components/forms/ticket/TicketMethod";
import { useSetAtom } from "jotai";
import {
  progressAtom,
  stepTextNumberAtom,
  helpTextNumberAtom
} from "../../../store/atom";
import { MyBookingInfoContainer } from "../../../components/myBookingInfo/MyBookingInfoContainer";
import PrevNextButton from "../../../components/myBookingInfo/PrevNextButton";
import { useBookingValidate } from "../../../hooks/useBookingValidate";

const Wrap = styled.div`
  display: flex;
  gap: 20px;
`;

const SeatPriceCheck = () => {
  //현장수령 or 배송
  const [option, setOption] = useState("현장수령");
  //step4 단계에 대한 정보
  const [step3Stage, setStep3Stage] = useState(1);
  const addStage = () => setStep3Stage(2);
  const setProgress = useSetAtom(progressAtom);

  const setStepTextNumber = useSetAtom(stepTextNumberAtom);
  const setHelpTextNumber = useSetAtom(helpTextNumberAtom);

  useEffect(() => {
    setProgress(3);
    setStepTextNumber(0);
    setHelpTextNumber(0);
  }, []);

  useEffect(() => {
    if (step3Stage == 2) {
      setStepTextNumber((prev) => prev + 1);
      setHelpTextNumber((prev) => prev + 1);
    }
  }, [step3Stage]);

  // 폼 검사 로직용
  const [isValidate, setIsValidate] = useState([]);
  const [errorArray, setErrorArray] = useState([]); //css 변경용
  //검사후 이동할 위치
  const location = "../step4-1";
  // 버튼에 넘겨줄 검사로직 (티켓가격 + 예매자 정보 확인용)
  const { handleButtonClick } = useBookingValidate(
    addStage,
    step3Stage,
    isValidate,
    setErrorArray,
    location
  );

  return (
    <Wrap>
      {step3Stage == 1 ? (
        <SeatCount />
      ) : (
        <TicketMethod
          option={option}
          setOption={setOption}
          setIsValidate={setIsValidate}
          errorArray={errorArray}
        />
      )}
      <MyBookingInfoContainer>
        <MyBookingInfo
          step3Stage={step3Stage}
          addStage={addStage}
          option={option}
          isValidate={isValidate}
          setErrorArray={setErrorArray}
        />
        <PrevNextButton
          prevButtonOnClick={() => addStage(1)}
          nextButtonOnClick={handleButtonClick}
        />
      </MyBookingInfoContainer>
    </Wrap>
  );
};

export default SeatPriceCheck;
