import styled from "styled-components";
import Nav from "./nav/Nav";
import Logo from "../../assests/logo.svg?react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../modal/Modal";
import GoToMainModalCont from "../modal/GoToMainModalCont";
import { useAtomValue, useSetAtom } from "jotai";
import { timerControlAtom } from "../../store/atom";

/*헤더 Container*/
const HeaderContainer = styled.div`
  width: 100vw;
  height: 120px;
  display: flex;
  justify-content: left;
  position: relative;
`;

const LogoContainer = styled.div`
  width: 140px;
  height: 80px;
  position: absolute;
  left: 50%;
  transform: translateX(-60px);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  //로고 클릭 시 경고문구 모달창
  const [isConfirm, setIsConfirm] = useState(false);
  //모달창 타이머 제어
  const setTimerControl = useSetAtom(timerControlAtom);

  const goToMain = () => {
    //location에 step을 포함하지 않은 경우 : 사이트 선택 창, 난이도 선택창 등 (모달창 불필요)
    if (!location.includes("step")) {
      navigate("/");
      setTimerControl(() => true);

      return;
    }
    //location에 step을 포함한 경우 : 예매를 진행 중인 경우
    setTimerControl(() => true);
    setIsConfirm(true);
  };
  return (
    <HeaderContainer>
      {isConfirm && (
        <Modal
          width="300px"
          height="300px"
          contents={<GoToMainModalCont setIsConfirm={setIsConfirm} />}
          buttonShow={false}
        />
      )}
      <LogoContainer onClick={() => goToMain()}>
        <Logo />
      </LogoContainer>
      <Nav />
    </HeaderContainer>
  );
};

export default Header;
