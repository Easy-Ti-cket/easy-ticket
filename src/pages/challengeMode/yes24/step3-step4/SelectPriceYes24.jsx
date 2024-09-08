import styled from "styled-components";
import SelectPriceInterpark from "../../interpark/step3-step4/SelectPriceInterpark";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

//주의사항
const Warning = styled.span`
  font-size: 16px;
  color: var(--text-color);
  background-color: var(--dimmed-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
`;
const Highlight = styled.span`
  color: var(--point-color);
`;

const SelectPriceYes24 = () => {
  return (
    <Wrap>
      <SelectPriceInterpark />
      <Warning>
        <div>
          주의사항 - 부적절한 정보 입력으로 발생한 문제 시 yes24는 책임지지
          않습니다
        </div>
        <br />
        <Highlight>
          1.배송 수령 시 티켓 수령자의 배송지 정보를 정확하게 입력해 주시기
          바랍니다.
        </Highlight>
        <br />
        <Highlight>
          2. 티켓은 유가증권으로 본인에게 직접 전달해야하며, 분실된 티켓은
          재발권 되지 않습니다.
        </Highlight>
        <br />
        <Highlight>
          3. 일괄배송의 경우 정해진 날짜에 티켓 배송이 시작되며, 주소 수정은
          일괄배송일 2일 전까지 가능합니다.
        </Highlight>
        <br />
        <Highlight>
          4. 예매 티켓 배송은 예매완료일, 혹은 일괄배송일로부터 4~5일 (영업일
          기준) 이내 수령 가능합니다.
        </Highlight>
      </Warning>
    </Wrap>
  );
};

export default SelectPriceYes24;
