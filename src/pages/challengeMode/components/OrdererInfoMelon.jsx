import styled from "styled-components";
import { useAtomValue } from "jotai";
import Input from "../../../components/input/Input";
import { userNameAtom } from "../../../store/atom";
const OrderInfoMelonContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  width: 600px;
  height: 180px;
  border-radius: 4px;
`;
const Header = styled.div`
  font-family: PretendardB;
  font-size: 20px;
  margin: 10px 0 10px 10px;
`;
const LineContainer = styled.div``;
const TextBox = styled.div`
  font-family: PretendardB;
  font-size: 18px;
  margin-left: 10px;
  margin-top: 10px;
`;
const NameBox = styled.div`
  font-family: PretendardR;
  font-size: 18px;
  display: inline;
  margin-left: 75px;
`;

const OrderInfoMelon = () => {
  const Name = useAtomValue(userNameAtom);
  return (
    <OrderInfoMelonContainer>
      <Header>주문자 정보</Header>
      <LineContainer>
        <TextBox>
          이름 <NameBox>{Name}</NameBox>
        </TextBox>

        <Input text={"연락처"} type={"text"}></Input>
        <Input text={"이메일"} type={"text"} value={"abcd@gmail.com"}></Input>
      </LineContainer>
    </OrderInfoMelonContainer>
  );
};

export default OrderInfoMelon;
