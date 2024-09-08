import TextHelpBox from "../../TextHelpBox";

const help4Text = [
  {
    high: true,
    low: true,
    content: (
      <TextHelpBox>
        현재 연습에는 신용카드 결제만 연습할 수 있습니다. <br />
        실제 예매 시에는 다른 결제 방법도 선택할 수 있습니다.
      </TextHelpBox>
    )
  },
  {
    high: true,
    low: true,
    content: (
      <TextHelpBox>
        결제에 사용할 카드 종류를 선택하세요. <br />
        우측 네모칸 화살표를 클릭하면 <br />
        다양한 카드 종류가 표시됩니다.
      </TextHelpBox>
    )
  },
  {
    high: true,
    low: true,
    content: (
      <TextHelpBox>
        카드 정보를 입력하여 결제를 진행하세요.
        <br /> 카드 번호: 카드 앞면의 16자리 번호를 입력하세요.
        <br /> 카드 비밀번호: 빨간 글씨로 나타난 카드의 비밀번호를 <br />
        적어주세요.
        <br /> CVC: 카드 뒷면의 보안 코드를 입력하세요.
      </TextHelpBox>
    )
  }
];

export default help4Text;
