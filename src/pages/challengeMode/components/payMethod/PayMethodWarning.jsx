import styled from "styled-components";

//결제 관련 주의 사항 표
const PayWarning = styled.table`
  transform: translateY(-220px);
  background-color: #fff;
  width: 800px;
`;
const PayWarningCont = styled.td`
  font-family: "pretendardM";
  width: 80px;
  height: 40px;
  border: 1px solid var(--fill-color);
  font-size: 14px;
  vertical-align: middle;
  background-color: ${(props) => (props.$bgc ? "var(--dimmed-color)" : "none")};
  color: ${(props) =>
    props.$bgc ? "var(--text-color2)" : "var(--text-color)"};
`;
const WarningList = styled.ul`
  text-align: left;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PayMethodWarning = () => {
  return (
    <PayWarning>
      <thead>
        <tr>
          <PayWarningCont $bgc={true}>내용</PayWarningCont>
          <PayWarningCont $bgc={true}>취소 수수료</PayWarningCont>
          <PayWarningCont $bgc={true}>비고</PayWarningCont>
        </tr>
      </thead>
      <tbody>
        <tr>
          <PayWarningCont>예매 후 7일 이내</PayWarningCont>
          <PayWarningCont>없음</PayWarningCont>
          <PayWarningCont rowSpan={3}>
            <WarningList>
              <li>
                - 취소시 예매 수수료는 당일 밤 12시 이전까지만 환불됩니다.
              </li>
              <li>
                - 예매 후 7일 이내라도 취소시점이 관람일로부터 10일 이내라면
                그에 해당하는 취소 수수료가 부과됩니다.
              </li>
              <li>
                - 관람 당일 취소 가능 상품의 경우 당일 관람 취소 시 티켓 금액의
                90%가 티켓 수수료로 부과됩니다.
              </li>
            </WarningList>
          </PayWarningCont>
        </tr>
        <tr>
          <PayWarningCont>예매 후 8일 ~ 관람일 10일 전까지</PayWarningCont>
          <PayWarningCont>
            <WarningList>
              <li>- 뮤지컬, 콘서트, 클래식 : 장당 4000원</li>
              <li>- 연극, 전시 등 : 장당 4000원</li>
              <li>(단, 티켓 금액의 10% 이내)</li>
            </WarningList>
          </PayWarningCont>
        </tr>
        <tr>
          <PayWarningCont>예매 후 7일 이내</PayWarningCont>
          <PayWarningCont>없음</PayWarningCont>
        </tr>
      </tbody>
    </PayWarning>
  );
};

export default PayMethodWarning;
