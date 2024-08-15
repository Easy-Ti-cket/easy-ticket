import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

export const StyledCalendarWrapper = styled.div`
  /*라이브러리 기본 설정 */
  position: relative;
  color: var(--text-color2);

  .react-calendar {
    //삭제 예정, 화면 끝에서 떨어뜨려서 보기 위함
    margin: 20px;

    min-width: 300px;
    min-height: 300px;
    border: 0.5px solid var(--fill-color);
    border-radius: 8px;
    box-shadow: 4px 2px 10px 0px rgba(0, 0, 0, 0.13);
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* 네비게이션 가운데 정렬 */
  .react-calendar__navigation {
    margin: 0;
  }

  /* 네비게이션 화살표 설정 */
  .react-calendar__navigation button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "pretendardM";
    font-size: 30px;
    &:nth-child(1),
    &:nth-child(3) {
      color: var(--key-color);
      font-family: "pretendardR";
    }
    &:nth-child(1):hover,
    &:nth-child(3):hover {
      color: var(--key-color);
    }
    &:hover {
      background: none;
    }
    &:focus {
      background: none;
    }
  }
  /* 네비게이션 글씨 설정 */
  .react-calendar__navigation__label > span {
    font-size: 20px;
    cursor: default;
  }
  /*요일 전체 */
  .react-calendar__month-view__weekdays {
    border-bottom: 1px solid var(--fill-color);
    height: 35px;
  }
  /* 요일 밑줄 제거 */
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-family: "pretendardR";
    font-size: 18px;
    color: var(--text-color);
  }
  .react-calendar__month-view {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    min-width: 280px;
    min-height: 280px;
  }
  /* 일 날짜 간격 */
  .react-calendar__tile {
    padding: 11px;
    //삭제 예정
    position: relative;
    font-family: "pretendardM";
    font-size: 18px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    color: var(--text-color2);
  }
  /* 오늘 표시 변경 */
  .react-calendar__tile--now {
    background: none;
  }

  /* 선택한 날짜 스타일 적용 */
  .react-calendar__tile:enabled:hover {
    background-color: var(--sub-color);
    color: var(--key-color);
  }
  .react-calendar__tile:enabled:focus,
  .react-calender__tile:enabled:active {
    background-color: var(--key-color);
    color: var(--sub-color);
  }

  /* 월 클릭되지 않도록 수정 */
  .react-calendar__navigation__label {
    pointer-events: none;
  }
`;

export const StyledCalendar = styled(Calendar)`
  .react-calendar__month-view__days__day--weekend {
    color: var(--point-color);
  }
`;
