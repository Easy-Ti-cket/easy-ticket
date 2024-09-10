import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "../modal/Modal";
import { createCaptchaImage } from "../../util/captcha";
import { getRandomString } from "../../util/getRandomString";
import RefreshIcon from "../../assests/images/icons/refresh.svg";
import VoiceIcon from "../../assests/images/icons/voice.svg";
import { speakCharacterByCharacter } from "../../util/speechVoice";
import ErrorText from "../ErrorText";

const TitleWrapper = styled.div`
  font-family: "pretendardB";
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const SubTextWrapper = styled.div`
  font-family: "pretendardM";
  font-size: 18px;
  margin: 0 10px;
  line-height: normal;
  color: var(--text-color);
  text-align: center;
`;

const CaptchaWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--sub-color);
  border-radius: 4px;
  padding: 8px;
`;

const CaptchaImage = styled.img`
  padding-right: 8px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60px;
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

const InputBox = styled.input`
  width: 224px;
  padding: 13px 20px;
  margin-bottom: 50px;
  border: ${(props) =>
    props.$hasError
      ? "2px solid var(--point-color)"
      : "1px solid var(--fill-color)"};
  border-radius: 4px;
  text-align: center;
  text-transform: uppercase;
`;

const SecureModalContents = ({ onClick }) => {
  const [randomString, setRandomString] = useState(getRandomString());
  const [inputValue, setInputValue] = useState("");
  const [captchaImage, setCaptchaImage] = useState("");
  //에러 css 용
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setCaptchaImage(createCaptchaImage(randomString));
  }, [randomString]);

  // 새로고침 시 다시 랜덤보안문자 로드
  const handleRefresh = () => {
    const newRandomString = getRandomString();
    setRandomString(newRandomString);
    setCaptchaImage(createCaptchaImage(newRandomString));
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toUpperCase());
  };

  const handleSpeak = async () => {
    await speakCharacterByCharacter(randomString);
  };

  const handleSubmit = () => {
    if (inputValue === randomString) {
      onClick(); // 정답 입력 시 모달창 닫기
    } else {
      setHasError(true);
      handleRefresh(); // 자동 새로고침
    }
  };

  return (
    <Modal
      width={"420px"}
      height={"420px"}
      contents={
        <>
          <TitleWrapper>인증예매</TitleWrapper>
          <SubTextWrapper>
            부정예매 방지를 위한 보안문자를 정확히 입력해주세요. 인증 후 좌석을
            선택할 수 있습니다.
          </SubTextWrapper>
          <CaptchaWrapper>
            <CaptchaImage src={captchaImage} alt="보안문자" />
            <IconWrapper>
              <Icon src={RefreshIcon} alt="새로고침" onClick={handleRefresh} />
              <Icon src={VoiceIcon} alt="음성 읽어주기" onClick={handleSpeak} />
            </IconWrapper>
          </CaptchaWrapper>
          {hasError && (
            <ErrorText text="보안문자가 올바르지 않습니다. 다시 시도해 주세요." />
          )}
          <InputBox
            type="text"
            placeholder="대소문자 구분 없이 문자 입력"
            value={inputValue}
            onChange={handleInputChange}
            $hasError={hasError}
          />
        </>
      }
      onClick={handleSubmit}
      buttonText="입력 완료"
    />
  );
};

export default SecureModalContents;
