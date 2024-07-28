import React, { useEffect, useState } from "react";
import PosterInfo from "../../components/poster/PosterInfo";
import SelectCalender from "../../components/calender/SelectCalender";
import Button from "../../components/button/Button";
import styled from "styled-components";
import { useAtom } from "jotai";
import { selectedPosterAtom, levelAtom, progressAtom } from "../../store/atom";
import AnimationArea from "../../components/Animation";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1320px;
  flex-shrink: 0;
`;

const LeftSection = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightSection = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px;
`;

const RoundWrapper = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  align-items: left;
  padding: 5px;
`;

const SelectRound = () => {
  const [, setLevel] = useAtom(levelAtom);
  const [, setProgress] = useAtom(progressAtom);
  const [selectedPoster] = useAtom(selectedPosterAtom);
  const [currentLevel] = useAtom(levelAtom);
  const [posterId, setPosterId] = useState(0);
  const [dateSelected, setDateSelected] = useState(false);
  const [roundSelected, setRoundSelected] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    setLevel(currentLevel);
    setProgress(1);
    if (currentLevel === "low") {
      setPosterId(0);
    } else {
      setPosterId(selectedPoster);
    }
  }, [currentLevel, setLevel, setProgress, selectedPoster]);

  // 특정 날짜로 고정하여 정답 설정
  const handleDateSelect = (formattedDate) => {
    if (currentLevel === "low" && formattedDate === "2024-07-26") {
      setDateSelected(true);
      setAnimationStep(1);
    } else if (currentLevel === "low") {
      alert("날짜를 다시 선택하세요.");
    }
  };

  const handleRoundClick = () => {
    if (dateSelected) {
      setRoundSelected(true);
      setAnimationStep(2);
    } else {
      alert("먼저 7월 26일 날짜를 선택해주세요.");
    }
  };

  const handleReserveClick = () => {
    if (currentLevel === "low" && !roundSelected) {
      alert("먼저 회차를 선택해주세요.");
      return;
    }
    // 2단계 페이지로 넘어가기
  };

  return (
    <Container>
      <LeftSection>
        <PosterInfo id={posterId} />
      </LeftSection>
      <RightSection>
        {currentLevel === "low" ? (
          <>
            <AnimationArea $focus={animationStep === 0}>
              <SelectCalender onDateSelect={handleDateSelect} />
            </AnimationArea>
            <RoundWrapper>
              <p>회차</p>
              {animationStep >= 1 ? (
                <AnimationArea $focus={animationStep === 1}>
                  <Button
                    text="1회"
                    type="outline"
                    onClick={handleRoundClick}
                  />
                </AnimationArea>
              ) : (
                <Button text="1회" type="outline" onClick={handleRoundClick} />
              )}
              {animationStep >= 2 ? (
                <AnimationArea $focus={animationStep === 2}>
                  <Button text="예매하기" onClick={handleReserveClick} />
                </AnimationArea>
              ) : (
                <Button text="예매하기" onClick={handleReserveClick} />
              )}
            </RoundWrapper>
          </>
        ) : (
          <>
            <SelectCalender onDateSelect={handleDateSelect} />
            <RoundWrapper>
              <p>회차</p>
              <Button text="1회" type="outline" onClick={handleRoundClick} />
              <Button text="예매하기" onClick={handleReserveClick} />
            </RoundWrapper>
          </>
        )}
      </RightSection>
    </Container>
  );
};

export default SelectRound;
