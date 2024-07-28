import styled from "styled-components";
import Card from "../../components/card/Card";
import CardForm from "../../components/forms/CardForm";
import { Step4Container } from "./Step4Style";
import { useForm } from "../../hooks/useForm";
import Button from "../../components/button/Button";

const CardFormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const CardPay = () => {
  const { handleChange, correctList } = useForm();

  return (
    <Step4Container>
      <Card />
      <CardFormContainer>
        <CardForm handleChange={handleChange} />
      </CardFormContainer>
      <Button text="다음 단계" />
    </Step4Container>
  );
};

export default CardPay;
