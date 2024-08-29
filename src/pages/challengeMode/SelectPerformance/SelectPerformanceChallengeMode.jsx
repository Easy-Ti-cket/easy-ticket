import React, { useEffect } from "react";
import PosterList from "../../../components/poster/PosterList";
import { useAtom, useAtomValue } from "jotai";
import {
  selectedPosterAtom,
  levelAtom,
  progressAtom,
  themeSiteAtom
} from "../../../store/atom";
import { useNavigate } from "react-router-dom";

const SelectPerformanceChallengeMode = () => {
  const [, setSelectedPoster] = useAtom(selectedPosterAtom); // 선택된 포스터의 id 상태 관리
  const [, setLevel] = useAtom(levelAtom);
  const [, setProgress] = useAtom(progressAtom);
  const themeSite = useAtomValue(themeSiteAtom);

  const navigate = useNavigate();

  // 테마 사이트와 포스터 id 정답 매칭
  const themeSiteMap = {
    interpark: 0,
    melonticket: 1,
    ticketlink: 2,
    yes24: 3
  };

  useEffect(() => {
    setProgress(1);
  }, [setProgress]);

  const handlePosterClick = (posterId) => {
    const correctPosterId = themeSiteMap[themeSite];

    if (posterId === correctPosterId) {
      setSelectedPoster(posterId);
      navigate("../step1-2");
    } else {
      return;
    }
  };

  return <PosterList onPosterClick={handlePosterClick} />;
};

export default SelectPerformanceChallengeMode;
