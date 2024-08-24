import { postersAtom, selectedPosterAtom } from "../../../../store/atom";
import { useAtomValue } from "jotai";
import TextBox from "../../TextBox";
const useStep1Text = () => {
  const posters = useAtomValue(postersAtom);
  const selectedPoster = useAtomValue(selectedPosterAtom);
  const posterName = posters[selectedPoster].title_ko;
  const posterDate = posters[selectedPoster].date[0];

  return [
    {
      //고급만
      high: true,
      content: (
        <TextBox>
          다음은 현재 진행 중인 공연 목록입니다.{" "}
          <span style={{ color: "var(--key-color)" }}>{posterName}</span>을
          선택해 주세요.
        </TextBox>
      )
    },
    {
      high: true,
      content: (
        <TextBox>
          <span style={{ color: "var(--key-color)" }}>{posterDate} 1회차 </span>
          공연을 선택해 주세요.
        </TextBox>
      )
    },

    {
      low: true,
      content: (
        <TextBox>
          다음은 공연 날짜 및 회차 선택창입니다.{" "}
          <span style={{ color: "var(--key-color)" }}>{posterDate} 1회차 </span>
          공연을 선택해 주세요.
        </TextBox>
      )
    },
    {
      low: true,
      high: true,
      content: (
        <TextBox>
          <span style={{ color: "var(--key-color)" }}>예매하기</span> 버튼을
          클릭해 주세요
        </TextBox>
      )
    }
  ];
};

export default useStep1Text;
