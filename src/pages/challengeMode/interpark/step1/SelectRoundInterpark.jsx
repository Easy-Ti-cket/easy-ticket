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
    if (dateSelected) {
      if (time === correctRound) {
        alert(`${time}으로 공연을 예매합니다.`);
        setRoundSelected(true);
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
          <p style={{ paddingLeft: "20px" }}>회차</p>
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
