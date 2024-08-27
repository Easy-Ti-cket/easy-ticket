import styled from "styled-components";
import AnimationArea from "../Animation";
import { useAtomValue } from "jotai";
import { levelAtom } from "../../store/atom";
import Button from "../button/Button";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const PaddingContainer = styled.div`
  padding: 6px;
`;
const NextAnimation = styled(AnimationArea)`
  padding: 3px;
`;

const PrevNextButton = ({ prevButtonOnClick, nextButtonOnClick }) => {
  const level = useAtomValue(levelAtom);

  return (
    <ButtonContainer>
      <PaddingContainer>
        <Button
          text="이전 단계"
          onClick={prevButtonOnClick}
          type="prev"
        ></Button>
      </PaddingContainer>
      <NextAnimation $focus={level === "low"}>
        <Button text="다음 단계" onClick={nextButtonOnClick}></Button>
      </NextAnimation>
    </ButtonContainer>
  );
};
export default PrevNextButton;
