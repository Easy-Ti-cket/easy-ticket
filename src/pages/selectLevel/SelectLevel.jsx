import Button from "../../components/button/Button";
import styled from "styled-components";
import Tooltip from "../../components/tooltip/Tooltip";
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
  return (
    <SelectLevelContainer>
      <Instructions>
        연습할 <span style={{ color: "var(--key-color)" }}>난이도</span>를
        선택해주세요
      </Instructions>
      <ButtonContainer>
        <ButtonBox>
          <Tooltip text="이 단계를 추천해요!">
            <Button type="mode" text="초급"></Button>
          </Tooltip>
        </ButtonBox>
        <ButtonBox>
          <Button type="mode" text="중급"></Button>
        </ButtonBox>
        <ButtonBox>
          <Button type="mode" text="고급"></Button>
        </ButtonBox>
      </ButtonContainer>
    </SelectLevelContainer>
  );
};

export default SelectLevel;
