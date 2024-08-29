import React, { useEffect, useState } from "react";
import PosterSection from "../../components/PosterSection";
import SelectCalender from "../../../../components/calender/SelectCalender";
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
  flex-direction: row;
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

const SelectRoundMelonticket = () => {
  const selectedPoster = useAtomValue(selectedPosterAtom);
  const posters = useAtomValue(postersAtom);
  const [dateSelected, setDateSelected] = useState(false);
  const [roundSelected, setRoundSelected] = useState(false);
  const [timesButtons, setTimesButtons] = useState([]);
  const [correctRound, setCorrectRound] = useState(null);
  const navigate = useNavigate();
  const setThemeSite = useSetAtom(themeSiteAtom);

  useEffect(() => {
    setThemeSite("melonticket");
  }, [setThemeSite]);

  const poster = posters[selectedPoster];
  const posterDates = poster?.date || [];
  const posterTimes = poster?.time || {};

  const handleDateSelect = (formattedDate) => {
    const correctDate = posterDates[0];
    if (formattedDate === correctDate) {
      setDateSelected(true);
      const timesArray = formatTime(posterTimes, formattedDate);
      setTimesButtons(timesArray);
      if (timesArray.length > 0) {
        setCorrectRound(timesArray[0]);
      }
    } else {
      alert("날짜를 다시 선택해주세요.");
    }
  };

  const handleRoundClick = (time) => {
    if (!dateSelected) {
      alert("먼저 올바른 날짜를 선택해주세요.");
      return;
    }
    if (time === correctRound) {
      alert(`${time}으로 공연을 예매합니다.`);
      setRoundSelected(true);
    } else {
      alert("회차를 다시 선택해주세요.");
    }
  };

  const handleReserveClick = () => {
    if (!roundSelected) {
      alert("먼저 회차를 선택해주세요.");
      return;
    }
    navigate("/challenge/melonticket/step2");
  };

  return (
    <Container>
      <UpperSection>
        <PosterSection id={SelectCalender} />
      </UpperSection>
      <LowerSection>
        <BoxWrapper>
          <TitleText>날짜 선택</TitleText>
          <SelectCalender
            onDateSelect={handleDateSelect}
            initialDate={
              posterDates.length > 0 ? new Date(posterDates[0]) : new Date()
            }
          />
        </BoxWrapper>
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
              onClick={() => alert("날짜를 먼저 선택해주세요.")}
            />
          )}
        </BoxWrapper>
      </LowerSection>
      <ButtonSection>
        <Button text="인증 후 예매하기" onClick={handleReserveClick} />
      </ButtonSection>
    </Container>
  );
};

export default SelectRoundMelonticket;
