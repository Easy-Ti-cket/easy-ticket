import React, { useEffect, useState } from "react";
import RecordNavigate from "../components/record/RecordNavigate";
import loadUserData from "../../../apis/loadUserData";
import Paging from "../../../util/Paging";
//css
import {
  RecordContainer,
  RecordContents,
  RecordItem,
  RecordItemContainer,
  RecordList,
  RecordListTitle,
  RecordTable,
  RecordTitle
} from "./RecordStyle";

const Record = () => {
  //db로부터 받은 데이터 (정렬됨)
  const [records, setRecords] = useState([]);
  //필터링된 데이터
  const [filteredRecords, setFilteredRecords] = useState([]);
  //내 데이터 순위
  const [myRecordIndex, setMyRecordIndex] = useState(null);
  //세션스토리지에 저장된 record
  const myRecord = JSON.parse(sessionStorage.getItem("record"));
  const myThemeSite = myRecord ? myRecord.themeSite : "interpark";

  //loadUserData
  useEffect(() => {
    loadUserData()
      .then((res) => {
        //정렬 후 저장
        const sortedRecords = res.sort((a, b) => b.timeSpent - a.timeSpent);
        setRecords(sortedRecords);
        //기록 초기화면
        const filter = (site) =>
          sortedRecords.filter((item) => item.themeSite === site);
        setFilteredRecords(filter(myThemeSite));
        //내 기록 순위 (세션스토리지 / db 비교)
        if (myRecord) {
          const myRecordNanoSec = myRecord.timeStamp.nanoseconds;
          const myRecordSec = myRecord.timeStamp.seconds;
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
  //현재 렌더링된 페이지
  const [activePage, setActivePage] = useState(1);
  useEffect(() => {
    setActivePage(myRecordIndex ? Math.floor(myRecordIndex / 10) + 1 : 1);
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

  //사용자가 진행한 themeSite와 기록 순위에서 css 변경
  const [clickThemeSite, setClickThemeSite] = useState(myThemeSite);
  const isUserRecord = (record) => {
    const indexTrue =
      myRecordIndex === filteredRecords.findIndex((item) => item === record);
    const themeTrue = myThemeSite === clickThemeSite;
    return indexTrue && themeTrue;
  };

  return (
    <RecordContainer>
      <RecordTitle>클리어 기록 보기</RecordTitle>
      <RecordContents>
        {/*사이트 네비게이터*/}
        <RecordNavigate
          records={records}
          myThemeSite={myThemeSite}
          setFilteredRecords={setFilteredRecords}
          setClickThemeSite={setClickThemeSite}
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
                $isUserRecord={isUserRecord(record)}
                key={index}
              >
                <RecordItem
                  $isUserRecord={isUserRecord(record)}
                  $bold={true}
                  $highlight={true}
                >
                  {filteredRecords.findIndex((item) => item === record) + 1}
                </RecordItem>
                <RecordItem $bold={true}>{record.userName}</RecordItem>
                <RecordItem $isUserRecord={isUserRecord(record)}>
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
