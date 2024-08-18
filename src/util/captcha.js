// 인증 예매를 위한 보안문자 이미지를 생성하는 함수
export const createCaptchaImage = (text) => {
  const canvas = document.createElement("canvas");
  canvas.width = 200;
  canvas.height = 60;
  const ctx = canvas.getContext("2d");

  // 랜덤 색상 생성
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // 배경 색상 랜덤 설정
  const backgroundColor = getRandomColor();
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 글자 색상 랜덤 설정
  const textColor = getRandomColor();
  ctx.font = "30px pretendardM";
  ctx.fillStyle = textColor;

  // 글자 왜곡
  const letters = text.split("");
  letters.forEach((letter, i) => {
    const x = 10 + i * 30; // 글자의 x 좌표
    const y = 40 + (Math.random() * 10 - 5); // 글자 높이 약간 랜덤하게 설정
    const angle = Math.random() * 0.3 - 0.15; // 회전 각도 랜덤 설정
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillText(letter, 0, 0);
    ctx.restore();
  });

  // 중앙에 선 그리기
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.strokeStyle = textColor; // 글자와 동일한 색상
  ctx.stroke();

  // 랜덤 노이즈
  for (let i = 0; i < 30; i++) {
    ctx.beginPath();
    ctx.arc(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      1,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = textColor; // 글자와 동일한 색상
    ctx.fill();
  }

  return canvas.toDataURL("image/png");
};
