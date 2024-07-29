import styled from "styled-components";
import PayMethodForm from "../../components/forms/pay/PayMethodForm";
import DetailPayForm from "../../components/forms/pay/DetailPayForm";
import { useForm } from "../../hooks/useForm";
import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

const SelectPayWrap = styled.div`
  display: inline-flex;
  gap: 67px;
  position: relative;
  padding: 20px;
`;
export const Step4Container = styled.div`
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
const BtnWrap = styled.div`
  position: absolute;
  bottom: -100px;
  right: 0;
`;

const SelectPayMethod = () => {
  //form에서 답안 리스트 및 onChange이벤트 핸들러 가져옴
  const { handleChange, correctList } = useForm();
  //'신용카드'를 정확히 골랐을 경우 '결제 수단 입력' 창 생성
  const isPayMethodCorrect = correctList["PayMethodForm"];
  //페이지 모든 답안을 맞았을 경우
  const [isAnswer, setIsAnswer] = useState(false);
  useEffect(() => {
    if (Object.keys(correctList).length === 3) {
      setIsAnswer(true);
    }
  }, [correctList]);
  // 다음 페이지 이동
  const navigate = useNavigate();

  return (
    <SelectPayWrap>
      {/*결제 방식 선택 */}
      <Step4Container>
        <SubTtitle>결제 방식 선택</SubTtitle>
        <PayMethodForm handleChange={handleChange} />
      </Step4Container>
      {/*결제 수단 선택 */}
      {isPayMethodCorrect && (
        <Step4Container>
          <SubTtitle>결제 수단 선택</SubTtitle>
          <DetailPayForm handleChange={handleChange} />
        </Step4Container>
      )}
      {/*다음 단계 버튼 */}
      {isAnswer && (
        <BtnWrap>
          <Button
            text="다음 단계"
            onClick={() => navigate("/progress/step4-2")}
          />
        </BtnWrap>
      )}
    </SelectPayWrap>
  );
};

export default SelectPayMethod;
