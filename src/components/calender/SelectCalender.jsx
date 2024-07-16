import { useState } from "react";
import { StyledCalendar, StyledCalendarWrapper } from "./calenderStyles";

export function SelectCalender() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  // console.log(selectedDate); //date 받아옴, 삭제 예정

  return (
    <StyledCalendarWrapper>
      <StyledCalendar
        onChange={setSelectedDate}
        value={selectedDate}
        calendarType="gregory"
        view="month"
        prevLabel="←"
        nextLabel="→"
        prev2Label={null}
        next2Label={null}
        showNeighboringMonth={false}
        formatDay={(_, date) =>
          //xx일 -> xx 으로 format 변경
          new Date(date).toLocaleDateString("en-us", {
            day: "2-digit",
          })
        }
        formatMonthYear={(_, date) =>
          new Date(date).toLocaleDateString("en-us", {
            month: "numeric",
          }) + "월"
        }
      />
    </StyledCalendarWrapper>
  );
}
