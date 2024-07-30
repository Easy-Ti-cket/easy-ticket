import styled from "styled-components";
import AnimationArea from "../Animation";

export const SeatInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--key-color);
  border-radius: 8px;
  padding: 8px;
  width: 300px;
  height: 480px;
`;

export const Header = styled.span`
  width: 280px;
  height: 30px;
  font-family: "pretendardB";
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const SeatTableContainer = styled.div`
  border: 1px solid var(--key-color);
  border-radius: 8px;
  padding: 16px 8px;
  width: 265px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SeatTableDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SelectedSeats = styled.div`
  border: 1px solid var(--key-color);
  border-radius: 8px;
  padding: 8px;
  width: 265px;
  height: 140px;
`;

export const SelectedSeatsHeader = styled.span`
  font-size: 14px;
  align-items: end;
`;

export const SelectedSeatsInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const SeatGrade = styled.span`
  font-family: "pretendardM";
  font-size: 14px;
  margin: 0 24px 8px 0;
`;

export const SeatPrice = styled.span`
  font-family: "pretendardM";
  font-size: 14px;
`;

export const ButtonAnimationArea = styled(AnimationArea)`
  padding: 5px;
`;
