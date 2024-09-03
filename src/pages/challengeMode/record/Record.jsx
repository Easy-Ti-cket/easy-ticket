import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RecordNavigate from "../components/record/RecordNavigate";
import loadUserData from "../../../apis/loadUserData";
import Paging from "../../../util/Paging";

const RecordContainer = styled.div`
  width: 100vw;
  background-color: var(--dimmed-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 50px 0;
  text-align: center;
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
  margin-bottom: 20px;
`;
//전체 기록
const RecordTable = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
`;

const RecordList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
// 순위 + 이름 + 기록
const RecordItemContainer = styled.ul`
  display: flex;
  //로그인한 유저의 기록일 경우
  box-shadow: ${(props) => props.$isUserRecord && "2px 2px 0 rgba(0,0,0,0.2)"};
  border-radius: 8px;
  background-color: ${(props) =>
    props.$isUserRecord ? "var(--sub-color)" : "none"};
  transition: background-color 0.2s ease;
`;
const RecordItem = styled.li`
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

const Record = () => {
  //db로부터 받은 데이터 + 정렬
  const [records, setRecords] = useState([]);
  //필터링된 데이터 (초기값 인터파크)
  const [filteredRecords, setFilteredRecords] = useState([]);
  //내 데이터 순위
  const [myRecordIndex, setMyRecordIndex] = useState(-1);
  //세션스토리지에 저장된 자기 기록 (비교용)
  const myRecord = JSON.parse(sessionStorage.getItem("record"));

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
        const myRecordNanoSec = myRecord.timeStamp.nanoseconds;
        const myRecordSec = myRecord.timeStamp.seconds;
        if (myRecord) {
          setMyRecordIndex(
            sortedRecords.findIndex(
              (item) =>
                item.timeStamp.nanoseconds === myRecordNanoSec &&
                item.timeStamp.seconds === myRecordSec
            )
          );
        }
      })
      .catch((error) =>
        console.error(`데이터를 가져오는 도중 에러 발생 : ${error}`)
      );
  }, []);

  //시간 format 변경
  const formatTime = (time) => {
    return `${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, "0")}`;
  };

  //페이지네이션
  //현재 페이지
  const [activePage, setActivePage] = useState(1);
  useEffect(() => {
    setActivePage(myRecordIndex ? Math.floor(myRecordIndex / 10 + 1) : 1);
  }, [myRecordIndex]);
  //한 페이지 당 보여줄 아이템 개수
  const itemsCountPerPage = 10;
  //페이지네이션 네비게이터 개수
  const pageRangeDisplayed = 5;
  //페이지 변경 핸들링 함수
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  //실제 렌더링할 데이터
  const renderData = filteredRecords.slice(
    (activePage - 1) * itemsCountPerPage,
    activePage * itemsCountPerPage
  );

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
            {renderData.map((record, index) => (
              <RecordItemContainer
                $isUserRecord={
                  myRecordIndex ===
                  filteredRecords.findIndex((item) => item === record)
                }
                key={index}
              >
                <RecordItem
                  $isUserRecord={
                    myRecordIndex ===
                    filteredRecords.findIndex((item) => item === record)
                  }
                  $bold={true}
                  $highlight={true}
                >
                  {filteredRecords.findIndex((item) => item === record) + 1}
                </RecordItem>
                <RecordItem $bold={true}>{record.userName}</RecordItem>
                <RecordItem
                  $isUserRecord={
                    myRecordIndex ===
                    filteredRecords.findIndex((item) => item === record)
                  }
                >
                  {formatTime(record.timeSpent)}
                </RecordItem>
              </RecordItemContainer>
            ))}
          </RecordList>
        </RecordTable>
        <Paging
          activePage={activePage} //현재 페이지
          totalItemsCount={filteredRecords.length} //전체 data의 개수
          itemsPerPage={itemsCountPerPage} //페이지 당 보여줄 아이템 개수
          handlePageChange={handlePageChange}
          pageRangeDisplayed={pageRangeDisplayed}
        />
      </RecordContents>
    </RecordContainer>
  );
};

export default Record;
