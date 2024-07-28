import React, { useEffect, useState } from "react";
import PosterInfo from "../../components/poster/PosterInfo";
import SelectCalender from "../../components/calender/SelectCalender";
import Button from "../../components/button/Button";
import styled from "styled-components";
import { useAtom } from "jotai";
import { selectedPosterAtom, levelAtom, progressAtom } from "../../store/atom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1320px;
  height: 620px;
  flex-shrink: 0;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const RoundWrapper = styled.div`
  margin-left: 20px;
  padding: 5px;
`;

const SelectRound = ({ level }) => {
  const [, setLevel] = useAtom(levelAtom);
  const [, setProgress] = useAtom(progressAtom);
  const [selectedPoster] = useAtom(selectedPosterAtom);
  const [posterId, setPosterId] = useState(0);

  useEffect(() => {
    setLevel(level);
    setProgress(1);
    // 초급과 중급의 경우 기본을 0번째 배열로 설정
    if (level === "low" || level === "middle") {
      setPosterId(0);
    }
    // 고급 이상의 경우 공연 선택 시 선택한 포스터의 id를 받기
    else {
      setPosterId(selectedPoster);
    }
  }, [level, setLevel, setProgress, selectedPoster]);

  return (
    <Container>
      <LeftSection>
        <PosterInfo id={posterId} />
      </LeftSection>
      <RightSection>
        <SelectCalender />
        <RoundWrapper>
          <p>회차</p>
          <Button text="1회" type="outline" />
          <Button text="예매하기" />
        </RoundWrapper>
      </RightSection>
    </Container>
  );
};

export default SelectRound;
