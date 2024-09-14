import styled from "styled-components";
import { FormWrap } from "../FormStyle";
import { InputContainer, Label } from "../../input/InputStyle";
import { useAtomValue } from "jotai";
import { levelAtom, themeSiteAtom, userNameAtom } from "../../../store/atom";
import ErrorText from "../../errorText/ErrorText";

const BuyerWrap = styled.div`
  display: flex;
  gap: 30px;
`;

const BuyerContainer = styled(FormWrap)`
  gap: 10px;
`;

const BuyerLabel = styled(Label)`
  color: var(--text-color);
`;

const InfoBox = styled.div`
  //태그가 input일 경우에도 width 설정
  width: ${(props) => (props.as === "input" ? "100%" : "320px")};
  height: 40px;
  background-color: white;
  font-size: 16px;
  border: 1px solid var(--fill-color);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => props.$hasError && "2px solid var(--point-color)"};
`;

// mock buyer data
const data_essential = {
  practice: [
    { label: "이름", value: "" },
    //폼형식
    { label: "생년월일", value: "010630" },
    { label: "연락처", value: "010-1234-5678" },
    { label: "이메일", value: "abcd@gmail.com" }
  ],
  ticketlink: [
    { label: "이름", value: "" },
    { label: "연락처", value: "010-7125-8042" },
    { label: "이메일", value: "abcd@gmail.com" }
  ]
};

const data_delivery = [
  { label: "배송지정보", value: "서울특별시 00구 00로 12-34 100호" },
  { label: "주소", value: "서울특별시 00구 00로 12-34 100호" },
  { label: "우편번호", value: "123-1234" }
];

//div 에서 input 형식 변환
const InfoType = ({ isInput, ...props }) => {
  return <InfoBox as={isInput ? "input" : "div"} {...props} />;
};

const TicketBuyer = ({ option, setIsValidate, errorArray }) => {
  const userName = useAtomValue(userNameAtom);
  const themeSite = useAtomValue(themeSiteAtom);
  const level = useAtomValue(levelAtom);
  // 생년월일 입력 검사 로직 : 비어있거나 6이 아닌 경우
  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "" || value.length !== 6) {
      setIsValidate((prev) => prev.filter((item) => item !== "birth"));
    } else {
      setIsValidate((prev) =>
        prev.includes("birth") ? prev : [...prev, "birth"]
      );
    }
  };
  const hasError = errorArray.includes("birth");

  //폼 형식
  const formFormat = data_essential[themeSite]
    ? data_essential[themeSite]
    : data_essential["practice"];
  // 폼 조건
  const InfoContents = (item) => {
    if (item.label === "이름") {
      return <InfoType>{userName}</InfoType>;
    }
    if (item.label === "생년월일" && level === "high") {
      return (
        <InfoType
          isInput={true}
          placeholder="생년월일 예시 : 990726"
          name="birth"
          type="number"
          onChange={handleChange}
          $hasError={hasError}
        />
      );
    }
    return <InfoType>{item.value}</InfoType>;
  };

  return (
    <>
      <BuyerWrap>
        {option === "현장수령" && (
          <BuyerContainer>
            {hasError && <ErrorText text="생년월일을 정확히 작성해 주세요" />}
            {formFormat.map((item, index) => (
              <InputContainer key={index}>
                <BuyerLabel>{item.label}</BuyerLabel>
                {InfoContents(item)}
              </InputContainer>
            ))}
          </BuyerContainer>
        )}

        {option.includes("배송") && (
          <BuyerContainer>
            {data_delivery.map((item, index) => (
              <InputContainer key={index}>
                <BuyerLabel>{item.label}</BuyerLabel>
                <InfoBox>{item.value}</InfoBox>
              </InputContainer>
            ))}
          </BuyerContainer>
        )}
      </BuyerWrap>
    </>
  );
};

export default TicketBuyer;
