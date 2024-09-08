import TextBox from "../../TextBox";

const step4Text = [
  {
    low: true,
    content: (
      <TextBox>
        다음은 결제 방식 선택 창입니다.{" "}
        <span style={{ color: "var(--key-color)" }}>신용카드 </span>결제 방식을
        선택해 주세요.
        <br />
        <span style={{ color: "var(--point-color)" }}>
          실제로는 다양한 결제 수단이 존재합니다.
        </span>
      </TextBox>
    )
  },
  {
    high: true,
    content: (
      <TextBox>
        <span style={{ color: "var(--key-color)" }}>신용카드</span>를 선택해
        주세요
      </TextBox>
    )
  },
  {
    high: true,
    low: true,
    content: (
      <TextBox>
        오른쪽 결제 수단 입력 창에서{" "}
        <span style={{ color: "var(--key-color)" }}>일반 신용카드</span>를
        선택하고, 카드 종류로{" "}
        <span style={{ color: "var(--key-color)" }}>BC카드</span>를 선택해
        주세요.
      </TextBox>
    )
  },
  {
    low: true,
    content: (
      <TextBox>
        화면에 보이는 신용카드에서{" "}
        <span style={{ color: "var(--key-color)" }}>
          카드번호, 카드 비밀번호, CVC번호
        </span>
        를 찾아 작성해 주세요.
        <br />
        <span style={{ color: "red" }}>
          실제 결제시엔 자신의 카드를 보며 작성해 주세요
        </span>
      </TextBox>
    )
  },
  {
    high: true,
    content: (
      <TextBox>
        다음 신용카드 그림에서{" "}
        <span style={{ color: "var(--key-color)" }}>카드 정보</span>를 찾아 아래
        빈칸에 입력해 주세요.
      </TextBox>
    )
  }
];

export default step4Text;
