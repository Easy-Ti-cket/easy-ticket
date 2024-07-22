import { FormWrap } from "../FormStyle";
import Input from "../../input/Input";

const textArr = [
  "신용카드",
  "카카오페이",
  "PAYCO",
  "무통장 입금",
  "네이버 페이"
];

const PayMethodForm = () => {
  //radio로 선택한 값 콘솔에 찍도록 설정
  const handleValue = (e) => {
    console.log(e.target.value);
  };
  return (
    <FormWrap>
      {textArr.map((methodItem, index) => (
        <Input
          name="PayMethodForm"
          key={index}
          type="radio"
          value={methodItem}
          text={methodItem}
          onChange={handleValue}
        />
      ))}
    </FormWrap>
  );
};

export default PayMethodForm;
