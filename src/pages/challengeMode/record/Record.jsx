import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RecordNavigate from "../components/record/RecordNavigate";
import loadUserData from "../../../apis/loadUserData";
import { useAtomValue } from "jotai";
import { userNameAtom } from "../../../store/atom";

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

const RecordTitle = styled.h2`
  font-family: "pretendardB";
  font-size: 36px;
  color: var(--key-color);
  padding: 20px;
`;

//네비게이터 + 기록
const RecordContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

//행제목
const RecordListTitle = styled.div`
  display: flex;
`;
//전체 기록
const RecordTable = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
`;
//기록 한 행
const RecordList = styled.ul`
  display: flex;
  flex-direction: column;
`;
// 순위 + 이름 + 기록
const RecordItemContainer = styled.ul`
  display: flex;
  justify-content: center;
  //로그인한 유저의 기록일 경우
  width: ${(props) => props.$isUserRecord && "calc(100% + 100px)"};
  background-color: ${(props) =>
    props.$isUserRecord ? "var(--sub-color)" : "none"};
  transition: background-color 1s ease;
`;
const RecordItem = styled.li`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  font-family: "pretendardB";
  font-size: 24px;
  color: ${(props) =>
    props.$bold ? "var(--text-color2)" : "var(--text-color)"};
  font-size: 16px;
`;

const Record = () => {
  //db로부터 받은 데이터 + 정렬
  const [records, setRecords] = useState([]);
  //필터링된 데이터 (초기값 인터파크)
  const [filteredRecords, setFilteredRecords] = useState([]);
  //내 데이터 순위
  const [myRecordIndex, setMyRecordIndex] = useState(0);
  //세션스토리지에 저장된 자기 기록 (비교용)
  const myRecordTimeStamp = JSON.parse(
    sessionStorage.getItem("record")
  ).timeStamp;
  const myRecordNanoSec = myRecordTimeStamp.nanoseconds;
  const myRecordSec = myRecordTimeStamp.seconds;
  const userName = useAtomValue(userNameAtom);
  // 내가 지금 몇 등인지 알아내서 슬라이싱 반영
  // 내 기록인지 아닌짛 확인, css isUser 어쩌구 변경

  // 데이터베이스로부터 데이터 읽어오기 - loadUserData 함수
  useEffect(() => {
    loadUserData()
      .then((res) => {
        //정렬 후 저장
        const sortedRecords = res.sort((a, b) => b.timeSpent - a.timeSpent);
        setRecords(sortedRecords);
        //기록 초기화면 - 인터파크
        setFilteredRecords(
          sortedRecords.filter((item) => item.themeSite === "interpark")
        );
        //내 기록 순위 (세션스토리지 / db 비교)
        setMyRecordIndex(
          sortedRecords.findIndex(
            (item) =>
              item.timeStamp.nanoseconds === myRecordNanoSec &&
              item.timeStamp.seconds === myRecordSec
          )
        );
      })
      .catch((error) =>
        console.error(`데이터를 가져오는 도중 에러 발생 : ${error}`)
      );
  }, []);

  //시간 format 변경
  const formatTime = (time) => {
    return `${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, "0")}`;
  };

  //데이터 슬라이싱
  const startIndex = myRecordIndex < 3 ? 0 : myRecordIndex - 2;
  const endIndex = myRecordIndex < 3 ? 5 : myRecordIndex + 2;

  return (
    <RecordContainer>
      <RecordTitle>클리어 기록 보기</RecordTitle>
      <RecordContents>
        {/*사이트 네비게이터*/}
        <RecordNavigate
          records={records}
          setFilteredRecords={setFilteredRecords}
        />
        {/*기록 테이블 */}
        <RecordTable>
          {/*제목 */}
          <RecordListTitle>
            <RecordItem>순위</RecordItem>
            <RecordItem>이름</RecordItem>
            <RecordItem>남은 시간</RecordItem>
          </RecordListTitle>
          {/*기록 */}
          <RecordList>
            {filteredRecords
              .slice(startIndex, endIndex)
              .map((record, index) => (
                <RecordItemContainer
                  $isUserRecord={myRecordIndex === index}
                  key={index}
                >
                  <RecordItem $bold={true}>{index + 1}</RecordItem>
                  <RecordItem $bold={true}>{record.userName}</RecordItem>
                  <RecordItem>{formatTime(record.timeSpent)}</RecordItem>
                </RecordItemContainer>
              ))}
          </RecordList>
        </RecordTable>
      </RecordContents>
    </RecordContainer>
  );
};

export default Record;
