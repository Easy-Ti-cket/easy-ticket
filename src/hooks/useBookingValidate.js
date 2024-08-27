import { useAtomValue } from "jotai";
import { useNavigate } from "react-router-dom";
import { levelAtom, seatCountAtom } from "../store/atom";

export const useBookingValidate = (
  addStage,
  step3Stage,
  isValidate,
  setErrorArray,
  location
) => {
  const seatCount = useAtomValue(seatCountAtom);
  const level = useAtomValue(levelAtom);

  const nav = useNavigate();
  const handleButtonClick = () => {
    // 좌석 매수가 0일 경우 경고창 출력
    if (seatCount === 0) {
      alert("좌석을 선택해주세요.");
      return;
    }
    addStage(2);
    console.log(seatCount, step3Stage);
    // 버튼이 결제하기일 경우 step4-1로 이동
    if (step3Stage == 2) {
      //티켓수령방법 + 생년월일을 작성 검사 로직
      if (!isValidate.includes("method")) {
        setErrorArray(() => ["method"]);
        alert("티켓 수령 방법을 선택해 주세요");
        return;
      }
      if (level === "high" && !isValidate.includes("birth")) {
        setErrorArray(() => ["birth"]);
        alert("생년월일을 정확하게 작성해 주세요");
        return;
      } else {
        setErrorArray(() => []);
        //라우팅
        nav(location);
      }
    }
  };

  return { handleButtonClick };
};
