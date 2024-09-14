import { FormWrap, FormWrapRow } from "../FormStyle";
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

const PayMethodForm = ({ handleChange, isSelected }) => {
  //레벨 및 연습모드 여부
  const level = useAtomValue(levelAtom);
  const isPractice =
    useAtomValue(themeSiteAtom) === "practice" || "melonticket";
  const radioText = isPractice ? textArr : challengeTextArr;

  //melonTicket일 경우 row로 변경
  const isFormWrapRow = useAtomValue(themeSiteAtom) === "melonticket";

  const PayMethodFormWrap = isFormWrapRow ? FormWrapRow : FormWrap;
  return (
    <PayMethodFormWrap>
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
    </PayMethodFormWrap>
  );
};

export default PayMethodForm;
