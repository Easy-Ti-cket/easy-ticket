const formatTime = (timeData, date) => {
  const formatSingleTime = (time) => {
    const [hours, minutes] = time.split(":");
    let formattedHours = parseInt(hours, 10);
    let amPm = "오후";

    if (formattedHours < 12) {
      if (formattedHours === 0) {
        formattedHours = 12;
      }
      amPm = "오전";
    } else if (formattedHours === 12) {
      amPm = "오후";
    } else {
      formattedHours -= 12;
      amPm = "오후";
    }

    const formattedMinutes = minutes ? `${minutes}분` : "";
    return `${amPm} ${formattedHours}시 ${formattedMinutes}`.trim();
  };

  // 시간이 하나로 정해진 경우 그대로 반환
  if (typeof timeData === "string") {
    return [formatSingleTime(timeData)];
  }

  // 시간이 요일마다 다른 경우 해당 요일의 시간만 반환
  if (typeof timeData === "object") {
    const weekday = new Date(date).toLocaleDateString("en-GB", {
      weekday: "short"
    });
    const timesArray = timeData[weekday] || timeData.default || [];

    if (Array.isArray(timesArray)) {
      return timesArray.map(formatSingleTime);
    }
    return [formatSingleTime(timesArray)];
  }

  return [];
};

export default formatTime;
