import styled from "styled-components";
import { FormWrap } from "../FormStyle";
import Input from "../../input/Input";

const DropDown = styled.select`
  width: 230px;
  height: 35px;
  border: 1px solid var(--fill-color);
  border-radius: 4px;
  margin-left: 5px;
  //값 설정 후 생기는 outline 제거
  &:focus {
    outline: none;
  }
  option {
    color: var(--text-color2);
    font-family: "pretendardM";
    font-size: 16px;
  }
`;
const textArr = [
  "일반 신용카드",
  "하나 컬쳐 카드",
  "인터파크 롯데 카드",
  "NOL 카드"
];
const optionArr = [
  "KB국민카드",
  "BC카드",
  "우리카드",
  "삼성카드",
  "삼성올앳카드",
  "현대카드",
  "신한카드",
  "롯데카드"
];
const DetailPayForm = () => {
  //radio로 선택한 값 콘솔에 찍도록 설정
  const handleValue = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <FormWrap>
        {textArr.map((payItem) => (
          <Input
            name="DetailPayForm"
            key={payItem}
            type="radio"
            value={payItem}
            text={payItem}
            onChange={handleValue}
          />
        ))}
      </FormWrap>
      <DropDown onChange={handleValue}>
        {/*드롭다운의 placeholder역할 */}
        <option value="" disabled>
          카드 종류를 선택해 주세요
        </option>
        {optionArr.map((optionItem) => (
          <option key={optionItem} value={optionItem}>
            {optionItem}
          </option>
        ))}
      </DropDown>
    </>
  );
};

export default DetailPayForm;
