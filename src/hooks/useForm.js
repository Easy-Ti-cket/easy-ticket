import { useAtomValue } from "jotai";
import { useState } from "react";
import { cardAnswerAtom } from "../store/atom";

export const useForm = () => {
  const cardAnswer = useAtomValue(cardAnswerAtom);
  console.log(cardAnswer);

  const answerList = {
    PayMethodForm: "신용카드",
    DetailPayForm: "일반 신용카드",
    CardTypes: "BC카드",
    cardNum1: cardAnswer[0],
    cardNum2: cardAnswer[1],
    cardNum3: cardAnswer[2],
    cardNum4: cardAnswer[3],
    cardPassword: cardAnswer[4],
    cvc: cardAnswer[5]
  };
  // 사용자가 입력한 답
  const [response, setResponse] = useState({});
  const [correctList, setCorrectList] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResponse((prev) => {
      const newResponse = { ...prev, [name]: value };

      // 정답과 답변이 같을 경우
      if (answerList[name] === value) {
        setCorrectList((prev) => ({ ...prev, [name]: true }));
      }
      return newResponse;
    });
  };

  return { handleChange, response, correctList };
};
