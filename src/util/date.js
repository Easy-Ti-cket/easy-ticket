// 공연 날짜가 하루일 때
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekDay = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];

  return `${year}년 ${month}월 ${day}일(${weekDay})`;
};

// 공연 날짜가 범위로 주어질 때
export const formatDateRange = (dates) => {
  if (dates.length === 1) {
    return formatDate(dates[0]);
  } else if (dates.length === 2) {
    return `${formatDate(dates[0])} ~ ${formatDate(dates[1])}`;
  }
  return "";
};
