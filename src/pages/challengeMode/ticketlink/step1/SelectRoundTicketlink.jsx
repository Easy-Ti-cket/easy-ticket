import React, { useEffect, useState } from "react";
import PosterSection from "../../components/PosterSection";
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
import ErrorTooltip from "../../../../components/tooltip/ErrorTooltip";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20vh;
  box-sizing: border-box;
`;

const UpperSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
`;

const LowerSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: flex-start;
  align-items: flex-start;
`;

const BoxWrapper = styled.div`
  width: auto;
  border: 1px solid var(--fill-color);
  padding: 20px;
  border-radius: 8px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.p`
  font-size: 18px;
  white-space: nowrap;
  margin: 0;
`;

const ButtonSection = styled.div`
  width: 100%;
  display: flex;
  padding-top: 20px;
  justify-content: flex-end;
`;

const ErrorTooltipCont = styled.div`
  font-size: 18px;
  color: var(--text-color);
`;

//에러 툴팁 + 컨텐츠
const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SelectRoundTicketlink = () => {
  const selectedPoster = useAtomValue(selectedPosterAtom);
  const posters = useAtomValue(postersAtom);
  const id = useAtomValue(selectedPosterAtom);
  const [dateSelected, setDateSelected] = useState(false);
  const [roundSelected, setRoundSelected] = useState(false);
  const [timesButtons, setTimesButtons] = useState([]);
  const [correctRound, setCorrectRound] = useState(null);
  const navigate = useNavigate();

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

  const poster = posters[selectedPoster];
  const posterDates = poster?.date || [];
  const posterTimes = poster?.time || {};

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
    navigate("/challenge/ticketlink/step2");
  };

  return (
    <Container>
      <UpperSection>
        <PosterSection id={id} />
      </UpperSection>
      <LowerSection>
        <BoxWrapper>
          <TitleText>날짜 선택</TitleText>
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
        </BoxWrapper>

        <ErrorContainer>
          <ErrorTooltip
            contents={
              <ErrorTooltipCont>첫 번째 회차를 선택해 주세요</ErrorTooltipCont>
            }
          />
          <BoxWrapper>
            <TitleText>회차 선택</TitleText>
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
                onClick={() =>
                  setShowErrorText((prev) => ({
                    ...prev,
                    dateOrderError: true
                  }))
                }
              />
            )}
            {/*회차 선택 에러 텍스트 */}
            {showErrorText.roundSelectError && (
              <ErrorText text={errorText.roundSelectError} />
            )}
            {/*회차 선택 순서 에러 텍스트 */}
            {showErrorText.roundOrderError && (
              <ErrorText text={errorText.roundOrderError} />
            )}
          </BoxWrapper>
        </ErrorContainer>
      </LowerSection>
      <ButtonSection>
        <Button text="인증 후 예매하기" onClick={handleReserveClick} />
      </ButtonSection>
    </Container>
  );
};

export default SelectRoundTicketlink;
