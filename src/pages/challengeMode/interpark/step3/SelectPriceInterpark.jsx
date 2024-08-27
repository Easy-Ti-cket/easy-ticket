import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MyBookingInfo from "../../../../components/myBookingInfo/MyBookingInfo";
import SeatCount from "../../../../components/SeatCount";
import TicketMethod from "../../../../components/forms/ticket/TicketMethod";
import { useSetAtom } from "jotai";
import { progressAtom } from "../../../../store/atom";
import { useBookingValidate } from "../../../../hooks/useBookingValidate";
import PrevNextButton from "../../../../components/myBookingInfo/PrevNextButton";
import { MyBookingInfoContainer } from "../../../../components/myBookingInfo/MyBookingInfoContainer";

const Wrap = styled.div`
  display: flex;
  gap: 15px;
`;

const SelectPriceInterpark = () => {
  //현장수령 or 배송
  const [option, setOption] = useState("현장수령");
  //step4 단계에 대한 정보
  const [step3Stage, setStep3Stage] = useState(1);
  const addStage = (num) => setStep3Stage(num);
  const setProgress = useSetAtom(progressAtom);
  useEffect(() => setProgress(3));
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
      {/*내 예매정보 + 버튼 */}
      <MyBookingInfoContainer>
        <MyBookingInfo option={option} />
        {/*이전 버튼, 다음 버튼 클릭 시 작동할 것*/}
        <PrevNextButton
          prevButtonOnClick={() => addStage(1)}
          nextButtonOnClick={handleButtonClick}
        />
      </MyBookingInfoContainer>
    </Wrap>
  );
};

export default SelectPriceInterpark;
