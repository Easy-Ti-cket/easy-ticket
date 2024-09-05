import React from "react";
import PosterList from "../../../components/poster/PosterList";
import { useAtom, useSetAtom } from "jotai";
import {
  selectedPosterAtom,
  levelAtom,
  progressAtom,
  stepTextNumberAtom,
  helpTextNumberAtom
} from "../../../store/atom";
import { useNavigate } from "react-router-dom";

const SelectPerformance = () => {
  const [, setSelectedPoster] = useAtom(selectedPosterAtom); // 선택된 포스터의 id 상태 관리
  const [, setProgress] = useAtom(progressAtom);

  const setStepTextNumber = useSetAtom(stepTextNumberAtom);
  const setHelpTextNumber = useSetAtom(helpTextNumberAtom);

  const navigate = useNavigate();
  setProgress(1);
  const handlePosterClick = (posterId) => {
    setSelectedPoster(posterId);
    setStepTextNumber((prev) => prev + 1);
    setHelpTextNumber((prev) => prev + 1);
    navigate("/progress/step1-2");
  };

  return <PosterList onPosterClick={handlePosterClick} />;
};

export default SelectPerformance;
