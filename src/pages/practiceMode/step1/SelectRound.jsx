import React, { useEffect, useState } from "react";
import PosterInfo from "../../../components/poster/PosterInfo";
import SelectCalender from "../../../components/calender/SelectCalender";
import Button from "../../../components/button/Button";
import styled from "styled-components";
import { useAtom } from "jotai";
import {
  selectedPosterAtom,
  levelAtom,
  progressAtom,
  postersAtom
} from "../../../store/atom";
import AnimationArea from "../../../components/Animation";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
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
  const [posters] = useAtom(postersAtom); // 포스터 데이터 가져오기
  const [posterId, setPosterId] = useState(0);
  const [dateSelected, setDateSelected] = useState(false);
  const [roundSelected, setRoundSelected] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setProgress(1);
    if (currentLevel === "low" || currentLevel === "middle") {
      setPosterId(0);
    } else {
      setPosterId(selectedPoster);
    }
  }, [currentLevel, setLevel, setProgress, selectedPoster]);

  const poster = posters[posterId];
  const posterDates = poster ? poster.date : [];

  // 날짜 정답 지정
  const handleDateSelect = (formattedDate) => {
    console.log("Selected Date:", formattedDate);
    console.log("Poster Dates:", posterDates);

    // 포스터 날짜 배열에서 첫 번째 날짜를 정답으로 설정
    const correctDate = posterDates.length > 0 ? posterDates[0] : "";

    // 날짜 비교 시 시간 부분 제거
    const formattedDateWithoutTime = formattedDate.split("T")[0];
    const correctDateWithoutTime = correctDate.split("T")[0];

    console.log("Correct Date:", correctDateWithoutTime);

    if (formattedDateWithoutTime === correctDateWithoutTime) {
      setDateSelected(true);
      setAnimationStep(1);
    } else {
      alert("날짜를 다시 선택해주세요.");
    }
  };

  const handleRoundClick = () => {
    if (dateSelected) {
      setRoundSelected(true);
      setAnimationStep(2);
    } else {
      alert("먼저 올바른 날짜를 선택해주세요.");
    }
  };

  const handleReserveClick = () => {
    if (!roundSelected) {
      alert("먼저 회차를 선택해주세요.");
      return;
    }
    navigate("/progress/step2");
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
              <SelectCalender
                onDateSelect={handleDateSelect}
                initialDate={
                  posterDates.length > 0 ? new Date(posterDates[0]) : new Date()
                }
              />
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
            <SelectCalender
              onDateSelect={handleDateSelect}
              initialDate={
                posterDates.length > 0 ? new Date(posterDates[0]) : new Date()
              }
            />
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
