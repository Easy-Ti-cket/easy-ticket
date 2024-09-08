import styled from "styled-components";
import SelectPayMethodChallenge from "../../components/payMethod/SelectPayMethodChallenge";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectPayMethodTicketlink = () => {
  return (
    <Wrap>
      <SelectPayMethodChallenge />
    </Wrap>
  );
};

export default SelectPayMethodTicketlink;
