import styled from "styled-components";
import DetailPayForm from "../../../../components/forms/pay/DetailPayForm";
import PayMethodChallenge, {
  SubTitleChallenge
} from "../../components/payMethod/PayMethodChallenge";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";
import { selectedPosterAtom, themeSiteAtom } from "../../../../store/atom";
import { FormWrap } from "../../../../components/forms/FormStyle";
import UsablePoint from "../../components/payMethod/UsablePoint";
import MyBookingInfo from "../../../../components/myBookingInfo/MyBookingInfo";
import PosterInfo from "../../../../components/poster/PosterInfo";

//결제 수단 + 결제 방식 + 내 예매 정보
const PayMethodWrap = styled.div`
  display: flex;
  gap: 15px;
`;

//결제 방식
const PayMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const CardInfo = styled.div`
  display: flex;
  gap: 20px;
  background-color: var(--dimmed-color);
  padding: 10px;
`;

//무이자 할부 안내 버튼
const FakeButton = styled.div`
  background-color: var(--point-color);
  color: #fff;
  font-size: 14px;
  width: 120px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

//현금영수증 발급 안내
const Info = styled.span`
  font-size: 16px;
  font-family: "pretendardM";
  margin-top: 50px;
  width: 90%;
  line-height: 20px;
  color: var(--text-color2);
`;
const SelectPayMethodInterPark = () => {
  //애니메이션 제거 임시, 라우팅 연결이 된 후 삭제 예정
  const setThemeSite = useSetAtom(themeSiteAtom);
  useEffect(() => {
    setThemeSite("interpark");
  });
  //포스터 정보
  const posterId = useAtomValue(selectedPosterAtom);
  return (
    <PayMethodWrap>
      <PayMethodContainer>
        {/*결제 수단 */}
        <PayMethodChallenge $focus={false} />
        {/*사용 가능한 포인트 */}
        <UsablePoint />
      </PayMethodContainer>

      {/*결제 방식 */}
      <FormWrap>
        <SubTitleChallenge>결제 방식</SubTitleChallenge>
        <CardInfo>
          {">"} 신용카드 정보 <FakeButton>무이자 할부 안내</FakeButton>
        </CardInfo>
        <DetailPayForm />
        <Info>
          ※현금영수증 발급 안내
          <br />
          현금영수증은 PC에서만 발급 가능하며, "예매내역 상세" 및 "마이페이지{" "}
          {">"} 증빙서류 {">"} 현금영수증 메뉴"에서 신청할 수 있습니다.
        </Info>
      </FormWrap>

      {/*내 예매 정보 */}
      <div>
        <PosterInfo id={posterId} />
        <MyBookingInfo />
      </div>
    </PayMethodWrap>
  );
};
export default SelectPayMethodInterPark;
