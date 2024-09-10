import styled from "styled-components";
import { useAtom } from "jotai";
import { seatCountAtom, seatInfoAtom } from "../../../../store/atom";
import { useAtomValue } from "jotai";
import ErrorText from "../../../../components/ErrorText";

const Header = styled.div`
  font-family: "pretendardB";
  font-size: 20px;
  margin-top: 30px;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const SeatCountContainer = styled.div`
  display: flex;
  width: 560px;
  border: 2px solid var(--fill-color);
  border-radius: 8px;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

const InfoText = styled.div`
  display: flex;
  font-family: "pretendardR";
  color: var(--text-color);
`;

const PriceText = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "pretendardR";
  color: var(--text-color);
`;

const HighlightText = styled.span`
  font-family: "pretendardB";
  color: var(--text-color2);
`;

const CountSelector = styled.select`
  width: 70px;
  height: 30px;
  border: 1px solid;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
  margin-left: 10px;
  border: ${(props) => props.$hasError && "2px solid var(--point-color)"};
`;

const SeatCountTicketlink = ({ hasError }) => {
  const [seatCount, setSeatCount] = useAtom(seatCountAtom);
  const seatInfo = useAtomValue(seatInfoAtom);

  const handleSeatCountChange = (event) => {
    setSeatCount(Number(event.target.value));
  };

  return (
    <>
      <Header>
        티켓 종류, 할인, 매수 선택
        {hasError && <ErrorText text="티켓 매수를 선택해 주세요" />}
      </Header>
      <SeatCountContainer>
        <InfoText>
          <HighlightText>{seatInfo.grade}</HighlightText>을 &nbsp;
          <HighlightText>좌석 {seatCount}매</HighlightText>를 선택하셨습니다.
        </InfoText>
        <PriceText>
          <span>일반(정가)</span>
          <span>
            <HighlightText>{seatInfo.price}원</HighlightText>
          </span>
          <CountSelector
            name={"seatCount"}
            value={seatCount}
            onChange={handleSeatCountChange}
            $hasError={hasError}
          >
            <option value={0}>0매</option>
            <option value={1}>1매</option>
          </CountSelector>
        </PriceText>
      </SeatCountContainer>
    </>
  );
};

export default SeatCountTicketlink;
