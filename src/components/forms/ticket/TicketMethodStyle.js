import styled from "styled-components";
import { FormWrap } from "../FormStyle";

export const SectionTitle = styled.div`
  font-size: 20px;
  font-family: "pretendardB";
  margin-bottom: 20px;
  padding: 10px 0;
  border-bottom: 1px solid var(--fill-color);
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const TicketMethodCont = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.$hasError && "var(--point-color)"};
`;
export const TicketMethodWrap = styled(FormWrap)`
  border-radius: 8px;
  display: inline-flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: start;
`;
