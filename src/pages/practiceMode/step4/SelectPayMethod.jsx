import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PayMethodForm from "../../../components/forms/pay/PayMethodForm";
import DetailPayForm from "../../../components/forms/pay/DetailPayForm";
import { useForm } from "../../../hooks/useForm";
import Button from "../../../components/button/Button";
import { useSetAtom } from "jotai";
import {
  progressAtom,
  stepTextNumberAtom,
  helpTextNumberAtom
} from "../../../store/atom";
import { useBookingValidate } from "../../../hooks/useBookingValidate";
import { usePaymentValidate } from "../../../hooks/usePaymentValidate";

const SelectPayWrap = styled.div`
  width: 80%;
  display: flex;
  gap: 67px;
  position: relative;
  padding: 20px;
  height: 300px;
`;
export const Step4Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  margin: 0 20px;
`;
export const SubTtitle = styled.div`
  width: 447px;
  height: 37px;
  border-bottom: 1px solid var(--fill-color);
  font-size: 20px;
  display: flex;
  align-items: center;
`;
const BtnWrap = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0;
`;

const SelectPayMethod = () => {
  //onChange 이벤트 핸들러, 정답 리스트, 페이지 전체 정답 여부
  //useForm 매개변수 - 맞혀야 하는 문제 개수
  const { handleChange, correctList, isAnswer } = useForm(3);
  //'신용카드'를 정확히 골랐을 경우 '결제 수단 입력' 창 생성
  const isPayMethodCorrect = correctList["PayMethodForm"];
  //검사로직
  const { handlePayment, hasPayFormError, cardTypesError } = usePaymentValidate(
    { correctList }
  );
  const setStepTextNumber = useSetAtom(stepTextNumberAtom);
  const setHelpTextNumber = useSetAtom(helpTextNumberAtom);

  // progress bar 설정
  const setProgress = useSetAtom(progressAtom);
  useEffect(() => {
    setProgress(4);
    setStepTextNumber(0);
    setHelpTextNumber(0);
  }, []);

  useEffect(() => {
    if (isPayMethodCorrect) {
      setStepTextNumber((prev) => prev + 1);
      setHelpTextNumber((prev) => prev + 1);
    }
  }, [isPayMethodCorrect]);

  return (
    <SelectPayWrap>
      {/*결제 방식 선택 */}
      <Step4Container>
        <SubTtitle>결제 방식 선택</SubTtitle>
        <PayMethodForm
          isSelected={isPayMethodCorrect}
          handleChange={handleChange}
        />
      </Step4Container>
      {/*결제 수단 선택 */}
      {isPayMethodCorrect && (
        <>
          <Step4Container>
            <SubTtitle>결제 수단 선택</SubTtitle>
            <DetailPayForm
              isSelected={correctList["DetailPayForm"]}
              isAnswer={isAnswer}
              handleChange={handleChange}
              hasPayFormError={hasPayFormError}
              cardTypesError={cardTypesError}
            />
          </Step4Container>
          <BtnWrap>
            <Button text="다음 단계" onClick={handlePayment} />
          </BtnWrap>
        </>
      )}
    </SelectPayWrap>
  );
};

export default SelectPayMethod;
