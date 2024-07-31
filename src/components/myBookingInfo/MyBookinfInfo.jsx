import styled from "styled-components";
import Button from "../button/Button";
import Animation from "../Animation";
import { allowedSeatAtom } from "../../store/atom";
import { useAtomValue } from "jotai";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  border: 1px solid var(--key-color);
  border-radius: 8px;
  width: 400px;
  height: 457px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  font-family: pretendardB;
  margin-bottom: 20px;
  margin: 20px 20px 0 20px;
`;

const InfoContatiner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px 0 20px;
  font-family: pretendardR;
`;
const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;
const InfoText = styled.div``;
const TotalAmount = styled.div`
  margin: 0 20px 0 20px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--key-color);
`;

const AmountTitle = styled.div`
  font-family: B;
  margin-top: 20px;
  font-family: pretendardB;
`;
const AmountContent = styled.div`
  font-family: pretendardB;
  font-size: 28px;
  margin-top: 20px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const PaddingContainer = styled.div`
  padding: 6px;
`;
const NextAnimation = styled(Animation)`
  padding: 3px;
`;
const MyBookingInfo = () => {
  const allowedSeat = useAtomValue(allowedSeatAtom);
  const Info = [
    // 공연 날짜 Atom 필요
    { title: "일시", content: "2024년 6월 29일(토) 14:00" },
    {
      title: "선택좌석(1석)",
      content: `${allowedSeat.row + 1}열-${allowedSeat.col + 1}`
    },
    { title: "티켓금액", content: "99000원" },
    { title: "수수료", content: "2000원" },
    { title: "쿠폰할인", content: "0원" },
    { title: "포인트할인", content: "0원" }
  ];
  const nav = useNavigate();
  const handleButtonClick = () => {
    nav("/progress/step4-1");
  };

  return (
    <Container>
      <Title>My 예매 정보</Title>
      <InfoContatiner>
        {Info.map((item, index) => (
          <InfoItem key={index}>
            <InfoText>{item.title}</InfoText>
            <InfoText>{item.content}</InfoText>
          </InfoItem>
        ))}
      </InfoContatiner>
      <TotalAmount>
        <AmountTitle>총 결제금액</AmountTitle>
        <AmountContent>101000원</AmountContent>
      </TotalAmount>
      <ButtonContainer>
        <PaddingContainer>
          <Button text="이전 단계" type="prev"></Button>
        </PaddingContainer>

        <NextAnimation $focus={true}>
          <Button text="다음 단계" onClick={handleButtonClick}></Button>
        </NextAnimation>
      </ButtonContainer>
    </Container>
  );
};

export default MyBookingInfo;
