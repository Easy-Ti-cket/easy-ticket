import Button from "../../components/button/Button";
import styled from "styled-components";
import Tooltip from "../../components/tooltip/Tooltip";
import AnimationArea from "../../components/Animation";
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
  const levels = [
    { text: "초급", tooltip: "이 단계를 추천해요!", focus: true },
    { text: "중급", focus: false },
    { text: "고급", focus: false }
  ];
  return (
    <SelectLevelContainer>
      <Instructions>
        연습할 <span style={{ color: "var(--key-color)" }}>난이도</span>를
        선택해주세요
      </Instructions>
      <ButtonContainer>
        {levels.map(({ text, tooltip, focus }) => (
          <ButtonBox key={text}>
            {tooltip ? (
              <Tooltip text={tooltip}>
                <AnimationArea $focus={focus}>
                  <Button type="mode" text={text}></Button>
                </AnimationArea>
              </Tooltip>
            ) : (
              <AnimationArea $focus={focus}>
                <Button type="mode" text={text}></Button>
              </AnimationArea>
            )}
          </ButtonBox>
        ))}
      </ButtonContainer>
    </SelectLevelContainer>
  );
};

export default SelectLevel;
