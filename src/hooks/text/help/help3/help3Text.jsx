import TextHelpBox from "../../TextHelpBox";
const help3Text = [
  {
    high: true,
    low: true,
    content: (
      <TextHelpBox>
        왼쪽 ‘0매’라고 적힌 칸을 클릭한 후 좌석의 매수를 선택해야 <br />
        다음 단계로 넘어 갈 수 있습니다.
        <br /> 선택한 좌석의 매수와 총 가격을 확인하세요.
      </TextHelpBox>
    )
  },
  {
    high: true,
    low: true,
    content: (
      <TextHelpBox>
        티켓 수령 방법을 선택하고, 예매자 정보를 입력하세요. <br />
        예매자 정보가 정확하지 않을 경우
        <br /> 예매가 완료되지 않을 수 있습니다.
        <br />
        배송을 선택하실 경우 배송비가 추가됩니다.
      </TextHelpBox>
    )
  }
];

export default help3Text;
