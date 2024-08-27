import styled from "styled-components";
import Button from "../../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { useAtomValue } from "jotai";
import {
  userNameAtom,
  themeSiteAtom,
  minuteCountAtom
} from "../../../store/atom";
import saveUserData from "../../../apis/saveUserData";
import resetAtom from "../../../util/resetAtom";

const Step5Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  text-align: center;
`;

const SuccessMessage = styled.h1`
  color: var(--key-color);
  font-family: "pretendardB";
  font-size: 70px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -3.5px;
  margin-bottom: 20px;
`;

const PracticeMessage = styled.p`
  color: var(--text-color);
  font-family: "pretendardM";
  font-size: 40px;
  font-weight: 600;
  letter-spacing: -2px;
  margin-bottom: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Outro = () => {
  const navigate = useNavigate();
  // 기록 저장에 필요한 atom 불러오기
  const userName = useAtomValue(userNameAtom);
  const themeSite = useAtomValue(themeSiteAtom);
  const timeSpent = useAtomValue(minuteCountAtom);

  // 다시 도전하기(사이트 선택)
  const handlePracticeModeClick = () => {
    resetAtom();
    navigate("/select-site");
  };

  // 기록 보기
  const handleChallengeModeClick = () => {
    resetAtom();
    navigate("/record");
  };

  // 기록 저장하기
  const handleSaveDataClick = () => {
    saveUserData(userName, themeSite, timeSpent);
    alert("기록을 저장했습니다.");
  };

  return (
    <Step5Container>
      <SuccessMessage>예매 성공!</SuccessMessage>
      {/* 클리어 시간 추가 필요*/}
      <Button text="기록 저장하기" onClick={handleSaveDataClick} />
      <PracticeMessage>다시 도전하시겠습니까?</PracticeMessage>
      <ButtonWrapper>
        <Button text="다시 도전하기" onClick={handlePracticeModeClick} />
        <Button
          text="기록 보러가기"
          type="outline"
          onClick={handleChallengeModeClick}
        />
      </ButtonWrapper>
    </Step5Container>
  );
};

export default Outro;
