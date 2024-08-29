import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase-config";
import RecordNavigate from "../components/record/RecordNavigate";

const RecordContainer = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: var(--dimmed-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
`;
//네비게이터 + 기록
const RecordContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecordTitle = styled.h2`
  font-family: "pretendardB";
  font-size: 36px;
  color: var(--key-color);
  padding: 20px;
`;

const RecordList = styled.ul``;

const RecordItem = styled.li`
  display: flex;
  padding: 10px;
  margin-bottom: 10px;
  font-family: "pretendardR";
  font-size: 24px;
  color: var(--text-color);
`;

const Record = () => {
  const [records, setRecords] = useState([]);

  // 데이터베이스로부터 데이터 읽어오기
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const recordsArray = querySnapshot.docs.map((doc) => ({
          userName: doc.id,
          ...doc.data()
        }));
        // 남은 시간이 많은 순으로 정렬
        recordsArray.sort((a, b) => b.timeSpent - a.timeSpent);
        setRecords(recordsArray);
      } catch (error) {
        console.error("Error fetching datas: ", error);
      }
    };

    fetchRecords();
  }, []);

  return (
    <RecordContainer>
      <RecordTitle>클리어 기록 보기</RecordTitle>
      {/*사이트 네비게이터*/}
      <RecordContents>
        <RecordNavigate />
        <RecordList>
          {records.map((record, index) => (
            <RecordItem key={index}>
              {index + 1}. {record.userName} -{" "}
              {String(Math.floor(record.timeSpent / 60)).padStart(2, "0")}:
              {String(record.timeSpent % 60).padStart(2, "0")}
            </RecordItem>
          ))}
        </RecordList>
      </RecordContents>
    </RecordContainer>
  );
};

export default Record;
