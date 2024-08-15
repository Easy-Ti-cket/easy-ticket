import { useState, useEffect } from "react";
import { StyledCalendar, StyledCalendarWrapper } from "./calenderStyles";

const SelectCalender = ({ onDateSelect, initialDate }) => {
  const [selectedDate, setSelectedDate] = useState(initialDate);

  useEffect(() => {
    if (initialDate) {
      setSelectedDate(initialDate);
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

  return (
    <StyledCalendarWrapper>
      <StyledCalendar
        onChange={handleDateChange}
        value={selectedDate}
        calendarType="gregory"
        view="month"
        prevLabel="←"
        nextLabel="→"
        prev2Label={null}
        next2Label={null}
        showNeighboringMonth={false}
        formatDay={(locale, date) => new Date(date).getDate()}
        formatMonthYear={(locale, date) => `${new Date(date).getMonth() + 1}월`}
      />
    </StyledCalendarWrapper>
  );
};

export default SelectCalender;
