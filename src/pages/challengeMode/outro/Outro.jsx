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
  text-align: center;
  padding: 50px;
`;

const RecordNavigate = styled.div`
  display: flex;
  align-items: start;
  gap: 100px;
  padding: 20px;
`;

const SuccessMessage = styled.h1`
  color: var(--key-color);
  font-family: "pretendardB";
  font-size: 70px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -3.5px;
  margin-bottom: 8px;
`;

const PracticeMessage = styled.span`
  color: var(--text-color);
  font-family: "pretendardM";
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -2px;
  padding: 10px;
  display: flex;
  gap: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
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

  //사용자 기록
  const minuteCount = useAtomValue(minuteCountAtom);
  const minuteRecord = Math.floor(minuteCount / 60);
  const secondRecord = minuteCount % 60;

  return (
    <Step5Container>
      <SuccessMessage>예매 성공!</SuccessMessage>
      <PracticeMessage>
        <div>내 기록 </div>
        <div style={{ color: "var(--point-color)" }}>
          {minuteRecord}분 {secondRecord} 초
        </div>
      </PracticeMessage>

      <RecordNavigate>
        <ButtonWrapper>
          <Button
            text="기록 저장하기"
            type="outro"
            onClick={handleSaveDataClick}
          />
          <Button
            text="기록 보러가기"
            type="outro"
            onClick={handleChallengeModeClick}
          />
          <Button
            text="다시 도전하기"
            type="outro"
            onClick={handlePracticeModeClick}
          />
        </ButtonWrapper>
      </RecordNavigate>
    </Step5Container>
  );
};

export default Outro;
