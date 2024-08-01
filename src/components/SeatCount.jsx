import styled from "styled-components";
import { seatCountAtom } from "../store/atom";
import { useAtom } from "jotai";
import Animation from "./Animation";
const SeatCountContainer = styled.div`
  border: 1px solid var(--key-color);
  border-radius: 8px;
  padding: 20px;
  padding-bottom: 10px;
  width: 500px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  font-family: PretendardB;
  font-size: 24px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-family: PretendardR;
`;

const InfoText = styled.div`
  color: var(--text-color);
`;

const CountSelector = styled.select`
  width: 70px;
  height: 30px;
  border: 1px solid;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
`;

const HighlightText = styled.span`
  color: var(--point-color);
`;

const SeatCount = () => {
  const [seatCount, setSeatCount] = useAtom(seatCountAtom);

  const handleSeatCountChange = (event) => {
    setSeatCount(Number(event.target.value));
  };

  return (
    <SeatCountContainer>
      <Header>티켓 가격</Header>
      <Header>
        스탠딩 | <HighlightText>좌석 {seatCount}매</HighlightText>를
        선택하셨습니다
      </Header>
      <InfoRow>
        <InfoText>기본가</InfoText>
        <InfoText>일반</InfoText>
        <InfoText>99,000원</InfoText>
        <Animation $focus={true}>
          <CountSelector name={"seatCount"} onChange={handleSeatCountChange}>
            <option value={0}>0매</option>
            <option value={1}>1매</option>
          </CountSelector>
        </Animation>
      </InfoRow>
    </SeatCountContainer>
  );
};

export default SeatCount;
