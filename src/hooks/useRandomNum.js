import { useEffect } from "react";
import { useAtom } from "jotai";
import { cardAnswerAtom } from "../store/atom";

/*랜덤한 4자리 숫자 4개 생성 */
const useRandomNum = () => {
  const [cardNumbers, setCardNumbers] = useAtom(cardAnswerAtom);

  useEffect(() => {
    const numbers = [];
    for (let i = 1; i <= 4; i++) {
      numbers.push(Math.floor(1000 + Math.random() * 9000));
    }
    // cvc숫자
    numbers.push(Math.floor(100 + Math.random() * 900));
    setCardNumbers(numbers);
  }, [setCardNumbers]);

  let cardNum1, cardNum2, cardNum3, cardNum4, cvc;
  if (cardNumbers.length === 5) {
    [cardNum1, cardNum2, cardNum3, cardNum4, cvc] = cardNumbers;
  }
  return { cardNumbers, cardNum1, cardNum2, cardNum3, cardNum4, cvc };
};

export default useRandomNum;
