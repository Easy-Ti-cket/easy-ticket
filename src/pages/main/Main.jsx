import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../../components/button/Button";
import Animation from "../../components/Animation";
import { useAtom, useSetAtom } from "jotai";
import {
  userNameAtom,
  themeSiteAtom,
  levelAtom,
  userNameErrorAtom
} from "../../store/atom";
import { useNavigate } from "react-router-dom";
import MainImage from "/assets/images/main.png";
import { InputField } from "../../components/input/InputStyle";
import ErrorTooltip from "../../components/tooltip/ErrorTooltip";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  text-align: center;
`;

const Instructions = styled.p`
  margin-top: 20px;
  font-family: pretendardB;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 30px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
  font-size: 20px;
`;

const Label = styled.label`
  margin-right: 20px;
  font-family: pretendardB;
`;

const Input = styled(InputField)`
  height: 40px;
  border: ${(props) =>
    props.$hasError
      ? "2px solid var(--point-color)"
      : "2px solid var(--fill-color)"};
  border-radius: 4px;
  font-family: pretendardB;
  font-size: 18px;
  color: var(--text-color);
`;

const StyledMainImage = styled.img`
  width: 600px;
  height: auto;
  flex-shrink: 0;
  object-fit: cover;
`;

function Main() {
  const [name, setName] = useAtom(userNameAtom);
  const navigate = useNavigate();
  const setThemeSite = useSetAtom(themeSiteAtom);
  //userName 작성하지 않고 시작하기를 누르거나 헤더 이동시
  const [userNameError, setUserNameError] = useAtom(userNameErrorAtom);

  const handleNameInput = (e) => {
    const name = e.target.value;
    //userName 입력 시 빨간색 바운더리 꺼짐
    setUserNameError(false);
    setName(name);
  };

  // 시작하기 클릭 시
  const handleClick = () => {
    if (!name) {
      setUserNameError(true);
      return;
    }
    navigate("/select-mode");
  };

  // setThemeSite("practice");

  return (
    <MainContainer>
      <StyledMainImage src={MainImage} alt="main image" />
      {/*안내 문구 */}
      <Instructions>
        아래 빈칸에 성함을 입력하신 후,
        <span style={{ color: "var(--key-color)" }}>‘시작하기’</span> 버튼을
        클릭해 주세요.
      </Instructions>

      {/*userName 없는 오류 안내 문구*/}
      {userNameError && <ErrorTooltip contents="성함을 입력해 주세요" />}
      {/*userName 입력란 */}
      <InputGroup>
        <Label htmlFor="name">이름</Label>
        <Input
          onChange={handleNameInput}
          id="name"
          placeholder="성함을 입력해 주세요."
          $hasError={userNameError}
          defaultValue={name}
        />
      </InputGroup>
      <Animation $focus="true">
        <Button onClick={handleClick} text="시작하기"></Button>
      </Animation>
    </MainContainer>
  );
}

export default Main;
