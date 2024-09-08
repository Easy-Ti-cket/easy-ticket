import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { levelAtom, progressAtom, themeSiteAtom } from "../../../store/atom";
import Button from "../../../components/button/Button";
import AnimationArea from "../../../components/Animation";
import ChallengeIntroMessage from "./introMessage/ChallengeIntroMessage";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ChallengeIntro = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useAtom(progressAtom);
  const themeSite = useAtomValue(themeSiteAtom);
  const setLevel = useSetAtom(levelAtom);

  useEffect(() => {
    setProgress(0);
    setLevel("high");
  }, [setProgress]);

  const handleClick = () => {
    setProgress(1);
    switch (themeSite) {
      case "interpark":
        navigate("../step1-1");
        break;
      case "melonticket":
        navigate("../step1-1");
        break;
      case "ticketlink":
        navigate("../step1-1");
        break;
      case "yes24":
        navigate("../step1-1");
        break;
      default:
        "practice";
        break;
    }
  };

  return (
    <IntroContainer>
      <ChallengeIntroMessage />
      <AnimationArea>
        <Button text="시작하기" onClick={handleClick} />
      </AnimationArea>
    </IntroContainer>
  );
};

export default ChallengeIntro;
