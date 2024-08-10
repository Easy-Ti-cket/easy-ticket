import React from "react";
import styled from "styled-components";
import { useAtomValue } from "jotai";
import { practiceCountAtom } from "../../../store/atom";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/button/Button";
import Tooltip from "../../../components/tooltip/Tooltip";
import AnimationArea from "../../../components/Animation";

const SelectLevelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const Instructions = styled.p`
  margin-top: 20px;
  font-family: pretendardB;
  font-size: 25px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 50px;
`;

const ButtonBox = styled.div`
  margin: 30px;
`;

const SelectMode = () => {
  const PracticeCount = useAtomValue(practiceCountAtom);
  const nav = useNavigate();

  const recommendedMode = PracticeCount < 10 ? "연습모드" : "실전모드";
  const modes = ["연습모드", "실전모드"];

  const handleClick = (mode) => {
    if (mode === "연습모드") {
      nav("/select-level");
    } else {
      nav("/select-site");
    }
  };

  return (
    <SelectLevelContainer>
      <Instructions>
        연습할 <span style={{ color: "var(--key-color)" }}>모드</span>를
        선택해주세요
      </Instructions>
      <ButtonContainer>
        {modes.map((mode) => (
          <ButtonBox key={mode}>
            <Tooltip
              text={mode === recommendedMode ? "이 모드를 추천해요!" : ""}
            >
              <AnimationArea $focus={mode === recommendedMode}>
                <Button
                  text={mode}
                  type="mode"
                  onClick={() => handleClick(mode)}
                />
              </AnimationArea>
            </Tooltip>
          </ButtonBox>
        ))}
      </ButtonContainer>
    </SelectLevelContainer>
  );
};

export default SelectMode;
