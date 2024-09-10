import styled from "styled-components";
import Button from "../../button/Button";
import { useNavigate } from "react-router-dom";
import PauseIcon from "/public/assets/images/icons/playPause/pause.svg?react";
import { useSetAtom } from "jotai";
import { timerControlAtom } from "../../../store/atom";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;
const InfoMessage = styled.span`
  font-size: 35px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  transform: translateX(-10px);
`;
const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const EscModalContents = ({ setIsPaused }) => {
  const navigate = useNavigate();
  //타이머 제어
  const setTimerControl = useSetAtom(timerControlAtom);
  const handleKeep = () => {
    setIsPaused(() => false);
    setTimerControl(() => false);
  };
  const handleQuit = () => {
    setTimerControl(() => false);
    navigate("/");
  };
  return (
    <Wrap>
      <InfoMessage>
        <PauseIcon width="35px" fill="var(--key-color)" />
        일시정지
      </InfoMessage>
      {/*계속하기 / 그만두기 버튼 */}
      <ButtonWrap>
        <Button text="계속하기" onClick={handleKeep} />
        <Button text="그만두기" type="outline" onClick={handleQuit} />
      </ButtonWrap>
    </Wrap>
  );
};
export default EscModalContents;
