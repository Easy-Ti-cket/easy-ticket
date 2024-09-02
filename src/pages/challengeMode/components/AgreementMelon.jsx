import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  padding-top: 20px;
  font-family: PretendardR;
`;
const LineContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--fill-color);
`;
const CheckboxContainer = styled.div`
  margin: 10px 0;
`;

const CheckboxLabel = styled.label`
  margin-left: 8px;
`;

const TermsContainer = styled.div`
  margin-bottom: 10px;
`;
const TextBox = styled.div`
  margin-right: 270px;
  font-family: PretendardB;
`;
const AgreeMentMelon = () => {
  //useState를 사용하여 체크박스의 상태를 관리한다.
  //배열로 관리하며, 각각의 체크박스에 대한 상태를 저장한다.
  const [isAgreeAll, setIsAgreeAll] = useState(false);
  const [isAgree, setIsAgree] = useState([false, false, false, false, false]);
  //전체 동의를 클릭하면 한번에 동의되는 함수
  const handleAgreeAll = () => {
    if (!isAgreeAll) {
      setIsAgree([true, true, true, true, true]);
      setIsAgreeAll(true);
    } else {
      setIsAgree([false, false, false, false, false]);
      setIsAgreeAll(false);
    }
  };
  return (
    <Container>
      <LineContainer>
        <TextBox>예매자 동의</TextBox>
        <CheckboxContainer>
          <input type="checkbox" id="agreeAll" onClick={handleAgreeAll} />
          <CheckboxLabel htmlFor="agreeAll">전체동의</CheckboxLabel>
        </CheckboxContainer>
      </LineContainer>

      <CheckboxContainer>
        <input type="checkbox" id="reservationPolicy" checked={isAgree[0]} />
        <CheckboxLabel htmlFor="reservationPolicy">
          [필수] 예매 및 취소 수수료/취소기한을 확인하였으며 동의합니다.
        </CheckboxLabel>
      </CheckboxContainer>

      <TermsContainer>
        <CheckboxContainer>
          <input type="checkbox" id="paymentService" checked={isAgree[1]} />
          <CheckboxLabel htmlFor="paymentService">
            [필수] 결제대행 서비스 표준이용약관 <span>상세보기</span>
          </CheckboxLabel>
        </CheckboxContainer>

        <CheckboxContainer>
          <input type="checkbox" id="kakaoTerms" checked={isAgree[2]} />
          <CheckboxLabel htmlFor="kakaoTerms">
            [필수] 카카오 전자금융 이용약관 동의 <span>상세보기</span>
          </CheckboxLabel>
        </CheckboxContainer>

        <CheckboxContainer>
          <input type="checkbox" id="personalData" checked={isAgree[3]} />
          <CheckboxLabel htmlFor="personalData">
            [필수] 개인정보 수집/이용에 동의합니다. <span>상세보기</span>
          </CheckboxLabel>
        </CheckboxContainer>

        <CheckboxContainer>
          <input type="checkbox" id="thirdParty" checked={isAgree[4]} />
          <CheckboxLabel htmlFor="thirdParty">
            [필수] 개인정보 제3자 제공 동의 및 주의사항 <span>상세보기</span>
          </CheckboxLabel>
        </CheckboxContainer>
      </TermsContainer>
    </Container>
  );
};

export default AgreeMentMelon;
