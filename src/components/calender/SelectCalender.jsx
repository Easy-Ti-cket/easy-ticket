import { useState } from "react";
import { StyledCalendar, StyledCalendarWrapper } from "./calenderStyles";

const SelectCalender = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

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
        formatDay={(_, date) =>
          new Date(date).toLocaleDateString("en-us", {
            day: "2-digit"
          })
        }
        formatMonthYear={(_, date) =>
          new Date(date).toLocaleDateString("en-us", {
            month: "numeric"
          }) + "월"
        }
      />
    </StyledCalendarWrapper>
  );
};

export default SelectCalender;
