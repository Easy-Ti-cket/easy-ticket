import React from "react";
import styled from "styled-components";
import { useAtom } from "jotai";
import { postersAtom } from "../../store/atom";

const PosterImage = styled.img`
  width: 221px;
  height: 307px;
  object-fit: cover; // 이미지 크기를 전부 통일하게 위해 사용
  margin: 10px;
`;

// json 파일에서 저장해둔 포스터 사진 src을 불러옴.
const Poster = ({ id }) => {
  const [posters] = useAtom(postersAtom);
  const poster = posters[id]; // 배열 인덱스로 접근 (id = array index)
  console.log(poster.src);
  return <PosterImage src={poster.src} alt={poster.title_ko} />;
};

export default Poster;
