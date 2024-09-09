import SeatCount from "../../../../components/SeatCount";
import styled from "styled-components";
import SelectDiscountMelon from "../../components/selectDiscount/SelectDiscountMelon";
import MyBookingInfo from "../../../../components/myBookingInfo/MyBookingInfo";
import PrevNextButton from "../../../../components/myBookingInfo/PrevNextButton";
import { MyBookingInfoContainer } from "../../../../components/myBookingInfo/MyBookingInfoContainer";
import { useNavigate } from "react-router-dom";
import { useAtomValue, useSetAtom } from "jotai";
import { seatCountAtom } from "../../../../store/atom";
import { useEffect, useState } from "react";
import { progressAtom } from "../../../../store/atom";
import ErrorText from "../../../../components/ErrorText";
const MyBookingInfoContainerMelon = styled(MyBookingInfoContainer)`
  height: 500px;
`;
const SelectPriceMelonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextBox = styled.div`
  padding: 15px 0 10px 0;
  font-family: pretendardB;
  font-size: 24px;
`;
const SelectPriceMelon = () => {
  const nav = useNavigate();
  const seatCount = useAtomValue(seatCountAtom);
  const setProgress = useSetAtom(progressAtom);

  useEffect(() => setProgress(2), []);

  const [showError, setShowError] = useState(false);

  return (
    <SelectPriceMelonContainer>
      <Container>
        <TextBox>티켓가격을 선택하세요</TextBox>
        <SeatCount hasError={showError} />
        <TextBox>할인수단을 선택하세요</TextBox>
        <SelectDiscountMelon
          name={"쿠폰"}
          detail={"사용 가능한 쿠폰이 없습니다"}
        />
        <SelectDiscountMelon
          name={"공연예매권"}
          detail={"예매권을 선물받았을 경우 여기에서 사용이 가능합니다"}
        />
      </Container>

      <MyBookingInfoContainerMelon>
        <MyBookingInfo />
        <PrevNextButton
          prevButtonOnClick={() => {
            nav("../step2");
          }}
          nextButtonOnClick={() => {
            if (seatCount === 0) {
              alert("좌석 매수를 선택해주세요");
              setShowError(true);
              return;
            }
            nav("../step5-1");
          }}
        />
      </MyBookingInfoContainerMelon>
    </SelectPriceMelonContainer>
  );
};

export default SelectPriceMelon;
