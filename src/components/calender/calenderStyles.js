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

    width: 450px;
    height: 500px;
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
    font-size: 25px;
    cursor: default;
  }
  /*요일 전체 */
  .react-calendar__month-view__weekdays {
    border-bottom: 1px solid var(--fill-color);
    height: 50px;
  }
  /* 요일 밑줄 제거 */
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-family: "pretendardR";
    font-size: 20px;
    color: var(--text-color);
  }
  .react-calendar__month-view {
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* 일 날짜 간격 */
  .react-calendar__tile {
    height: 55px;
    position: relative;
    font-family: "pretendardM";
    font-size: 22px;
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
`;

export const StyledCalendar = styled(Calendar)``;
