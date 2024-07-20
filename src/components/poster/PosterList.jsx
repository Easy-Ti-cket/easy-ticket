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
  text-align: left;
  width: 100%;
  height: 60px;
  transition: color 0.2s;
`;

// 공연 장소
const PosterVenue = styled.div`
  font-family: PretendardR;
  font-size: 18px;
  margin: 8px 0;
  color: var(--text-color);
  text-align: left;
  width: 100%;
  transition: color 0.2s;
`;

// 공연 시간
const PosterTime = styled.div`
  font-family: PretendardR;
  font-size: 18px;
  margin: 8px 0;
  color: var(--text-color);
  text-align: left;
  width: 100%;
  transition: color 0.2s;
`;

// 포스터 전체를 담는 컨테이너
const PosterListContainer = styled.div`
  width: 1320px;
  height: 620px;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
`;

// 포스터 하나를 담는 컨테이너
const PosterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  height: 471px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: var(--sub-color);
  padding: 4px 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  /* hover 시 색상 적절히 변하도록 css 적용 */
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
    background-color: var(--key-color);
    color: white;
  }

  &:hover ${PosterTitle}, &:hover ${PosterVenue}, &:hover ${PosterTime} {
    color: white;
  }
`;

const PosterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const PosterList = () => {
  const [posters] = useAtom(postersAtom);

  const handlePosterClick = (poster) => {
    // 나중에 구현
    alert("클릭");
  };

  return (
    <PosterListContainer>
      {posters.map((poster, index) => (
        <PosterContainer
          key={poster.id}
          onClick={() => handlePosterClick(poster)}
        >
          <Poster id={index} />
          <PosterInfo>
            <PosterTitle>{poster.title_ko}</PosterTitle>
            <PosterVenue>장소: {poster.venue}</PosterVenue>
            <PosterTime>시간: {poster.date}</PosterTime>
          </PosterInfo>
        </PosterContainer>
      ))}
    </PosterListContainer>
  );
};

export default PosterList;
