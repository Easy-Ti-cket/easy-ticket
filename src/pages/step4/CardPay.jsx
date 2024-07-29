import styled from "styled-components";
import Card from "../../components/card/Card";
import CardForm from "../../components/forms/CardForm";
import { useForm } from "../../hooks/useForm";
import Button from "../../components/button/Button";
import { useAtomValue } from "jotai";
import { cardAnswerAtom } from "../../store/atom";
import { Step4Container } from "./SelectPayMethod";

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
  const { handleChange, isAnswer } = useForm(6);
  const cardAnswer = useAtomValue(cardAnswerAtom);

  return (
    <CardPayWrap>
      <Card />
      <span>
        카드 비밀번호는 <Highlight>{cardAnswer[4]}</Highlight> 입니다
      </span>
      <CardFormContainer>
        <CardForm handleChange={handleChange} />
      </CardFormContainer>
      {/*다음단계 버튼을 누르면 step5로 이동 */}
      {isAnswer && <Button text="다음 단계" />}
    </CardPayWrap>
  );
};

export default CardPay;
