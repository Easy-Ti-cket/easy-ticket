import React from "react";
import PosterList from "../../components/poster/PosterList";
import { useAtom } from "jotai";
import { selectedPosterAtom, levelAtom, progressAtom } from "../../store/atom";
import { useNavigate } from "react-router-dom";

const SelectPerformance = () => {
  const [, setSelectedPoster] = useAtom(selectedPosterAtom); // 선택된 포스터의 id 상태 관리
  const [, setLevel] = useAtom(levelAtom);
  const [, setProgress] = useAtom(progressAtom);
  const navigate = useNavigate();

  setLevel("high");
  setProgress(1);

  const handlePosterClick = (posterId) => {
    setSelectedPoster(posterId);
    navigate("/step1-2");
  };

  return <PosterList onPosterClick={handlePosterClick} />;
};

export default SelectPerformance;
