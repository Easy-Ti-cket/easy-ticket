import { useState, useEffect } from "react";
import { StyledCalendar, StyledCalendarWrapper } from "./calenderStyles";

const SelectCalender = ({ onDateSelect, initialDate }) => {
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [activeStartDate, setActiveStartDate] = useState(new Date());

  useEffect(() => {
    if (initialDate) {
      setSelectedDate(new Date(initialDate));
    }
  }, [initialDate]);

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
    <StyledCalendarWrapper>
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
        formatMonthYear={(locale, date) => `${new Date(date).getMonth() + 1}월`}
        onActiveStartDateChange={handleActiveStartDateChange}
        activeStartDate={activeStartDate}
        onClickMonth={handleMonthClick}
      />
    </StyledCalendarWrapper>
  );
};

export default SelectCalender;
