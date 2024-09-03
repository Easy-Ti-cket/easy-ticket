import styled from "styled-components";

export const RecordContainer = styled.div`
  width: 100vw;
  background-color: var(--dimmed-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 50px 0;
  text-align: center;
`;
export const RecordTitle = styled.h2`
  font-family: "pretendardB";
  font-size: 36px;
  color: var(--key-color);
  padding: 20px;
`;

//네비게이터 + 기록
export const RecordContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

//행제목
export const RecordListTitle = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
//전체 기록
export const RecordTable = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
`;

export const RecordList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
// 순위 + 이름 + 기록
export const RecordItemContainer = styled.ul`
  display: flex;
  //로그인한 유저의 기록일 경우
  box-shadow: ${(props) => props.$isUserRecord && "2px 2px 0 rgba(0,0,0,0.2)"};
  border-radius: 8px;
  background-color: ${(props) =>
    props.$isUserRecord ? "var(--sub-color)" : "none"};
  transition: background-color 0.2s ease;
`;
export const RecordItem = styled.li`
  list-style-type: none;
  width: 100px;
  justify-content: center;
  padding: 15px;
  font-family: "pretendardB";
  color: ${(props) =>
    props.$bold ? "var(--text-color2)" : "var(--text-color)"};
  color: ${(props) => props.$highlight && "var(--key-color)"};
  color: ${(props) => props.$isUserRecord && "var(--key-color)"};
  font-size: ${(props) => props.$isUserRecord && "24px"};
`;
