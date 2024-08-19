import styled from "styled-components";
import AnimationArea from "../Animation";

export const SeatInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 20px;
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
  border: 1px solid var(--fill-color);
  border-radius: 8px;
  padding: 16px 16px;
  width: 265px;
  height: 110px;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
`;

export const SeatTableDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SelectedSeats = styled.div`
  border: 1px solid var(--fill-color);
  border-radius: 8px;
  padding: 16px;
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
  color: var(--text-color);
  font-size: 14px;
  margin: 0 24px 8px 0;
`;

export const SeatPrice = styled.span`
  color: var(--text-color2);
  font-size: 14px;
`;
export const SeatInfoCont = styled.span`
  font-family: "pretendardB";
  font-size: 14px;
  color: var(--key-color);
`;

export const ButtonAnimationArea = styled(AnimationArea)`
  padding: 5px;
`;
