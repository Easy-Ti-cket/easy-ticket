import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RecordNavigate from "../components/record/RecordNavigate";
import loadUserData from "../../../apis/loadUserData";

const RecordContainer = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: var(--dimmed-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 20px;
`;
//네비게이터 + 기록
const RecordContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  &:nth-child(1) {
    width: 50px;
  }
`;

const RecordTitle = styled.h2`
  font-family: "pretendardB";
  font-size: 36px;
  color: var(--key-color);
  padding: 20px;
`;

const RecordTable = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
`;

const RecordList = styled.ul``;
// 테이블 제목
const RecordTableTitle = styled(RecordList)`
  display: flex;
`;
const RecordItem = styled.li`
  width: 100px;
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-bottom: 10px;
  font-family: "pretendardR";
  font-size: 24px;
  color: var(--text-color);
  font-size: 16px;
`;

const Record = () => {
  const [records, setRecords] = useState([]);

  // 데이터베이스로부터 데이터 읽어오기 - loadUserData 함수 실행
  useEffect(() => {
    loadUserData()
      .then((res) => setRecords(res))
      .catch((error) =>
        console.error(`데이터를 가져오는 도중 에러 발생 : ${error}`)
      );
  }, []);

  return (
    <RecordContainer>
      <RecordTitle>클리어 기록 보기</RecordTitle>
      {/*사이트 네비게이터*/}
      <RecordContents>
        <RecordNavigate />
        {/*기록 테이블 */}
        <RecordTable>
          <RecordTableTitle>
            <RecordItem>순위</RecordItem>
            <RecordItem>이름</RecordItem>
            <RecordItem>기록</RecordItem>
          </RecordTableTitle>
          <RecordList>
            {records.map((record, index) => (
              <RecordItem key={index}>
                {index + 1}. {record.userName} -{" "}
                {String(Math.floor(record.timeSpent / 60)).padStart(2, "0")}:
                {String(record.timeSpent % 60).padStart(2, "0")}
              </RecordItem>
            ))}
          </RecordList>
        </RecordTable>
      </RecordContents>
    </RecordContainer>
  );
};

export default Record;
