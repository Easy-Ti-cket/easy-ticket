import styled from "styled-components";

const Title = styled.span`
  color: var(--point-color);
  font-size: 16px;
`;

const UsablePointCont = styled.span`
  font-family: "pretendardM";
  font-size: 14px;
  color: var(--text-color);
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--dimmed-color);
  padding: 20px;
  border-top: 1px solid var(--fill-color);
`;

const UsablePoint = () => {
  return (
    <Wrap>
      <Title>사용 가능한 포인트</Title>
      <UsablePointCont>마이 신한 포인트 (1점 이상)</UsablePointCont>
      <UsablePointCont>씨티 포인트 (1점 이상)</UsablePointCont>
      <UsablePointCont>삼성 보너스 포인트 (1p 이상)</UsablePointCont>
      <UsablePointCont>외환 YES 포인트 (5천 p 이상)</UsablePointCont>
    </Wrap>
  );
};

export default UsablePoint;
