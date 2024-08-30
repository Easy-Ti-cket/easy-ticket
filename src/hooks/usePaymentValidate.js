import { useAtomValue } from "jotai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { themeSiteAtom } from "../store/atom";

export const usePaymentValidate = ({ correctList, isChecked = null }) => {
  //step4 - 결제 수단 및 방식 선택 검사로직
  const [hasPayFormError, setHasPayFormError] = useState();
  const [cardTypesError, setCardTypesError] = useState();
  //nav
  const nav = useNavigate();
  const themeSite = useAtomValue(themeSiteAtom);

  const handlePayment = () => {
    if (!correctList.DetailPayForm) {
      setHasPayFormError(true);
      if (themeSite === "practice") {
        alert("올바른 결제 수단을 선택해 주세요");
      } else {
        alert("실전모드에선 '일반신용카드' 결제만 가능합니다.");
      }
      return;
    }
    if (!correctList.CardTypes && themeSite === "practice") {
      setHasPayFormError(false);
      setCardTypesError(true);
      alert("올바른 카드를 선택해 주세요");
    } else {
      if (themeSite === "practice") {
        nav("../step4-2");
      } else {
        nav("../step5-2");
      }
      if (themeSite !== "practice" && themeSite === "interpark" && !isChecked) {
        alert("개인정보 수집 및 취소 수수료 관련 항목에 모두 동의해 주세요");
        return;
      }
    }
  };
  return { handlePayment, hasPayFormError, cardTypesError };
};
