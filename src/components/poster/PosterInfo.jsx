import React from "react";
import styled from "styled-components";
import Poster from "./Poster";
import { useAtom } from "jotai";
import { postersAtom } from "../../store/atom";

// 공연 제목
const PosterTitle = styled.h2`
  font-family: PretendardS;
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1px;
  width: 100%;
  transition: color 0.2s;
`;

// 공연 장소
const PosterVenue = styled.div`
  font-family: PretendardR;
  font-size: 18px;
  margin: 8px 4px;
  color: var(--text-color);
  width: 100%;
`;

// 공연 시간
const PosterTime = styled.div`
  font-family: PretendardR;
  font-size: 18px;
  margin: 8px 4px;
  color: var(--text-color);
  width: 100%;
`;

// 포스터 하나를 담는 컨테이너
const PosterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 351px;
  height: 482px;
  flex-shrink: 0;
  border-radius: 8px;
`;

const PosterInfo = ({ id }) => {
  const [posters] = useAtom(postersAtom);
  const poster = posters[id];

  return (
    <PosterContainer key={poster.id}>
      <PosterTitle>{poster.title_ko}</PosterTitle>
      <Poster id={id} />
      <PosterVenue>장소: {poster.venue}</PosterVenue>
      <PosterTime>시간: {poster.date}</PosterTime>
      <PosterTime>관람등급: {poster.age}</PosterTime>
    </PosterContainer>
  );
};

export default PosterInfo;
