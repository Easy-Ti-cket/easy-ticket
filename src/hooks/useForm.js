import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { cardAnswerAtom } from "../store/atom";

export const useForm = (correctNum) => {
  const cardAnswer = useAtomValue(cardAnswerAtom);

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
  const [, setResponse] = useState({});
  const [correctList, setCorrectList] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setResponse((prev) => {
      const newResponse = { ...prev, [name]: value };
      // 정답과 답변이 같을 경우
      //cardNum은 string으로 값을 받으므로 정답을 string으로 변환하여 대조
      if (String(answerList[name]) === value) {
        setCorrectList((prev) => ({ ...prev, [name]: true }));
      } else {
        setCorrectList((prev) => ({ ...prev, [name]: false }));
      }
      return newResponse;
    });
  };
  //해당 페이지 모든 답안을 맞혔을 경우 isAnswer true
  const [isAnswer, setIsAnswer] = useState(false);
  useEffect(() => {
    //useForm에 입력한 정답 개수 기반 페이지 전체가 정답인지 판정
    if (Object.keys(correctList).length === correctNum) {
      setIsAnswer(true);
    }
  }, [correctList]);

  return { handleChange, correctList, isAnswer };
};
