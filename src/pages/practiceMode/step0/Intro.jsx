import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { themeSiteAtom } from "../../../store/atom";
import { levelAtom, progressAtom } from "../../../store/atom";
import Button from "../../../components/button/Button";
import AnimationArea from "../../../components/Animation";
import IntroMessage from "./introMessage/IntroMessage";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Intro = () => {
  const navigate = useNavigate();
  const [level] = useAtom(levelAtom);
  const [progress, setProgress] = useAtom(progressAtom);
  const [themeSite, setThemeSite] = useAtom(themeSiteAtom);

  useEffect(() => {
    // 사이트 선택 시 default 테마를 적용
    if (window.location.pathname === "/progress/step0") {
      setThemeSite("practice");
    }
  }, [setThemeSite]);

  useEffect(() => {
    setProgress(0);
  }, [setProgress]);

  const handleClick = () => {
    setProgress(1);
    if (level === "low" || level === "middle") {
      navigate("/progress/step1-2");
      return;
    }
    navigate("/progress/step1-1");
  };

  return (
    <IntroContainer>
      <IntroMessage />
      <AnimationArea $focus={level === "low"}>
        <Button text="시작하기" onClick={handleClick} />
      </AnimationArea>
    </IntroContainer>
  );
};

export default Intro;
