import DetailPayFormMelon from "../../components/payMethod/DetailPayFormMelon";
import PayMethodForm from "../../../../components/forms/pay/PayMethodForm";
import TicketMethodMelon from "../../components/TiketMethod/TicketMethodMelon";
import AgreeMentMelon from "../../components/AgreementMelon";
import ErrorTooltip from "../../../../components/tooltip/ErrorTooltip";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSetAtom } from "jotai";
import OrderInfoMelon from "../../components/OrdererInfoMelon";
import MyBookingInfo from "../../../../components/myBookingInfo/MyBookingInfo";
import { MyBookingInfoContainer } from "../../../../components/myBookingInfo/MyBookingInfoContainer";
import PrevNextButton from "../../../../components/myBookingInfo/PrevNextButton";
import { useNavigate } from "react-router-dom";
import { progressAtom } from "../../../../store/atom";
const TicketMethodMelonContainer = styled.div`
  display: flex;
`;
const PayContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  justify-content: space-between;
`;
const TextBox = styled.div`
  font-family: PretendardB;
`;
const TooltipContents = styled.div`
  font-family: PretendardR;
  width: 400px;
`;
const MyBookingInfoContainerMelon = styled(MyBookingInfoContainer)`
  height: 500px;
`;
const Container = styled.div``;
const SelectPayMethodMelon = () => {
  const setProgress = useSetAtom(progressAtom);
  useEffect(() => setProgress(3), [setProgress]);
  //현장수령 or 배송
  const [option, setOption] = useState("현장수령");
  //step4 단계에 대한 정보
  const [step3Stage, setStep3Stage] = useState(1);
  // 폼 검사 로직용
  const [isValidate, setIsValidate] = useState([]);
  const [errorArray, setErrorArray] = useState([]); //css 변경용
  //검사후 이동할 위치
  const nav = useNavigate();
  return (
    <TicketMethodMelonContainer>
      <Container>
        <TicketMethodMelon
          option={option}
          setOption={setOption}
          setIsValidate={setIsValidate}
          errorArray={errorArray}
        />
        <PayContainer>
          <TextBox>결제수단을 선택하세요</TextBox>
          <PayMethodForm></PayMethodForm>
          <DetailPayFormMelon></DetailPayFormMelon>
          <ErrorTooltip
            contents={
              <TooltipContents>
                전체 동의를 누르면 한번에 동의 됩니다!
              </TooltipContents>
            }
          ></ErrorTooltip>
          <AgreeMentMelon></AgreeMentMelon>
        </PayContainer>
      </Container>
      <MyBookingInfoContainerMelon>
        <MyBookingInfo></MyBookingInfo>
        <PrevNextButton
          prevButtonOnClick={() => {
            nav("../step3/step4");
          }}
          nextButtonOnClick={() => {
            nav("../step5-2");
          }}
        />
      </MyBookingInfoContainerMelon>
    </TicketMethodMelonContainer>
  );
};

export default SelectPayMethodMelon;
