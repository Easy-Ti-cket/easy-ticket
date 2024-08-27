import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../../../components/button/Button";
import { useAtom, useSetAtom } from "jotai";
import { progressAtom, themeSiteAtom } from "../../../store/atom";
import { useNavigate } from "react-router-dom";

const Step5Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  text-align: center;
`;

const SuccessMessage = styled.h1`
  color: var(--key-color);
  font-family: "pretendardB";
  font-size: 70px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -3.5px;
  margin-bottom: 20px;
`;

const PracticeMessage = styled.p`
  color: var(--text-color);
  font-family: "pretendardM";
  font-size: 40px;
  font-weight: 600;
  letter-spacing: -2px;
  margin-bottom: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Outro = () => {
  const [, setProgress] = useAtom(progressAtom);
  const navigate = useNavigate();
  const setThemeSite = useSetAtom(themeSiteAtom);

  useEffect(() => {
    setProgress(5);
    setThemeSite("practice");
  }, [setProgress]);

  // 다시 도전하기(사이트 선택)
  const handlePracticeModeClick = () => {
    navigate("/select-site");
  };

  // 기록 보기
  const handleChallengeModeClick = () => {
    navigate("/record");
  };

  return (
    <Step5Container>
      <SuccessMessage>예매 성공!</SuccessMessage>
      {/* 클리어 시간 추가 필요*/}
      <PracticeMessage>다시 도전하시겠습니까?</PracticeMessage>
      <ButtonWrapper>
        <Button text="다시 도전하기" onClick={handlePracticeModeClick} />
        <Button
          text="기록 보러가기"
          type="outline"
          onClick={handleChallengeModeClick}
        />
      </ButtonWrapper>
    </Step5Container>
  );
};

export default Outro;
