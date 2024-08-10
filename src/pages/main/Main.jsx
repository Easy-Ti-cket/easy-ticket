import styled from "styled-components";
import Button from "../../components/button/Button";
import Animation from "../../components/Animation";
import { useAtom } from "jotai";
import { userNameAtom } from "../../store/atom";
import { useNavigate } from "react-router-dom";
import MainImage from "../../assests/images/main.png";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 60px;
  font-family: pretendardB;
  margin-bottom: 30px;
`;

const Logo = styled.span``;

const Instructions = styled.p`
  margin-top: 20px;
  font-family: pretendardB;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.5px;
  white-space: pre-wrap;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  font-size: 25px;
`;

const Label = styled.label`
  margin-right: 10px;
  font-family: pretendardB;
`;

const Input = styled.input`
  height: 40px;
  width: 200px;
  border: 1px solid var(--fill-color);
  border-radius: 4px;
  font-family: pretendardB;
  font-size: 20px;
`;

const SytledMainImage = styled.img`
  width: 150px;
  height: auto;
  flex-shrink: 0;
  object-fit: cover;
`;

function Main() {
  const [name, setName] = useAtom(userNameAtom);
  const navigate = useNavigate();

  const handleNameInput = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const handleClick = () => {
    if (name === "") {
      alert("이름을 입력해주세요.");
      return;
    }
    navigate("/select-level");
  };
  return (
    <MainContainer>
      <Title>
        {/* 로고로 대체 */}
        쉽게<Logo>🎫</Logo>티켓
      </Title>
      <SytledMainImage src={MainImage} alt="main image" />
      <Instructions>
        안녕하세요! {/* 메인 페이지 멘트 수정 필요 */}
        <br />
        아래 빈칸에 성함을 입력해 주세요.
        <br />
        <span style={{ color: "var(--key-color)" }}>‘시작하기’</span> 버튼을
        누르면 시작합니다.
      </Instructions>

      <InputGroup>
        <Label htmlFor="name">이름</Label>
        <Input
          type="text"
          onChange={handleNameInput}
          id="name"
          placeholder="이름을 입력해 주세요"
        />
      </InputGroup>
      <Animation $focus="true">
        <Button onClick={handleClick} text="시작하기"></Button>
      </Animation>
    </MainContainer>
  );
}

export default Main;
