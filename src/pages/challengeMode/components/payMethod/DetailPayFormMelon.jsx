import styled from "styled-components";
import { FormWrap } from "../../../../components/forms/FormStyle";
import Input from "../../../../components/input/Input";
import { useAtomValue } from "jotai";
import { levelAtom, themeSiteAtom } from "../../../../store/atom";
import AnimationArea from "../../../../components/Animation";
const DetailPayFormWrap = styled(FormWrap)`
  flex-direction: row;
  color: ${(props) => props.$hasPayFormError && "var(--point-color)"};
  background-color: #f2f2f2;
  border-radius: 4px;
  align-items: center;
`;
const DropDown = styled.select`
  width: 230px;
  height: 35px;
  border-radius: 4px;
  margin-left: 5px;
  border: ${(props) =>
    props.$cardTypesError
      ? "2px solid var(--point-color)"
      : "1px solid var(--fill-color)"};

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
  "카드를 선택해주세요",
  "KB국민카드",
  "BC카드",
  "우리카드",
  "삼성카드",
  "삼성올앳카드",
  "현대카드",
  "신한카드",
  "롯데카드"
];
const TextBox = styled.div`
  font-family: PretendardB;
  font-size: 18px;
  margin: 20px;
`;
const installmentArr = ["일시불", "2개월", "3개월", "4개월", "5개월", "6개월"];
//isSelected : 선택되었는가?
//드롭다운은 '결제수단'은 선택됐지만 '페이지 전체 정답'이 아닌 경우 애니메이션
const DetailPayForm = ({ handleChange, hasPayFormError, cardTypesError }) => {
  //레벨 및 연습모드 여부
  const level = useAtomValue(levelAtom);
  const isPractice = useAtomValue(themeSiteAtom) === "practice";
  return (
    <DetailPayFormWrap $hasPayFormError={hasPayFormError}>
      <TextBox>카드</TextBox>

      <DropDown
        name="CardTypes"
        onChange={handleChange}
        $cardTypesError={cardTypesError}
      >
        {optionArr.map((optionItem) => (
          <option key={optionItem} value={optionItem}>
            {optionItem}
          </option>
        ))}
      </DropDown>
      <TextBox>할부</TextBox>

      <DropDown
        name="CardTypes"
        onChange={handleChange}
        $cardTypesError={cardTypesError}
      >
        {installmentArr.map((optionItem) => (
          <option key={optionItem} value={optionItem}>
            {optionItem}
          </option>
        ))}
      </DropDown>
    </DetailPayFormWrap>
  );
};

export default DetailPayForm;
