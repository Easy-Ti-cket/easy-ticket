import styled from "styled-components";
import Card from "../../../components/card/Card";
import CardForm from "../../../components/forms/CardForm";
import { useForm } from "../../../hooks/useForm";
import Button from "../../../components/button/Button";
import { useAtomValue, useSetAtom } from "jotai";
import {
  cardAnswerAtom,
  themeSiteAtom,
  userNameAtom,
  stepTextNumberAtom,
  helpTextNumberAtom,
  progressAtom
} from "../../../store/atom";
import { Step4Container } from "./SelectPayMethod";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const CardPayWrap = styled(Step4Container)`
  align-items: center;
`;

const CardFormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Highlight = styled.span`
  margin: 0 10px;
  color: var(--key-color);
`;

const CardPay = () => {
  const setProgress = useSetAtom(progressAtom);
  //useForm 훅에 정답 개수 전달, correctList가 정답 개수에 다다를 경우 isAnswer true
  const { handleChange, correctList, isAnswer } = useForm(6);
  const cardAnswer = useAtomValue(cardAnswerAtom);
  //focusNum 설정 - 애니메이션이 작동할 부분 설정
  const cardKeys = ["cardNum1", "cardNum2", "cardNum3", "cardNum4"];
  //cardNum을 다 맞혔을 경우
  const allCardKeysPresent = cardKeys.every((key) => correctList[key]);
  //cardNum만 - 0, cardNum + cardPassword - 1, 전부 - 2
  const focusNum = allCardKeysPresent
    ? correctList["cardPassword"]
      ? correctList["cvc"]
        ? null
        : 2
      : 1
    : 0;
  const nav = useNavigate();
  // 실전 모드 여부를 판단하기 위한 테마 정보
  const themeSite = useAtomValue(themeSiteAtom);
  //에러 발생 시 css 변경
  const allInputNames = [...cardKeys, "cardPassword", "cvc"];
  const [hasErrorArray, setHasErrorArray] = useState([]);
  //단계별 텍스트
  const setStepTextNumber = useSetAtom(stepTextNumberAtom);
  const setHelpTextNumber = useSetAtom(helpTextNumberAtom);
  useEffect(() => {
    setStepTextNumber(2);
    setHelpTextNumber(2);
    if (themeSite === "practice") {
      setProgress(4);
    } else if (themeSite === "melon") {
      setProgress(3);
    } else {
      setProgress(5);
    }
  }, []);

  //검사로직
  const handleClick = () => {
    if (!isAnswer) {
      //정답리스트에 없는 경우 에러리스트에 삽입
      setHasErrorArray(allInputNames.filter((key) => !correctList[key]));
    } else {
      if (themeSite === "practice") {
        nav("../step5");
      } else {
        nav("../outro");
      }
    }
  };

  return (
    <CardPayWrap>
      <Card />
      <span>
        카드 비밀번호는 <Highlight>{cardAnswer[4]}</Highlight> 입니다
      </span>
      <CardFormContainer>
        <CardForm
          focusNum={focusNum}
          hasErrorArray={hasErrorArray}
          handleChange={handleChange}
        />
      </CardFormContainer>
      {/*다음단계 버튼을 누르면 step5로 이동 */}
      <Button text="결제 완료" onClick={handleClick} />
    </CardPayWrap>
  );
};

export default CardPay;
