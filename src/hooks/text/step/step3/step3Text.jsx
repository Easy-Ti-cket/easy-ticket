import TextBox from "../../TextBox";

const step3Text = [
  {
    high: true,
    low: true,
    content: (
      <TextBox>
        예매하고자 하는{" "}
        <span style={{ color: "var(--key-color)" }}>좌석의 매수를 선택</span>
        하고, 가격을 확인한 뒤{" "}
        <span style={{ color: "var(--key-color)" }}>‘다음단계’</span>를
        눌러주세요.
      </TextBox>
    )
  },
  {
    low: true,
    content: (
      <TextBox>
        다음은 예매자 정보입니다.{" "}
        <span style={{ color: "var(--key-color)" }}>현장 수령</span> 또는
        <span style={{ color: "var(--key-color)" }}> 배송</span>을 선택 한 후,
        <strong>‘다음단계’</strong>를 클릭해 주세요.
        <br />
        배송 선택 시엔 배송비가 부과됩니다.{" "}
        <span style={{ color: "var(--point-color)" }}>
          실제 예매시엔 내 정보와 일치한지 확인해 주세요.
        </span>
      </TextBox>
    )
  },
  {
    high: true,
    content: (
      <TextBox>
        <span style={{ color: "var(--key-color)" }}>예매자 정보</span>를
        확인하고, <span style={{ color: "var(--key-color)" }}>현장 수령 </span>
        또는 <span style={{ color: "var(--key-color)" }}>배송</span>을 선택한
        후에 <span style={{ color: "var(--key-color)" }}>결제하기</span>를
        클릭해 주세요
      </TextBox>
    )
  }
];

export default step3Text;
