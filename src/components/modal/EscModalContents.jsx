import styled from "styled-components";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import PauseIcon from "../../assests/images/icons/playPause/pause.svg?react";

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
  return (
    <Wrap>
      <InfoMessage>
        <PauseIcon width="35px" fill="var(--key-color)" />
        일시정지
      </InfoMessage>
      {/*계속하기 / 그만두기 버튼 */}
      <ButtonWrap>
        <Button text="계속하기" onClick={() => setIsPaused(false)} />
        <Button text="그만두기" type="outline" onClick={() => navigate("/")} />
      </ButtonWrap>
    </Wrap>
  );
};
export default EscModalContents;
