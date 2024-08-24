import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MyBookingInfo from "../../../../components/myBookingInfo/MyBookingInfo";
import SeatCount from "../../../../components/SeatCount";
import TicketMethod from "../../../../components/forms/ticket/TicketMethod";
import { useSetAtom } from "jotai";
import { progressAtom } from "../../../../store/atom";

const Wrap = styled.div`
  display: flex;
  gap: 20px;
`;

const SelectPriceInterpark = () => {
  //현장수령 or 배송
  const [option, setOption] = useState("현장수령");
  //step4 단계에 대한 정보
  const [step3Stage, setStep3Stage] = useState(1);
  const addStage = () => setStep3Stage((prev) => prev + 1);
  const setProgress = useSetAtom(progressAtom);
  useEffect(() => setProgress(3));
  // 폼 검사 로직
  const [isValidate, setIsValidate] = useState([]);
  const [errorArray, setErrorArray] = useState([]); //css 변경용

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
      <MyBookingInfo
        step3Stage={step3Stage}
        addStage={addStage}
        option={option}
        isValidate={isValidate}
        setErrorArray={setErrorArray}
      />
    </Wrap>
  );
};

export default SelectPriceInterpark;