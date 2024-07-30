// IntroText.jsx
import React from "react";
import styled from "styled-components";
import "./IntroText.css";

const Title = styled.div`
  font-size: 40px;
  font-style: normal;
  letter-spacing: -2.5px;
  text-align: center;
  line-height: normal;
  margin-bottom: 30px;
`;

const Main = styled.div`
  text-align: center;
  font-size: 25px;
  font-style: normal;
  letter-spacing: -1.5px;
  line-height: normal;
  margin-bottom: 30px;
`;

export const LowLevelText = () => (
  <>
    <Title>초급모드</Title>
    <Main>
      <p>초급모드는 시간 제한이 없습니다. </p>
      <p>안내 애니메이션 및 상단 설명을 따라 천천히 진행해주세요.</p>
      <p>도움이 필요하다면 노란색 도움말 버튼을 클릭하세요.</p>
    </Main>
  </>
);

export const MiddleLevelText = () => (
  <>
    <Title>중급모드</Title>
    <Main>
      <p>중급모드는 시간 제한이 없습니다. </p>
      <p>상단 설명을 따라 천천히 진행해주세요.</p>
      <p>도움이 필요하다면 노란색 도움말 버튼을 클릭하세요.</p>
    </Main>
  </>
);

export const HighLevelText = () => (
  <>
    <Title>고급모드</Title>
    <Main>
      <p>
        {" "}
        고급모드는 <span className="key-color">시간제한</span>이 있습니다
        (15분).
      </p>
      <p>
        {" "}
        잠시 쉬고 싶다면 키보드 우측 상단{" "}
        <span className="key-color">ESC 키</span>를 누르세요.
      </p>
      <p>도움이 필요하다면 위에 있는 노란버튼을 클릭하세요.</p>
      <p>제한 시간 내에 예매를 완료하세요!</p>
    </Main>
  </>
);
