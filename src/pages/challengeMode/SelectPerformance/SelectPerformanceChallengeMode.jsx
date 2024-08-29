import React, { useEffect } from "react";
import PosterList from "../../../components/poster/PosterList";
import { useAtom, useAtomValue } from "jotai";
import {
  selectedPosterAtom,
  levelAtom,
  progressAtom
} from "../../../store/atom";
import { useNavigate } from "react-router-dom";

const SelectPerformanceChallengeMode = () => {
  const selectedPoster = useAtomValue(selectedPosterAtom);
  const [, setSelectedPoster] = useAtom(selectedPosterAtom);
  const [, setLevel] = useAtom(levelAtom);
  const [, setProgress] = useAtom(progressAtom);

  const navigate = useNavigate();

  useEffect(() => {
    setProgress(1);
  }, [setProgress]);

  const handlePosterClick = (posterId) => {
    setSelectedPoster(posterId);
    navigate("../step1-2");
  };

  return <PosterList onPosterClick={handlePosterClick} />;
};

export default SelectPerformanceChallengeMode;
