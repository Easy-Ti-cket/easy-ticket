import { FormWrap } from "../FormStyle";
import Input from "../../input/Input";
import { useAtomValue } from "jotai";
import { levelAtom, themeSiteAtom } from "../../../store/atom";

const textArr = [
  "신용카드",
  "카카오페이",
  "PAYCO",
  "무통장 입금",
  "네이버 페이"
];

const challengeTextArr = [
  "신용카드",
  "카카오페이",
  "PAYCO",
  "무통장 입금",
  "네이버 페이",
  "KB Pay",
  "NOL 포인트",
  "공연예매권",
  "I-Point 사용 (사용가능 : 0p)",
  "청년문화예술패스 포인트 사용 (사용가능 : 0p)"
];
//선택되었다면 애니메이션 끄기
const PayMethodForm = ({ handleChange, isSelected }) => {
  //레벨 및 연습모드 여부
  const level = useAtomValue(levelAtom);
  const isPractice = useAtomValue(themeSiteAtom) === "practice";
  const radioText = isPractice ? textArr : challengeTextArr;
  return (
    <FormWrap>
      {radioText.map((methodItem, index) => (
        <Input
          name="PayMethodForm"
          key={index}
          type="radio"
          value={methodItem}
          text={methodItem}
          onChange={handleChange}
          $focus={level === "low" && isPractice && index === 0 && !isSelected}
        />
      ))}
    </FormWrap>
  );
};

export default PayMethodForm;
