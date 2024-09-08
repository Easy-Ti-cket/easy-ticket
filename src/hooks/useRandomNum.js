import { useEffect } from "react";
import { useAtom } from "jotai";
import { cardAnswerAtom } from "../store/atom";

/*랜덤한 4자리 숫자 5개 생성 */
const useRandomNum = () => {
  const [cardNumbers, setCardNumbers] = useAtom(cardAnswerAtom);
  //카드 번호 + 카드 비밀번호
  useEffect(() => {
    const numbers = [];
    for (let i = 1; i <= 5; i++) {
      numbers.push(Math.floor(1000 + Math.random() * 9000));
    }
    // cvc숫자
    numbers.push(Math.floor(100 + Math.random() * 900));
    setCardNumbers(numbers);
  }, [setCardNumbers]);

  let cardNum1, cardNum2, cardNum3, cardNum4, cardPassword, cvc;
  if (cardNumbers.length === 5) {
    [cardNum1, cardNum2, cardNum3, cardNum4, cardPassword, cvc] = cardNumbers;
  }
  return {
    cardNumbers,
    cardNum1,
    cardNum2,
    cardNum3,
    cardNum4,
    cardPassword,
    cvc
  };
};

export default useRandomNum;
