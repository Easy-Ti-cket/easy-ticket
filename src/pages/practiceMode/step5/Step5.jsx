import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../components/button/Button";
import { useAtom, useSetAtom } from "jotai";
import {
  levelAtom,
  progressAtom,
  themeSiteAtom,
  practiceCountAtom,
  isPracticeCountIncreasedAtom
} from "../../../store/atom";
import { useNavigate } from "react-router-dom";
import resetAtom from "../../../util/resetAtom";
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
  color: var(--grayScale-textColor2, #333);
  font-family: "pretendardM";
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -2px;
  margin-bottom: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Step5 = () => {
  const [, setLevel] = useAtom(levelAtom);
  const [, setProgress] = useAtom(progressAtom);
  const navigate = useNavigate();

  const setThemeSite = useSetAtom(themeSiteAtom);

  //연습 횟수 증가 로직
  const [practiceCount, setPracticeCount] = useAtom(practiceCountAtom);
  const [isPracticeCountIncreased, setIsPracticeCountIncreased] = useAtom(
    isPracticeCountIncreasedAtom
  );
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setProgress(5);
    if (!isLoaded) {
      setIsLoaded(true);
    }
    // 연습 횟수 증가 여부 확인후 증가
    if (!isPracticeCountIncreased && isLoaded) {
      setPracticeCount((prev) => prev + 1);
      setIsPracticeCountIncreased(true);
    }
  }, [isLoaded]);

  // 난이도 선택 창으로
  const handlePracticeModeClick = () => {
    resetAtom();
    navigate("/select-level");
  };

  // 실전 모드 선택 창으로
  const handleChallengeModeClick = () => {
    resetAtom();
    navigate("/select-site"); // 추후 path 수정 필요
  };

  return (
    <Step5Container>
      <SuccessMessage>예매 성공!</SuccessMessage>
      <PracticeMessage>다시 연습하시겠습니까?</PracticeMessage>
      <ButtonWrapper>
        <Button text="다시 연습하기" onClick={handlePracticeModeClick} />
        <Button
          text="실전모드 도전하기"
          type="outline"
          onClick={handleChallengeModeClick}
        />
      </ButtonWrapper>
    </Step5Container>
  );
};

export default Step5;
