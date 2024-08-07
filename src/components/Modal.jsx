import styled, { keyframes } from "styled-components";
import Button from "./button/Button";

//아래에서 위로 올라오는 애니메이션
const slideUp = keyframes`
    from {
        transform: translate(-50%, 100%)
    }
    to{
        transform: translate()(-50%,-50%)
    }
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(121, 121, 121, 0.3); /* 30% opacity color */
  z-index: 1000;
`;
const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -50%); /* 중앙으로 이동 */
  border-radius: 8px;
  width: 500px;
  height: 400px;
  padding: 20px;
  animation: ${slideUp} 0.2s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;
const ButtonWrap = styled.div`
  position: absolute;
  bottom: 20px;
`;
const Modal = ({ contents, onClick }) => {
  return (
    <Background>
      <ModalContainer>
        {contents}
        <ButtonWrap>
          <Button text="닫기" onClick={onClick} />
        </ButtonWrap>
      </ModalContainer>
    </Background>
  );
};

export default Modal;
