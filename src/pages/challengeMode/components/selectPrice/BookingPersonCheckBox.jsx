import React, { useState } from "react";
import styled from "styled-components";

// 동의 컨테이너 박스
const CheckBoxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 16px;
  flex-direction: column;
  padding: 20px;
  border: 2px solid var(--fill-color);
  border-radius: 8px;
`;

// 동의 체크박스
const CheckBox = styled.input.attrs({ type: "checkbox" })`
  background-color: var(--fill-color);
`;

// 체크박스 텍스트 라벨
const Label = styled.label`
  cursor: pointer;
  display: flex;
  gap: 10px;
  color: ${(props) =>
    props.$hasError ? "var(--point-color)" : "var(--text-color)"};
  &:hover {
    color: var(--text-color2);
  }
`;

// 예매자 확인용 체크박스
const BookingPersonCheckBox = ({ handleChecked, hasError }) => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleChange = (e) => {
    const checked = e.target.checked;
    const checkboxId = e.target.dataset.id;

    if (checkboxId === "1") {
      setIsChecked1(checked);
    } else if (checkboxId === "2") {
      setIsChecked2(checked);
    }

    handleChecked(checked, parseInt(checkboxId, 10));
  };

  return (
    <CheckBoxContainer>
      <Label $hasError={hasError}>
        <CheckBox data-id="1" checked={isChecked1} onChange={handleChange} />
        주문자 확인 및 예매처리를 위해 휴대폰 번호, 이메일, (배송
        수령시)주소,(입력필요 시)생년월일을 수집하며, 이용목적 달성 이후
        파기합니다.
      </Label>
      <Label $hasError={hasError}>
        <CheckBox data-id="2" checked={isChecked2} onChange={handleChange} />
        개인정보 제3자 제공에 동의합니다. (고객응대 및 관람정보 전달, 마케팅정보
        전달 등)
      </Label>
    </CheckBoxContainer>
  );
};

export default BookingPersonCheckBox;
