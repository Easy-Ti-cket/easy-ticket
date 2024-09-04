import styled from "styled-components";

const Container = styled.div`
  padding-top: 20px;
  font-family: pretendardR;
  color: ${(props) => props.$hasError && "var(--point-color)"};
`;
const LineContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--fill-color);
  align-items: center;
`;
const CheckboxContainer = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

const CheckboxLabel = styled.label`
  margin-left: 8px;
`;

const TermsContainer = styled.div`
  margin-bottom: 10px;
`;
const TextBox = styled.div`
  margin-right: 270px;
  font-family: "pretendardB";
`;
const Info = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-family: "pretendardM";
  color: var(--point-color);
`;
const AgreeMentMelon = ({
  isAgree,
  isAgreeAll,
  setIsAgree,
  setIsAgreeAll,
  errorArray
}) => {
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
  const handleOnChange = (e) => {
    setIsAgree(
      isAgree.map((item, index) =>
        index === Number(e.target.id) ? !item : item
      )
    );
  };
  // 전체 동의를 하지 않은 상태에서 다음 단계 버튼을 클릭했을 경우
  const $hasError = errorArray.includes("checkbox");

  return (
    <Container $hasError={$hasError}>
      <LineContainer>
        <TextBox>예매자 동의</TextBox>
        <CheckboxContainer>
          <input type="checkbox" id="agreeAll" onClick={handleAgreeAll} />
          <CheckboxLabel htmlFor="agreeAll">전체동의</CheckboxLabel>
          <Info>전체 동의를 누르면 한 번에 동의처리됩니다.</Info>
        </CheckboxContainer>
      </LineContainer>

      <CheckboxContainer>
        <input
          type="checkbox"
          id="0"
          checked={isAgree[0]}
          onChange={handleOnChange}
        />
        <CheckboxLabel htmlFor="reservationPolicy">
          [필수] 예매 및 취소 수수료/취소기한을 확인하였으며 동의합니다.
        </CheckboxLabel>
      </CheckboxContainer>

      <TermsContainer>
        <CheckboxContainer>
          <input
            type="checkbox"
            id="1"
            checked={isAgree[1]}
            onChange={handleOnChange}
          />
          <CheckboxLabel htmlFor="paymentService">
            [필수] 결제대행 서비스 표준이용약관 <span>상세보기</span>
          </CheckboxLabel>
        </CheckboxContainer>

        <CheckboxContainer>
          <input
            type="checkbox"
            id="2"
            checked={isAgree[2]}
            onChange={handleOnChange}
          />
          <CheckboxLabel htmlFor="kakaoTerms">
            [필수] 카카오 전자금융 이용약관 동의 <span>상세보기</span>
          </CheckboxLabel>
        </CheckboxContainer>

        <CheckboxContainer>
          <input
            type="checkbox"
            id="3"
            checked={isAgree[3]}
            onChange={handleOnChange}
          />
          <CheckboxLabel htmlFor="personalData">
            [필수] 개인정보 수집/이용에 동의합니다. <span>상세보기</span>
          </CheckboxLabel>
        </CheckboxContainer>

        <CheckboxContainer>
          <input
            type="checkbox"
            id="4"
            checked={isAgree[4]}
            onChange={handleOnChange}
          />
          <CheckboxLabel htmlFor="thirdParty">
            [필수] 개인정보 제3자 제공 동의 및 주의사항 <span>상세보기</span>
          </CheckboxLabel>
        </CheckboxContainer>
      </TermsContainer>
    </Container>
  );
};

export default AgreeMentMelon;
