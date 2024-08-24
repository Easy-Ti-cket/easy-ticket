import React, { useEffect, useState } from "react";
import PosterInterpark from "./PosterInterpark";
import SelectCalender from "../../../../components/calender/SelectCalender";
import Button from "../../../../components/button/Button";
import styled from "styled-components";
import { useAtom } from "jotai";
import {
  themeSiteAtom,
  selectedPosterAtom,
  levelAtom,
  progressAtom,
  postersAtom
} from "../../../../store/atom";
import { useNavigate } from "react-router-dom";
import formatTime from "../../../../util/time";

const Container = styled.div`
  display: flex;
  justify-content: space-between; /* 좌우로 공간 배분 */
  align-items: flex-start; /* 상단 정렬 */
  padding: 20px 50px;
  width: 100%;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 콘텐츠 상단 정렬 */
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 콘텐츠 상단 정렬 */
  align-items: flex-start;
  padding-left: 20px; /* 좌측 여백 추가 */
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
  gap: 10px; /* 버튼 사이의 간격 추가 */
  width: 100%;
  padding-left: 20px;
`;

const SelectRoundInterpark = () => {
  const [, setLevel] = useAtom(levelAtom);
  const [, setProgress] = useAtom(progressAtom);
  const [selectedPoster] = useAtom(selectedPosterAtom);
  const [posters] = useAtom(postersAtom);
  const [posterId, setPosterId] = useState(0);
  const [dateSelected, setDateSelected] = useState(false);
  const [roundSelected, setRoundSelected] = useState(false);
  const [timesButtons, setTimesButtons] = useState([]);
  const [correctRound, setCorrectRound] = useState(null);
  const navigate = useNavigate();
  const [, setThemeSite] = useAtom(themeSiteAtom);

  useEffect(() => {
    setProgress(1);
    setThemeSite("interpark");
    setLevel("high");
    setPosterId(0);
  }, [setLevel, setProgress, selectedPoster, setThemeSite]);

  const poster = posters[posterId];
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
        <PosterInterpark id={posterId} />
      </LeftSection>
      <RightSection>
        <BoxWrapper>
          <p style={{ paddingLeft: "20px" }}>관람일</p>
          <SelectCalender
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
