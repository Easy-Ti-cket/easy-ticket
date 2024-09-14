import styled from "styled-components";
import { useEffect, useState } from "react";
import { seatCountAtom, levelAtom, seatInfoAtom } from "../store/atom";
import { useAtom, useAtomValue } from "jotai";
import Animation from "./Animation";
import ErrorText from "./errorText/ErrorText";

const SeatCountContainer = styled.div`
  border: 2px solid var(--fill-color);
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
const Price = styled.span`
  color: var(--key-color);
  font-family: "pretendardB";
`;
const CountSelector = styled.select`
  width: 70px;
  height: 30px;
  border: 1px solid;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
  margin: ${(props) => (props.$focus ? "0px" : "3px")};
  border: ${(props) => props.$showError && "2px solid var(--point-color)"};
`;

const HighlightText = styled.span`
  color: var(--point-color);
`;

//에러 텍스트 + 컨텐츠
const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SeatCount = ({ showError = false }) => {
  const [seatCount, setSeatCount] = useAtom(seatCountAtom);
  const level = useAtomValue(levelAtom);
  const seatInfo = useAtomValue(seatInfoAtom);
  const [focus, setFocus] = useState(false);

  const handleSeatCountChange = (event) => {
    setSeatCount(Number(event.target.value));
  };
  useEffect(() => {
    setSeatCount(0);
  }, []);
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
        <Price>{seatInfo.price}원</Price>
        <ErrorContainer>
          {showError && <ErrorText text="좌석 매수를 선택해 주세요" />}
          <Animation $focus={focus}>
            <CountSelector
              $focus={focus}
              name={"seatCount"}
              onChange={handleSeatCountChange}
              $showError={showError}
            >
              <option value={0}>0매</option>
              <option value={1}>1매</option>
            </CountSelector>
          </Animation>
        </ErrorContainer>
      </InfoRow>
    </SeatCountContainer>
  );
};

export default SeatCount;
