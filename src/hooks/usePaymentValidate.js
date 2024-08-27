import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const usePaymentValidate = ({ correctList }) => {
  //step5 검사로직
  const [hasPayFormError, setHasPayFormError] = useState();
  const [cardTypesError, setCardTypesError] = useState();
  //nav
  const nav = useNavigate();

  const handlePayment = () => {
    console.log(correctList);

    if (!correctList.DetailPayForm) {
      setHasPayFormError(true);
      alert("올바른 결제 수단을 선택해 주세요");
      return;
    }
    if (!correctList.CardTypes) {
      setHasPayFormError(false);
      setCardTypesError(true);
      alert("올바른 카드를 선택해 주세요");
    } else {
      nav("../step4-2");

      setStepTextNumber((prev) => prev + 1);
      setHelpTextNumber((prev) => prev + 1);
    }
  };
  return { handlePayment, hasPayFormError, cardTypesError };
};
