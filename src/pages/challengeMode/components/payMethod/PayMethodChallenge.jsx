import styled from "styled-components";
import { FormWrap } from "../../../../components/forms/FormStyle";
import PayMethodForm from "../../../../components/forms/pay/PayMethodForm";
import Input from "../../../../components/input/Input";
import { SubTtitle } from "../../../practiceMode/step4/SelectPayMethod";

export const SubTitleChallenge = styled(SubTtitle)`
  margin-bottom: 20px;
`;

const PayMethodChallenge = () => {
  return (
    <FormWrap>
      <SubTitleChallenge>결제 수단</SubTitleChallenge>
      <PayMethodForm $focus={false} />
      <Input name="PayMethodForm" type="radio" text="KB Pay" />
      <Input name="PayMethodForm" type="radio" text="NOL 포인트" />
      <Input name="PayMethodForm" type="radio" text="공연예매권" />
      <Input
        name="PayMethodForm"
        type="radio"
        text="I-Point 사용 (사용가능: 0p)"
      />
      <Input
        name="PayMethodForm"
        type="radio"
        text="청년문화예술패스 포인트 사용 (사용가능: 0p)"
      />
    </FormWrap>
  );
};

export default PayMethodChallenge;
