import TextHelpBox from "../../TextHelpBox";
import TextBox from "../../TextBox";

const help1Text = [
  {
    high: true,
    content: (
      <TextBox>
        원하는 공연의 포스터를 클릭하면 해당 공연의 예매페이지로 이동합니다.
        가고 싶은 공연의 이름을 미리 확인하세요! (실제 예매 시엔 예매하고자 하는
        공연을 클릭하면 됩니다)
      </TextBox>
    )
  },
  {
    high: true,
    low: true,
    content: (
      <TextHelpBox>
        공연 관람을 원하는 날짜와 회차(시간)을 선택하세요.
        <br />
        선택한 날짜와 시간에 맞춰 예매 가능한 좌석이 표시됩니다.
        <br />꼭 날짜와 회차(시간) 둘다 선택해야 한다는 걸 잊지마세요!
      </TextHelpBox>
    )
  },
  {
    high: true,
    low: true,
    content: (
      <TextBox>
        예매하기 버튼을 클릭하면 다음 단계로 넘어가
        <br /> 실제로 예매를 진행합니다.
      </TextBox>
    )
  }
];

export default help1Text;
