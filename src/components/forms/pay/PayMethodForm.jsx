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
//선택되었다면 애니메이션 끄기
const PayMethodForm = ({ handleChange, isSelected }) => {
  //레벨 및 연습모드 여부
  const level = useAtomValue(levelAtom);
  const isPractice = useAtomValue(themeSiteAtom) === "practice";
  return (
    <FormWrap>
      {textArr.map((methodItem, index) => (
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
