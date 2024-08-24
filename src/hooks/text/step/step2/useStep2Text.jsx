import { allowedSectionAtom } from "../../../../store/atom";
import { useAtomValue } from "jotai";
import TextBox from "../../TextBox";

const useStep2Text = () => {
  const section = useAtomValue(allowedSectionAtom);

  return [
    {
      low: true,
      content: (
        <TextBox>
          다음은 공연장 배치도입니다.
          <span style={{ color: "var(--key-color)" }}> {section}구역</span>을
          클릭하여 선택해 주세요.
        </TextBox>
      )
    },
    {
      high: true,
      content: (
        <TextBox>
          <span style={{ color: "var(--key-color)" }}>{section}구역</span>을
          선택해 주세요.
        </TextBox>
      )
    },
    {
      low: true,
      content: (
        <TextBox>
          <span style={{ color: "var(--key-color)" }}>보라색</span>으로 색칠된
          좌석만 예매 가능합니다.
          <br />
          좌석배치도에서
          <span style={{ color: "var(--key-color)" }}>예매 가능한 좌석</span>을
          클릭해 주세요.
        </TextBox>
      )
    },
    {
      high: true,
      content: (
        <TextBox>
          <span style={{ color: "var(--key-color)" }}>예매 가능한 좌석</span>을
          클릭하고 다음 단계로 넘어가세요. 제한시간{" "}
          <span style={{ color: "var(--key-color)" }}>30초</span>
          이내에 완료해야 합니다.
        </TextBox>
      )
    },
    {
      high: true,
      low: true,
      content: (
        <TextBox>
          <span style={{ color: "var(--key-color)" }}>좌석 선택 완료 </span>
          버튼을 클릭해 주세요.
        </TextBox>
      )
    }
  ];
};

export default useStep2Text;
