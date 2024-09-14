import React, { useEffect, useState } from "react";
import PosterInterpark from "./PosterInterpark";
import SelectCalendar from "../../../../components/calendar/SelectCalendar";
import Button from "../../../../components/button/Button";
import styled from "styled-components";
import { useAtomValue, useSetAtom } from "jotai";
import {
  themeSiteAtom,
  selectedPosterAtom,
  postersAtom
} from "../../../../store/atom";
import { useNavigate } from "react-router-dom";
import formatTime from "../../../../util/time";
import ErrorText from "../../../../components/errorText/ErrorText";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 50px;
  width: 100%;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 20px;
`;

const BoxWrapper = styled.div`
  border: 1px solid var(--fill-color);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
`;

const RoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding-left: 20px;
`;

const ErrorContents = styled.div`
  display: flex;
  font-size: 14px;
  color: var(--point-color);
`;

const SelectRoundInterpark = () => {
  const selectedPoster = useAtomValue(selectedPosterAtom);
  const posters = useAtomValue(postersAtom);
  const [dateSelected, setDateSelected] = useState(false);
  const [roundSelected, setRoundSelected] = useState(false);
  const [timesButtons, setTimesButtons] = useState([]);
  const [correctRound, setCorrectRound] = useState(null);
  const navigate = useNavigate();
  const setThemeSite = useSetAtom(themeSiteAtom);

  useEffect(() => {
    setThemeSite("interpark");
  }, [setThemeSite]);

  const poster = posters[selectedPoster];
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
    navigate("/challenge/interpark/step2");
  };
  return (
    <Container>
      <LeftSection>
        <PosterInterpark id={selectedPoster} />
      </LeftSection>
      <RightSection>
        <BoxWrapper>
          <p style={{ paddingLeft: "20px" }}>관람일</p>
          <SelectCalendar
            onDateSelect={handleDateSelect}
            initialDate={
              posterDates.length > 0 ? new Date(posterDates[0]) : new Date()
            }
          />
          {/*날짜 선택 에러 텍스트 */}
          {showErrorText.dateError && <ErrorText text={errorText.dateError} />}
          {/*날짜 선택 순서 에러 텍스트 */}
          {showErrorText.dateOrderError && (
            <ErrorText text={errorText.dateOrderError} />
          )}
          <span style={{ paddingLeft: "20px", display: "flex", gap: "8px" }}>
            회차
            <ErrorContents>(첫 번째 회차를 선택해 주세요)</ErrorContents>{" "}
          </span>
          {/*회차 선택 에러 텍스트 */}
          {showErrorText.roundSelectError && (
            <ErrorText text={errorText.roundSelectError} />
          )}
          {/*회차 선택 순서 에러 텍스트 */}
          {showErrorText.roundOrderError && (
            <ErrorText text={errorText.roundOrderError} />
          )}
          <RoundWrapper>
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
          </RoundWrapper>
        </BoxWrapper>
        <Button text="인증 후 예매하기" onClick={handleReserveClick} />
      </RightSection>
    </Container>
  );
};

export default SelectRoundInterpark;
