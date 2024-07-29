import Button from "../../components/button/Button";
import styled from "styled-components";
import Tooltip from "../../components/tooltip/Tooltip";
import AnimationArea from "../../components/Animation";
import { useSetAtom, useAtomValue } from "jotai";
import { levelAtom, practiceCountAtom } from "../../store/atom";
import { useNavigate } from "react-router-dom";

const SelectLevelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 1320px;
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
`;
const ButtonBox = styled.div`
  margin: 30px;
`;

const SelectLevel = () => {
  const setLevel = useSetAtom(levelAtom);
  const PracticeCount = useAtomValue(practiceCountAtom);

  const levels = ["초급", "중급", "고급"];
  const nav = useNavigate();
  const handleClick = (e) => {
    setLevel(
      e.target.innerText === "초급"
        ? "low"
        : e.target.innerText === "중급"
          ? "middle"
          : "high"
    );
    nav("/progress/step0");
  };

  const recommenedLevel =
    PracticeCount < 5
      ? "초급"
      : PracticeCount >= 5 && PracticeCount < 10
        ? "중급"
        : "고급";
  return (
    <SelectLevelContainer>
      <Instructions>
        연습할 <span style={{ color: "var(--key-color)" }}>난이도</span>를
        선택해주세요
      </Instructions>
      <ButtonContainer>
        {levels.map((text) => (
          <ButtonBox key={text}>
            {text == recommenedLevel ? (
              <Tooltip text={"이 단계를 추천해요!"}>
                <AnimationArea $focus={true}>
                  <Button
                    type="mode"
                    text={text}
                    onClick={handleClick}
                  ></Button>
                </AnimationArea>
              </Tooltip>
            ) : (
              <AnimationArea $focus={false}>
                <Button type="mode" text={text} onClick={handleClick}></Button>
              </AnimationArea>
            )}
          </ButtonBox>
        ))}
      </ButtonContainer>
    </SelectLevelContainer>
  );
};

export default SelectLevel;
