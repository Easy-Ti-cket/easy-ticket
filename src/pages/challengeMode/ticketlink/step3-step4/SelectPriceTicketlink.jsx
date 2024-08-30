import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MyBookingInfo from "./MyBookingInfo";
import SeatCount from "./SeatCount";
import TicketMethod from "./ticket/TicketMethod";
import SelectPriceCheckBox from "./SelectPriceCheckBox";
import { useSetAtom } from "jotai";
import { progressAtom } from "../../../../store/atom";
import PrevNextButton from "../../../../components/myBookingInfo/PrevNextButton";
import { MyBookingInfoContainer } from "../../../../components/myBookingInfo/MyBookingInfoContainer";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  gap: 30px;
  padding: 0 20px;
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

// step3/step4 메인 페이지
const SelectPriceTicketlink = () => {
  const [option, setOption] = useState("현장수령");
  const [step3Stage, setStep3Stage] = useState(1);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isCancelChecked, setIsCancelChecked] = useState(false);
  const addStage = (num) => setStep3Stage(num);
  const setProgress = useSetAtom(progressAtom);
  const navigate = useNavigate();

  useEffect(() => setProgress(3), [setProgress]);

  const handleChecked = (checked, checkboxId) => {
    if (checkboxId === 1) setIsChecked1(checked);
    if (checkboxId === 2) setIsChecked2(checked);
  };

  const handleCancelChecked = (e) => {
    setIsCancelChecked(e.target.checked);
  };

  const handleButtonClick = () => {
    if (step3Stage === 1) {
      addStage(2);
    } else {
      if (isChecked1 && !isChecked2) {
        alert("주문자 확인 및 휴대폰번호 수집을 확인하셔야 결제가 가능합니다.");
      } else if (!isChecked1 && isChecked2) {
        alert(
          "취소수수료 및 취소기한 내용에 동의하셔야만 결제가 가능합니다. 내용을 확인하신 후, 동의하기를 체크해주세요."
        );
      } else if (!isChecked1 && !isChecked2) {
        alert("주문자 확인 및 휴대폰번호 수집을 확인하셔야 결제가 가능합니다.");
      } else if (!isCancelChecked) {
        alert(
          "취소수수료 및 취소기한 내용에 동의하셔야만 결제가 가능합니다. 내용을 확인하신 후, 동의하기를 체크해주세요."
        );
      } else {
        navigate("../step5-1");
      }
    }
  };

  return (
    <>
      {step3Stage === 1 ? (
        <Container>
          <LeftSection>
            <SelectPriceCheckBox handleChecked={handleChecked} />
            <SeatCount />
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
            <TicketMethod
              option={option}
              setOption={setOption}
              handleChecked={handleChecked}
            />
          </LeftSection>
          <RightSection>
            <MyBookingInfoContainer>
              <MyBookingInfo option={option} />

              {/* 취소기한 확인용 체크박스 */}
              <label>
                <input
                  type="checkbox"
                  checked={isCancelChecked}
                  onChange={handleCancelChecked}
                />
                취소기한 및 수수료 동의
              </label>
              <PrevNextButton
                prevButtonOnClick={() => addStage(1)}
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