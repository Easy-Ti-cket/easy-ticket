import styled, { keyframes } from "styled-components";
import Button from "../button/Button";

// 아래에서 위로 올라오는 애니메이션
const slideUp = keyframes`
    from {
        transform: translate(-50%, 100%)
    }
    to {
        transform: translate(-50%, -50%)
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
  background-color: rgba(121, 121, 121, 0.3);
  z-index: 5000;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 400px;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  width: ${(props) => props.width || "500px"}; // props로 너비 추가
  height: ${(props) => props.height || "400px"}; // props로 높이 추가
  padding: 20px;
  animation: ${slideUp} 0.2s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ButtonWrap = styled.div`
  position: absolute;
  bottom: 20px;
`;

const Modal = (props) => {
  const {
    contents,
    onClick,
    buttonText = "닫기",
    width,
    height,
    buttonShow = true //닫기 버튼 보여줄 것인지
  } = props;
  return (
    <Background>
      <ModalContainer width={width} height={height}>
        {contents}
        {/*닫기 버튼 */}
        {buttonShow && (
          <ButtonWrap>
            <Button text={buttonText} onClick={onClick} />
          </ButtonWrap>
        )}
      </ModalContainer>
    </Background>
  );
};

export default Modal;
