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
  RecordTitle,
  ButtonContainer
} from "./RecordStyle";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/button/Button";

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
  const myName = myRecord && myRecord.userName;
  //로딩
  const [loading, setLoading] = useState(true);

  //loadUserData
  useEffect(() => {
    loadUserData()
      .then((res) => {
        //정렬 후 저장
        const sortedRecords = res.sort((a, b) => b.timeSpent - a.timeSpent);
        setRecords(sortedRecords);
        // console.log("데이터가 fetching 됨")
      })
      .catch((error) =>
        console.error(`데이터를 가져오는 도중 에러 발생 : ${error}`)
      );
  }, []);

  //기록 초기화면 - 필터링된 기록
  useEffect(() => {
    if (records.length > 0) {
      // console.log("데이터 필터링 함")
      const filter = (site) =>
        records.filter((item) => item.themeSite === site);
      setFilteredRecords(filter(myThemeSite));
    }
  }, [records, myThemeSite]);

  //내 기록 index (순위x, 세션스토리지 / db 비교)
  useEffect(() => {
    if (myRecord && filteredRecords.length > 0) {
      // console.log("데이터 비교함")
      const myRecordNanoSec = myRecord.timeStamp.nanoseconds;
      const myRecordSec = myRecord.timeStamp.seconds;
      setMyRecordIndex(
        filteredRecords.findIndex(
          (item) =>
            item.timeStamp.nanoseconds === myRecordNanoSec &&
            item.timeStamp.seconds === myRecordSec &&
            item.userName === myName
        )
      );
    }
  }, [myRecord, filteredRecords, myName]);

  //페이지네이션
  const [activePage, setActivePage] = useState(1);
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

  //activePage(활성화될 페이지) 설정
  useEffect(() => {
    if (myRecordIndex !== -1) {
      setActivePage(
        myRecordIndex ? Math.floor((myRecordIndex + 1) / 10) + 1 : 1
      );
    }
    setLoading(false);
  }, [myRecordIndex]);

  //사용자가 진행한 themeSite와 기록 순위에서 css 변경
  const [clickThemeSite, setClickThemeSite] = useState(myThemeSite);
  //사용자의 기록인지에 대한 여부
  const isUserRecord = (record) => {
    if (!myRecord || !myRecordIndex || !myRecord.userName) {
      return false;
    }
    const indexTrue =
      myRecordIndex === filteredRecords.findIndex((item) => item === record);
    const themeTrue = myThemeSite === clickThemeSite;
    const nameTrue = myName === myRecord.userName;
    return indexTrue && themeTrue && nameTrue;
  };

  const nav = useNavigate();
  //시간 format 변경
  const formatTime = (time) => {
    return `${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, "0")}`;
  };

  //로딩창
  if (loading) {
    return <h1>로딩 중</h1>;
  }

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
          setActivePage={setActivePage}
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
                <RecordItem $bold={true}>
                  {record.userName.length > 6
                    ? record.userName.slice(0, 6) + "..."
                    : record.userName}
                </RecordItem>
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
      <ButtonContainer>
        <Button text="도전하기" onClick={() => nav("/select-site")} />
        <Button
          text="메인으로 돌아가기"
          onClick={() => nav("/")}
          type="outline"
        />
      </ButtonContainer>
    </RecordContainer>
  );
};

export default Record;
