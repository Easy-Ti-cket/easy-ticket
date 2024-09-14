import React, { useEffect, useState } from "react";
import PosterInfo from "../../../components/poster/PosterInfo";
import SelectCalendar from "../../../components/calendar/SelectCalendar";
import Button from "../../../components/button/Button";
import styled from "styled-components";
import { useAtom, useSetAtom } from "jotai";
import {
  selectedPosterAtom,
  levelAtom,
  progressAtom,
  postersAtom,
  stepTextNumberAtom,
  helpTextNumberAtom
} from "../../../store/atom";
import AnimationArea from "../../../components/Animation";
import { useNavigate } from "react-router-dom";
import formatTime from "../../../util/time";
import ErrorText from "../../../components/errorText/errorText";

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
  const setHelpTextNumber = useSetAtom(helpTextNumberAtom);

  const [posters] = useAtom(postersAtom); // 포스터 데이터 가져오기
  const [posterId, setPosterId] = useState(0);
  const [dateSelected, setDateSelected] = useState(false);
  const [roundSelected, setRoundSelected] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [timesButtons, setTimesButtons] = useState([]);
  const [correctRound, setCorrectRound] = useState(null); // 정답 회차 저장
  const navigate = useNavigate();
  useEffect(() => {
    if (currentLevel !== "high") {
      setStepTextNumber(0);
      setHelpTextNumber(0);
    } else if (currentLevel === "high") {
      setStepTextNumber(1);
      setHelpTextNumber(1);
    }
  }, [currentLevel]);

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

  //에러 텍스트
  const [showErrorText, setShowErrorText] = useState({
    dateError: false,
    roundSelectError: false,
    dateOrderError: false,
    roundOrderError: false
  });
  const handleError = (errorItem) => {
    setShowErrorText(() => ({
      dateError: false,
      roundSelectError: false,
      dateOrderError: false,
      roundOrderError: false,
      [errorItem]: true
    }));
  };
  const resetError = () => {
    setShowErrorText(() => ({
      dateError: false,
      roundSelectError: false,
      dateOrderError: false,
      roundOrderError: false
    }));
  };
  const errorText = {
    dateError: "날짜를 다시 선택해 주세요",
    roundSelectError: "회차를 다시 선택해 주세요",
    dateOrderError: "공연을 관람할 날짜를 선택해 주세요",
    roundOrderError: "회차를 선택해 주세요"
  };

  //알림 모달
  const [concertTime, setConcertTime] = useState("");
  const handleDateSelect = (formattedDate) => {
    const correctDate = posterDates[0];
    if (formattedDate === correctDate) {
      setDateSelected(true);
      resetError();
      const timesArray = formatTime(posterTimes, formattedDate);
      setTimesButtons(timesArray);
      if (timesArray.length > 0) {
        setCorrectRound(timesArray[0]);
      }
    } else {
      handleError("dateError");
    }
  };

  const handleRoundClick = (time) => {
    if (dateSelected) {
      if (time === correctRound) {
        setConcertTime(time);
        alert(`${time} 공연을 예매합니다.`);
        resetError();
        setRoundSelected(true);
      } else {
        handleError("roundSelectError");
      }
    } else {
      handleError("dateOrderError");
    }
  };

  const handleReserveClick = () => {
    if (!roundSelected) {
      handleError("roundOrderError");
      return;
    }
    navigate("../step2");
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
            <SelectCalendar
              onDateSelect={handleDateSelect}
              initialDate={
                posterDates.length > 0 ? new Date(posterDates[0]) : new Date()
              }
            />
          </AnimationArea>
        ) : (
          <SelectCalendar
            onDateSelect={handleDateSelect}
            initialDate={
              posterDates.length > 0 ? new Date(posterDates[0]) : new Date()
            }
          />
        )}
        <RoundWrapper>
          {/*날짜 선택 에러 텍스트 */}
          {showErrorText.dateError && <ErrorText text={errorText.dateError} />}
          {/*날짜 선택 순서 에러 텍스트 */}
          {showErrorText.dateOrderError && (
            <ErrorText text={errorText.dateOrderError} />
          )}
          <p>회차</p>
          {/*회차 선택 에러 텍스트 */}
          {showErrorText.roundSelectError && (
            <ErrorText text={errorText.roundSelectError} />
          )}
          {/*회차 선택 순서 에러 텍스트 */}
          {showErrorText.roundOrderError && (
            <ErrorText text={errorText.roundOrderError} />
          )}
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
                    onClick={(time) => handleRoundClick(time)}
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
