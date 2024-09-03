import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useAtom } from "jotai";
import { selectedPosterAtom, levelAtom, postersAtom } from "../../store/atom";
import { StyledCalendar, StyledCalendarWrapper } from "./calendarStyles";
import ErrorTooltip from "../tooltip/ErrorTooltip";

const ErrorTooltipWrapper = styled.div`
  color: var(--text-color);
  font-size: 17px;
`;

const SelectCalendar = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const [level] = useAtom(levelAtom);
  const [selectedPoster] = useAtom(selectedPosterAtom);
  const [posters] = useAtom(postersAtom);
  const [posterId, setPosterId] = useState(0);

  useEffect(() => {
    if (level === "low" || level === "middle") {
      setPosterId(0);
    } else {
      setPosterId(selectedPoster);
    }
  }, [level, selectedPoster]);

  useEffect(() => {
    const poster = posters[posterId];
    if (poster && poster.date && poster.date.length > 0) {
      const initialDate = new Date(poster.date[0]); // 첫 번째 날짜를 사용
      setSelectedDate(initialDate);
      setActiveStartDate(initialDate);
    }
  }, [posterId, posters]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const offsetDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000 // 로컬 타임으로 변경
    );
    const formattedDate = offsetDate.toISOString().split("T")[0]; // 날짜를 "YYYY-MM-DD" 형식으로 포맷팅
    onDateSelect(formattedDate); // 부모 컴포넌트로 날짜 전달
  };

  // 화살표 사이 월 글자 클릭 무시
  const handleMonthClick = (e) => {
    e.preventDefault();
    e.stopPropagation(); // 클릭 이벤트가 상위 요소로도 전파되지 않도록 방지
  };

  // 화살표로 월 이동은 허용
  const handleActiveStartDateChange = ({ activeStartDate }) => {
    setActiveStartDate(activeStartDate);
  };

  return (
    <>
      <ErrorTooltip
        contents={
          <ErrorTooltipWrapper>
            공연 기간 중 첫번째 날짜를 선택해주세요.
          </ErrorTooltipWrapper>
        }
      ></ErrorTooltip>

      <StyledCalendarWrapper>
        <ErrorTooltipWrapper></ErrorTooltipWrapper>
        <StyledCalendar
          onChange={handleDateChange}
          value={selectedDate}
          calendarType="gregory"
          prevLabel="←"
          nextLabel="→"
          prev2Label={null}
          next2Label={null}
          showNeighboringMonth={false}
          formatDay={(locale, date) => new Date(date).getDate()}
          formatMonthYear={(locale, date) =>
            `${new Date(date).getMonth() + 1}월`
          }
          onActiveStartDateChange={handleActiveStartDateChange}
          activeStartDate={activeStartDate}
          onClickMonth={handleMonthClick}
        />
      </StyledCalendarWrapper>
    </>
  );
};

export default SelectCalendar;
