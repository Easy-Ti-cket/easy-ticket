import React, { useState } from "react";
import styled from "styled-components";
import ErrorTooltip from "../../../../components/tooltip/ErrorTooltip";

// 동의 컨테이너 박스
const CheckBoxContainer = styled.div`
  display: flex;
  width: 560px;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  text-align: center;
  flex-direction: column;
  padding: 20px;
  border: 2px solid var(--fill-color);
  border-radius: 8px;
`;

// 안내문 텍스트
const NoticeText = styled.div`
  font-family: "pretendardB";
  font-weight: 600;
  font-size: 16px;
`;

// 동의 체크박스
const CheckBox = styled.input.attrs({ type: "checkbox" })`
  background-color: var(--fill-color);
`;

// 체크박스 텍스트 라벨
const Label = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: var(--text-color);
  &:hover {
    color: var(--text-color2);
  }
`;

const SelectPriceCheckBox = ({ handleChecked }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    handleChecked(e);
  };

  return (
    <>
      {/* 설명을 위한 툴팁 */}
      <ErrorTooltip
        contents={
          <NoticeText>
            페이코 간편결제를 이용하지 않는다면 체크하지 않아도 됩니다.
          </NoticeText>
        }
      />
      <CheckBoxContainer>
        {/* 안내문 */}
        <NoticeText>
          [티켓링크X벅스] 벅스 이용권{" "}
          <span style={{ color: "var(--point-color)" }}>페이코</span> 자동결제
          회원은 티켓링크 예매수수료 무한 면제!
        </NoticeText>

        {/* 체크박스 */}
        <Label>
          <CheckBox checked={isChecked} onChange={handleChange} />
          [티켓링크X벅스] 예매수수료 면제 혜택 대상자 인증에 동의합니다.
        </Label>
      </CheckBoxContainer>
    </>
  );
};

export default SelectPriceCheckBox;
