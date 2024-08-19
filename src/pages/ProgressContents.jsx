import styled from "styled-components";
import ProgressBar from "../components/ProgressBar";
import Timer from "../components/timer/Timer";
import { Outlet } from "react-router-dom";
import Button from "../components/button/Button";
import { useState } from "react";
import Modal from "../components/modal/Modal";
import { useAtomValue } from "jotai";
import { themeSiteAtom, levelAtom } from "../store/atom";

//ProgressBar+ContentsBox Container
const ProgressContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  border: var(--fill-color) 1px solid;
  border-radius: 8px;
  display: inline-flex;
  justify-content: center;
  padding: 30px 0;
  //도움말 버튼 부모 position
  position: relative;
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
  //레벨 별 타이머 출력 설정
  const level = useAtomValue(levelAtom);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const theme = useAtomValue(themeSiteAtom);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // 실전 모드인 경우(테마 정보가 있는 경우) 도움말 버튼 숨기기
  const showHelpButton = !theme;

  return (
    <ProgressContentsContainer>
      {/*프로그래스 바*/}
      <ProgressBarBox>
        <ProgressBar />
      </ProgressBarBox>
      {/*고급 level일 경우에만 Timer 설정 */}
      {/*모달이 열렸을 경우 Timer 정지*/}
      {level === "high" && (
        <Timer type={"minute"} second={1000} isModalOpen={isModalOpen} />
      )}
      <TextBox>{text}</TextBox>
      <ContentsBox>
        {/*도움말 버튼 */}
        {showHelpButton && (
          <ButtonContainer>
            <Button
              onClick={handleModalOpen}
              text="도움이 필요하신가요?"
              type="help"
            />
          </ButtonContainer>
        )}
        {/* 도움말 모달창 */}
        {isModalOpen && (
          <Modal onClick={handleModalClose} contents="내용입니다" />
        )}
        <Outlet />
      </ContentsBox>
    </ProgressContentsContainer>
  );
};

export default ProgressContents;
