import { useAtomValue } from "jotai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { themeSiteAtom } from "../store/atom";

export const usePaymentValidate = ({ correctList, isAllChecked = null }) => {
  //step4 - 결제 수단 및 방식 선택 검사로직
  const [hasPayFormError, setHasPayFormError] = useState();
  const [cardTypesError, setCardTypesError] = useState();
  const [checkboxError, setCheckboxError] = useState();
  //nav
  const nav = useNavigate();
  const themeSite = useAtomValue(themeSiteAtom);

  const handlePayment = () => {
    // 연습 + 실전모드 결제 수단 에러
    if (!correctList.DetailPayForm) {
      setHasPayFormError(true);
      return;
    }
    //연습모드 카드 타입
    if (!correctList.CardTypes && themeSite === "practice") {
      setHasPayFormError(false);
      setCardTypesError(true);
      return;
    }
    //yes24 체크박스
    if (themeSite === "yes24" && !isAllChecked) {
      setHasPayFormError(false);
      setCheckboxError(true);
      return;
    }
    //이동
    if (themeSite === "practice") {
      nav("../step4-2");
      return;
    }
    setCheckboxError(false);
    nav("../step5-2");
  };

  return {
    handlePayment,
    hasPayFormError,
    cardTypesError,
    checkboxError
  };
};
