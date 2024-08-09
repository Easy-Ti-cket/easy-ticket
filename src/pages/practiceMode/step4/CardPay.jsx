import styled from "styled-components";
import Card from "../../../components/card/Card";
import CardForm from "../../../components/forms/CardForm";
import { useForm } from "../../../hooks/useForm";
import Button from "../../../components/button/Button";
import { useAtomValue } from "jotai";
import { cardAnswerAtom } from "../../../store/atom";
import { Step4Container } from "./SelectPayMethod";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <CardPayWrap>
      <Card />
      <span>
        카드 비밀번호는 <Highlight>{cardAnswer[4]}</Highlight> 입니다
      </span>
      <CardFormContainer>
        <CardForm focusNum={focusNum} handleChange={handleChange} />
      </CardFormContainer>
      {/*다음단계 버튼을 누르면 step5로 이동 */}
      {isAnswer && (
        <Button text="다음 단계" onClick={() => navigate("/progress/step5")} />
      )}
    </CardPayWrap>
  );
};

export default CardPay;
