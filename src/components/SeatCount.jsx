import styled from "styled-components";
import { useEffect, useState } from "react";
import { seatCountAtom, levelAtom, seatInfoAtom } from "../store/atom";
import { useAtom, useAtomValue } from "jotai";
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
  font-family: pretendardB;
  font-size: 20px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-family: pretendardR;
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
  margin: ${(props) => (props.$focus ? "0px" : "3px")};
`;

const HighlightText = styled.span`
  color: var(--point-color);
`;

const SeatCount = () => {
  const [seatCount, setSeatCount] = useAtom(seatCountAtom);
  const level = useAtomValue(levelAtom);
  const seatInfo = useAtomValue(seatInfoAtom);
  const [focus, setFocus] = useState(false);

  const handleSeatCountChange = (event) => {
    setSeatCount(Number(event.target.value));
  };

  useEffect(() => {
    if (seatCount === 0 && level === "low") {
      setFocus(true);
    } else if (seatCount === 1) {
      setFocus(false);
    }
  }, [seatCount]);

  return (
    <SeatCountContainer>
      <Header>티켓 가격</Header>
      <Header>
        {seatInfo.grade} | <HighlightText>좌석 {seatCount}매</HighlightText>를
        선택하셨습니다
      </Header>
      <InfoRow>
        <InfoText>기본가</InfoText>
        <InfoText>일반</InfoText>
        <InfoText>{seatInfo.price}원</InfoText>
        <Animation $focus={focus}>
          <CountSelector
            $focus={focus}
            name={"seatCount"}
            onChange={handleSeatCountChange}
          >
            <option value={0}>0매</option>
            <option value={1}>1매</option>
          </CountSelector>
        </Animation>
      </InfoRow>
    </SeatCountContainer>
  );
};

export default SeatCount;
