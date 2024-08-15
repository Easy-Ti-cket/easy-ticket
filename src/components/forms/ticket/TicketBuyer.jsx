import styled from "styled-components";
import { FormWrap } from "../FormStyle";
import { InputContainer, Label } from "../../input/InputStyle";
import { useForm } from "../../../hooks/useForm";
import { useAtomValue } from "jotai";
import { levelAtom } from "../../../store/atom";
import { useState } from "react";

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
  //스피너 없애기
  /* WebKit 기반 브라우저 (Chrome, Safari) */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Edge, IE */
  & {
    appearance: textfield;
  }
  box-sizing: border-box;
  border: ${(props) => props.$hasError && "2px solid var(--point-color)"};
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

const TicketBuyer = ({ option, setIsValidate, errorArray }) => {
  //난이도 - 생년월일 입력 구현
  const level = useAtomValue(levelAtom);
  // 생년월일 입력 검사 로직
  const [birth, setBirth] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    // 생년월일이 비어있거나 길이가 8이 아닌 경우 에러
    if (value === "" || value.length !== 8) {
      setIsValidate((prev) => prev.filter((item) => item !== "birth"));
    } else {
      setIsValidate((prev) =>
        prev.includes("birth") ? prev : [...prev, "birth"]
      );
    }
  };
  //css 설정
  const hasError = errorArray.includes("birth");
  return (
    <BuyerWrap>
      {(option === "현장수령" || option === "배송") && (
        <BuyerContainer>
          {data_essential.map((item, index) => (
            <InputContainer key={index}>
              <Label>{item.label}</Label>
              {level === "high" && item.label === "생년월일" ? (
                <InfoInput
                  name="birth"
                  type="number"
                  onChange={handleChange}
                  placeholder="생년월일 예시 : 20010111"
                  $hasError={hasError}
                ></InfoInput>
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
