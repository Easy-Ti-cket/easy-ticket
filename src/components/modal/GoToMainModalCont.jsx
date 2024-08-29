import styled from "styled-components";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { useSetAtom } from "jotai";
import { levelAtom, themeSiteAtom, timerControlAtom } from "../../store/atom";
import resetAtom from "../../util/resetAtom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 30px;
`;

const InfoContainer = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Info = styled.span`
  color: ${(props) => props.$highlight && "var(--key-color)"};
`;
const ButtonWrap = styled.div`
  display: flex;
`;
const GoToLocationModalCont = ({
  setIsConfirm,
  navLocation = "/",
  levelTheme = null
}) => {
  const navigate = useNavigate();
  //타이머 제어
  const setTimerControl = useSetAtom(timerControlAtom);
  //level 및 theme 제어
  const setLevel = useSetAtom(levelAtom);
  const setTheme = useSetAtom(themeSiteAtom);
  const practiceMode = ["low", "middle", "high"];
  const challengeMode = ["interpark", "ticketlink", "yes24", "melonticket"];

  const handleClick = (confirmNavigate) => {
    //확인을 누를 경우
    if (confirmNavigate) {
      //levelTheme이 존재 : 헤더를 통한 이동
      if (levelTheme && practiceMode.includes(levelTheme)) {
        setLevel(levelTheme);
      }
      if (levelTheme && challengeMode.includes(levelTheme)) {
        setTheme(levelTheme);
      }
      setTimerControl(() => false);
      setIsConfirm(() => false);
      resetAtom();
      navigate(navLocation);
      return;
    }
    //취소를 누를 경우
    setTimerControl(() => false);
    setIsConfirm(() => false);
  };
  return (
    <Container>
      <InfoContainer>
        <Info>이동하시겠습니까?</Info>
        <Info $highlight={true}>진행상황은 저장되지 않습니다</Info>
      </InfoContainer>
      <ButtonWrap>
        <Button type="modal" text="확인" onClick={() => handleClick(true)} />
        <Button
          type="modal-outline"
          text="취소"
          onClick={() => handleClick(false)}
        />
      </ButtonWrap>
    </Container>
  );
};

export default GoToLocationModalCont;
