import styled from "styled-components";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

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
const GoToMainModalCont = ({ setIsConfirm }) => {
  const navigate = useNavigate();
  const handleClick = (confirmNavigate) => {
    //확인을 누를 경우
    if (confirmNavigate) {
      navigate("/");
      setIsConfirm(() => false);
      return;
    }
    //취소를 누를 경우
    setIsConfirm(() => false);
  };
  return (
    <Container>
      <InfoContainer>
        <Info>메인화면으로 이동하시겠습니까?</Info>
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

export default GoToMainModalCont;
