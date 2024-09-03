import styled from "styled-components";
import { FormWrap } from "../../../../../components/forms/FormStyle";
import {
  InputContainer,
  Label
} from "../../../../../components/input/InputStyle";
import { useAtomValue } from "jotai";
import { userNameAtom } from "../../../../../store/atom";

const BuyerWrap = styled.div`
  display: flex;
  gap: 30px;
`;

const BuyerContainer = styled(FormWrap)`
  gap: 10px;
`;

const BuyerLabel = styled(Label)`
  color: var(--text-color);
`;

const InfoBox = styled.div`
  width: 300px;
  height: 40px;
  background-color: white;
  font-size: 16px;
  border: 1px solid var(--fill-color);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// mock buyer data
const data_essential = [
  { label: "이름", value: "" },
  { label: "연락처", value: "010-1234-5678" },
  { label: "이메일", value: "abcd@gmai.com" }
];

const data_delivery = [
  { label: "배송지정보", value: "서울특별시 00구 00로 12-34 100호" },
  { label: "주소", value: "서울특별시 00구 00로 12-34 100호" },
  { label: "우편번호", value: "123-1234" }
];

const TicketBuyer = ({ option }) => {
  const userName = useAtomValue(userNameAtom);

  return (
    <BuyerWrap>
      {option === "현장수령" && (
        <BuyerContainer>
          {data_essential.map((item, index) => (
            <InputContainer key={index}>
              <BuyerLabel>{item.label}</BuyerLabel>
              <InfoBox>{item.label === "이름" ? userName : item.value}</InfoBox>
            </InputContainer>
          ))}
        </BuyerContainer>
      )}

      {option === "배송(+3200)" && (
        <>
          <BuyerContainer>
            {data_delivery.map((item, index) => (
              <InputContainer key={index}>
                <BuyerLabel>{item.label}</BuyerLabel>
                <InfoBox>{item.value}</InfoBox>
              </InputContainer>
            ))}
          </BuyerContainer>
        </>
      )}
    </BuyerWrap>
  );
};

export default TicketBuyer;
