import React from "react";
import styled from "styled-components";
import "./IntroText.css";

const Title = styled.div`
  font-size: 40px;
  letter-spacing: -2.5px;
  text-align: center;
  line-height: normal;
  margin-bottom: 30px;
`;

const Main = styled.div`
  text-align: center;
  font-size: 25px;
  letter-spacing: -1.5px;
  line-height: normal;
  margin-bottom: 30px;
`;

export const InterparkText = () => (
  <>
    <Title>인터파크 티켓</Title>
    <Main>
      <p>제한 시간 내에 티켓 예매를 완료해보세요.</p>
      <p>잠시 쉬고 싶다면 ESC 키를 누르세요.</p>
    </Main>
  </>
);

export const MelonTicketText = () => (
  <>
    <Title>멜론티켓</Title>
    <Main>
      <p>제한 시간 내에 티켓 예매를 완료해보세요.</p>
      <p>잠시 쉬고 싶다면 ESC 키를 누르세요.</p>
    </Main>
  </>
);

export const TicketLinkText = () => (
  <>
    <Title>티켓링크</Title>
    <Main>
      <p>제한 시간 내에 티켓 예매를 완료해보세요.</p>
      <p>잠시 쉬고 싶다면 ESC 키를 누르세요.</p>
    </Main>
  </>
);

export const Yes24Text = () => (
  <>
    <Title>YES24</Title>
    <Main>
      <p>제한 시간 내에 티켓 예매를 완료해보세요.</p>
      <p>잠시 쉬고 싶다면 ESC 키를 누르세요.</p>
    </Main>
  </>
);
