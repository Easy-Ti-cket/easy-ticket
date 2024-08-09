import styled from "styled-components";
import { FormWrap } from "../FormStyle";
import { InputContainer, Label } from "../../input/InputStyle";
import { useForm } from "../../../hooks/useForm";
import { useAtomValue } from "jotai";
import { levelAtom } from "../../../store/atom";

const BuyerWrap = styled.div`
  display: flex;
  gap: 30px;
`;

const BuyerContainer = styled(FormWrap)`
  gap: 10px;
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

//생년월일 input
const InfoInput = styled(InfoBox).attrs({ as: "input" })`
  box-sizing: border-box;
`;

// mock buyer data
const data_essential = [
  { label: "이름", value: "홍길동" },
  { label: "생년월일", value: "010110" },
  { label: "연락처", value: "010-1234-5678" },
  { label: "이메일", value: "abcd@gmai.com" }
];

const data_delivery = [
  { label: "배송지정보", value: "서울특별시 00구 00로 12-34 100호" },
  { label: "주소", value: "서울특별시 00구 00로 12-34 100호" },
  { label: "우편번호", value: "123-1234" }
];

const TicketBuyer = ({ option }) => {
  //난이도 - 생년월일 입력 구현
  const level = useAtomValue(levelAtom);
  const { handleChange } = useForm();

  return (
    <BuyerWrap>
      {(option === "현장수령" || option === "배송") && (
        <BuyerContainer>
          {data_essential.map((item, index) => (
            <InputContainer key={index}>
              <Label>{item.label}</Label>
              {level === "high" && item.label === "생년월일" ? (
                <InfoInput name="birth" onChange={handleChange}></InfoInput>
              ) : (
                <InfoBox>{item.value}</InfoBox>
              )}
            </InputContainer>
          ))}
        </BuyerContainer>
      )}

      {option === "배송" && (
        <BuyerContainer>
          {data_delivery.map((item, index) => (
            <InputContainer key={index}>
              <Label>{item.label}</Label>
              <InfoBox>{item.value}</InfoBox>
            </InputContainer>
          ))}
        </BuyerContainer>
      )}
    </BuyerWrap>
  );
};

export default TicketBuyer;
