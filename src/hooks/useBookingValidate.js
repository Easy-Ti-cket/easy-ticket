import { useAtomValue } from "jotai";
import { useNavigate } from "react-router-dom";
import { levelAtom, seatCountAtom, themeSiteAtom } from "../store/atom";

export const useBookingValidate = (
  addStage,
  step3Stage = 1,
  isValidate,
  setErrorArray,
  location,
  //예외적인 검사
  extra = {}
) => {
  const seatCount = useAtomValue(seatCountAtom);
  const level = useAtomValue(levelAtom);
  const themeSite = useAtomValue(themeSiteAtom);

  const nav = useNavigate();
  const handleButtonClick = () => {
    // 연습모드
    // 좌석 매수가 0일 경우 경고창 출력
    if (seatCount === 0) {
      alert("좌석매수를 선택해주세요.");
      return;
    }
    addStage(2);
    // 좌석 매수 제대로 선택 시 step4-1로 이동
    if (step3Stage == 2) {
      //티켓수령방법 + 생년월일을 작성 검사 로직
      if (!isValidate.includes("method")) {
        setErrorArray(() => ["method"]);
        alert("티켓 수령 방법을 선택해 주세요");
        return;
      }
      if (
        level === "high" &&
        themeSite !== "ticketlink" &&
        !isValidate.includes("birth")
      ) {
        setErrorArray(() => ["birth"]);
        alert("생년월일을 정확하게 작성해 주세요");
        return;
      }

      // 멜론티켓 - 결제수단, 체크박스
      if (themeSite === "melonticket" && !extra.isPayMethodCorrect) {
        setErrorArray(() => ["payMethod"]);
        alert("실전모드에서는 '일반신용카드' 결제만 가능합니다");
        return;
      }
      if (themeSite === "melonticket" && !extra.isAgreeAll) {
        setErrorArray(() => ["checkbox"]);
        alert("체크박스를 모두 선택해 주세요");
        return;
      }
      //티켓링크
      if (themeSite === "ticketlink" && !extra.isAgreeAll) {
        setErrorArray(() => ["checkbox"]);
        alert("개인정보 수집 및 3자 제공에 동의해야 결제가 가능합니다.");
        return;
      }
      if (themeSite === "ticketlink" && !extra.isCancelChecked) {
        setErrorArray(() => ["cancel"]);
        alert("취소기한 및 수수료 동의에 체크해 주세요");
        return;
      } else {
        console.log("동작");
        setErrorArray(() => []);
        //라우팅
        nav(location);
      }
    }
  };

  return { handleButtonClick };
};
