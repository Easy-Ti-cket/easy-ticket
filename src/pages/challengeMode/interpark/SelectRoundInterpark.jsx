// SelectRoundInterpark.jsx
import React, { useEffect, useState } from "react";
import PosterInfo from "../../../components/poster/PosterInfo";
import SelectCalender from "../../../components/calender/SelectCalender";
import Button from "../../../components/button/Button";
import styled from "styled-components";
import { useAtom } from "jotai";
import {
  themeSiteAtom,
  selectedPosterAtom,
  levelAtom,
  progressAtom,
  postersAtom
} from "../../../store/atom";
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

const SelectRoundInterpark = () => {
  const [, setLevel] = useAtom(levelAtom);
  const [, setProgress] = useAtom(progressAtom);
  const [selectedPoster] = useAtom(selectedPosterAtom);
  const [posters] = useAtom(postersAtom); // 포스터 데이터 가져오기
  const [posterId, setPosterId] = useState(0);
  const [dateSelected, setDateSelected] = useState(false);
  const [roundSelected, setRoundSelected] = useState(false);
  const [timesButtons, setTimesButtons] = useState([]);
  const [correctRound, setCorrectRound] = useState(null); // 정답 회차 저장
  const navigate = useNavigate();
  const [, setThemeSite] = useAtom(themeSiteAtom);

  useEffect(() => {
    setProgress(1);
    setThemeSite("interpark"); // Interpark 테마 적용
    setLevel("high"); // 고급 난이도 설정
    setPosterId(0);
  }, [setLevel, setProgress, selectedPoster, setThemeSite]);

  const poster = posters[posterId];
  const posterDates = poster ? poster.date : [];
  const posterTimes = poster ? poster.time : {};

  // 날짜 정답 지정
  const handleDateSelect = (formattedDate) => {
    const correctDate = posterDates[0]; // 날짜 배열의 첫 번째 날짜를 정답으로 설정

    if (formattedDate === correctDate) {
      setDateSelected(true);
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
    navigate("/interpark/step2");
  };

  return (
    <Container>
      <LeftSection>
        <PosterInfo id={posterId} />
      </LeftSection>
      <RightSection>
        <SelectCalender
          onDateSelect={handleDateSelect}
          initialDate={
            posterDates.length > 0 ? new Date(posterDates[0]) : new Date()
          }
        />
        <RoundWrapper>
          <p>회차</p>
          {timesButtons.length > 0 ? (
            timesButtons.map((time, index) => (
              <Button
                key={index}
                text={`${index + 1}회 - ${time}`}
                type="outline--interpark"
                onClick={() => handleRoundClick(time)}
              />
            ))
          ) : (
            <Button
              text="날짜 선택 후 확인"
              type="outline--interpark"
              onClick={() => handleRoundClick("날짜 선택 후 확인")}
            />
          )}
          <Button
            text="예매하기"
            type="interpark"
            onClick={handleReserveClick}
          />
        </RoundWrapper>
      </RightSection>
    </Container>
  );
};

export default SelectRoundInterpark;
