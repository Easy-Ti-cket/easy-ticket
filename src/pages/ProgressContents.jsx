import styled from "styled-components";
import ProgressBar from "../components/ProgressBar";
import Timer from "../components/timer/Timer";
import { Outlet } from "react-router-dom";
import Button from "../components/button/Button";
import { useState } from "react";
import Modal from "../components/Modal";

//ProgressBar+ContentsBox Container
const ProgressContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const ProgressBarBox = styled.div`
  min-height: 145px;
`;

const TextBox = styled.div`
  width: 1320px;
  min-height: 122px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
//화면 높이에 따라 줄어드는 contentsBox, min-height: 500px
const ContentsBox = styled.div`
  width: 1320px;
  flex-grow: 1;
  margin-bottom: 30px;
  min-height: 500px;
  //도움말 버튼 부모 position
  position: relative;
  // 삭제할 코드
  background-color: #f6f6f6;
  border: 1px solid #000000;
`;
//도움말 버튼 컨테이너
const ButtonContainer = styled.div`
  position: absolute;
  top: -80px;
  right: 0;
`;
/*난이도별 contents를 children으로 받아서 ProgressBar와 함께 렌더링
Outlet으로 대체 예정*/
const ProgressContents = ({ text }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <ProgressContentsContainer>
      {/*프로그래스 바*/}
      <ProgressBarBox>
        <ProgressBar />
      </ProgressBarBox>
      <Timer type={"minute"} second={1000}></Timer>
      <TextBox>{text}</TextBox>
      <ContentsBox>
        {/*도움말 버튼 */}
        <ButtonContainer>
          <Button
            onClick={handleModalOpen}
            text="도움이 필요하신가요?"
            type="help"
          />
        </ButtonContainer>
        {/*도움말 모달창*/}
        {isModalOpen && (
          <Modal onClick={handleModalClose} contents="내용입니다" />
        )}
        <Outlet />
      </ContentsBox>
    </ProgressContentsContainer>
  );
};

export default ProgressContents;
