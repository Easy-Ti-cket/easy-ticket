import { FormWrap } from "../FormStyle";
import Input from "../../input/Input";
import { useAtomValue } from "jotai";
import { levelAtom } from "../../../store/atom";

const textArr = [
  "신용카드",
  "카카오페이",
  "PAYCO",
  "무통장 입금",
  "네이버 페이"
];
//선택되었다면 애니메이션 끄기
const PayMethodForm = ({ handleChange, isSelected }) => {
  //level에 따라 animation 설정
  const level = useAtomValue(levelAtom);

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
          $focus={level !== "high" && index === 0 && !isSelected}
        />
      ))}
    </FormWrap>
  );
};

export default PayMethodForm;
