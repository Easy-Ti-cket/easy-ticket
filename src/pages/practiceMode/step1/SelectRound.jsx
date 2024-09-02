import React, { useEffect, useState } from "react";
import PosterInfo from "../../../components/poster/PosterInfo";
import SelectCalender from "../../../components/calender/SelectCalender";
import Button from "../../../components/button/Button";
import styled from "styled-components";
import { useAtom, useSetAtom } from "jotai";
import {
  selectedPosterAtom,
  levelAtom,
  progressAtom,
  postersAtom,
  stepTextNumberAtom
} from "../../../store/atom";
import AnimationArea from "../../../components/Animation";
import { useNavigate } from "react-router-dom";
import formatTime from "../../../util/time";

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

  const setStepTextNumber = useSetAtom(stepTextNumberAtom);

  const [posters] = useAtom(postersAtom); // 포스터 데이터 가져오기
  const [posterId, setPosterId] = useState(0);
  const [dateSelected, setDateSelected] = useState(false);
  const [roundSelected, setRoundSelected] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [timesButtons, setTimesButtons] = useState([]);
  const [correctRound, setCorrectRound] = useState(null); // 정답 회차 저장
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
  const posterTimes = poster ? poster.time : {};

  // 날짜 정답 지정
  const handleDateSelect = (formattedDate) => {
    const correctDate = posterDates[0]; // 날짜 배열의 첫 번째 날짜를 정답으로 설정

    if (formattedDate === correctDate) {
      setDateSelected(true);
      setAnimationStep(1);
      const timesArray = formatTime(posterTimes, formattedDate);
      setTimesButtons(timesArray);

      // 회차 데이터에서 첫 번째 회차를 정답으로 설정
      if (timesArray.length > 0) {
        setCorrectRound(timesArray[0]);
      }
    } else {
      alert("날짜를 다시 선택해주세요.");
    }
  };

  // 회차 선택
  const handleRoundClick = (time) => {
    if (dateSelected) {
      if (time === correctRound) {
        setStepTextNumber((prev) => prev + 1);
        alert(`${time}으로 공연을 예매합니다.`);
        setRoundSelected(true);
        setAnimationStep(2);
      } else {
        alert("회차를 다시 선택해주세요.");
      }
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
        {/* 초급 난이도에만 캘린더 애니메이션 적용 */}
        {currentLevel === "low" ? (
          <AnimationArea $focus={animationStep === 0}>
            <SelectCalender
              onDateSelect={handleDateSelect}
              initialDate={
                posterDates.length > 0 ? new Date(posterDates[0]) : new Date()
              }
            />
          </AnimationArea>
        ) : (
          <SelectCalender
            onDateSelect={handleDateSelect}
            initialDate={
              posterDates.length > 0 ? new Date(posterDates[0]) : new Date()
            }
          />
        )}
        <RoundWrapper>
          <p>회차</p>
          {/* 초급 난이도에만 회차 버튼 애니메이션 적용 */}
          {currentLevel === "low" ? (
            <>
              <AnimationArea $focus={animationStep === 1}>
                {timesButtons.length > 0 ? (
                  timesButtons.map((time, index) => (
                    <Button
                      key={index}
                      text={`${index + 1}회 - ${time}`}
                      type="outline"
                      onClick={() => handleRoundClick(time)}
                    />
                  ))
                ) : (
                  <Button
                    text="날짜 선택 후 확인"
                    type="outline"
                    onClick={() => handleRoundClick("날짜 선택 후 확인")}
                  />
                )}
              </AnimationArea>
              {/* 초급 난이도에만 얘매 버튼 애니메이션 적용 */}
              <AnimationArea $focus={animationStep === 2}>
                <Button text="예매하기" onClick={handleReserveClick} />
              </AnimationArea>
            </>
          ) : (
            <>
              {timesButtons.length > 0 ? (
                timesButtons.map((time, index) => (
                  <Button
                    key={index}
                    text={`${index + 1}회 - ${time}`}
                    type="outline"
                    onClick={() => handleRoundClick(time)}
                  />
                ))
              ) : (
                <Button
                  text="날짜 선택 후 확인"
                  type="outline"
                  onClick={() => handleRoundClick("날짜 선택 후 확인")}
                />
              )}
              <Button text="예매하기" onClick={handleReserveClick} />
            </>
          )}
        </RoundWrapper>
      </RightSection>
    </Container>
  );
};

export default SelectRound;
