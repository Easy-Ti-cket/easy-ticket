import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MyBookingInfo from "../../../../components/myBookingInfo/MyBookingInfo";
import SeatCount from "../../../../components/SeatCount";
import TicketMethod from "../../../../components/forms/ticket/TicketMethod";
import { useAtomValue, useSetAtom } from "jotai";
import { levelAtom, progressAtom, seatCountAtom } from "../../../../store/atom";
import Button from "../../../../components/button/Button";
import Animation from "../../../../components/Animation";
import { useBookingValidate } from "../../../../hooks/useBookingValidate";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  display: flex;
  gap: 20px;
`;
const MyBookingInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const PaddingContainer = styled.div`
  padding: 6px;
`;
const NextAnimation = styled(Animation)`
  padding: 3px;
`;
const SelectPriceInterpark = () => {
  const level = useAtomValue(levelAtom);
  const nav = useNavigate();

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
  //검사로직 (티켓가격 + 예매자 정보 확인용)
  const handleButtonClick = useBookingValidate(
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
        <ButtonContainer>
          <PaddingContainer>
            <Button
              text="이전 단계"
              onClick={() => setStep3Stage(1)}
              type="prev"
            ></Button>
          </PaddingContainer>
          <NextAnimation $focus={level === "low"}>
            <Button text="다음 단계" onClick={handleButtonClick}></Button>
          </NextAnimation>
        </ButtonContainer>
      </MyBookingInfoContainer>
    </Wrap>
  );
};

export default SelectPriceInterpark;
