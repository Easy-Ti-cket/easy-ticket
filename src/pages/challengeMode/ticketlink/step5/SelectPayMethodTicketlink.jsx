import styled from "styled-components";
import SelectPayMethodChallenge from "../../components/payMethod/SelectPayMethodChallenge";
import { useSetAtom } from "jotai";
import { progressAtom } from "../../../../store/atom";
import { useEffect } from "react";
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectPayMethodTicketlink = () => {
  const setProgress = useSetAtom(progressAtom);
  useEffect(() => setProgress(5), []);

  return (
    <Wrap>
      <SelectPayMethodChallenge />
    </Wrap>
  );
};

export default SelectPayMethodTicketlink;
