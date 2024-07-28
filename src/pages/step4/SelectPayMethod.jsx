import styled from "styled-components";
import PayMethodForm from "../../components/forms/pay/PayMethodForm";
import DetailPayForm from "../../components/forms/pay/DetailPayForm";

const Step4Wrap = styled.div`
  display: flex;
  gap: 67px;
`;
const Step4Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
`;
const SubTtitle = styled.div`
  width: 447px;
  height: 37px;
  border-bottom: 1px solid var(--fill-color);
  font-size: 20px;
  display: flex;
  align-items: center;
`;
const SelectPayMethod = () => {
  return (
    <Step4Wrap>
      {/*결제 방식 선택 */}
      <Step4Container>
        <SubTtitle>결제 방식 선택</SubTtitle>
        <PayMethodForm />
      </Step4Container>
      {/*결제 수단 선택 */}
      <Step4Container>
        <SubTtitle>결제 수단 선택</SubTtitle>
        <DetailPayForm />
      </Step4Container>
    </Step4Wrap>
  );
};

export default SelectPayMethod;
