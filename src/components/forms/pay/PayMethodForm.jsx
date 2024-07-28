import { FormWrap } from "../FormStyle";
import Input from "../../input/Input";
import { useForm } from "../../../hooks/useForm";

const textArr = [
  "신용카드",
  "카카오페이",
  "PAYCO",
  "무통장 입금",
  "네이버 페이"
];

const PayMethodForm = () => {
  const { handleChange, answer } = useForm();
  //삭제 예정 ) 정답 확인
  console.log(answer);
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
        />
      ))}
    </FormWrap>
  );
};

export default PayMethodForm;
