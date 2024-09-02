import { useState } from "react";
import SecureModal from "../../../../components/secureModal/SecureModal";
import SeatChart from "../../../../components/seatChart/SeatChart";
import SeatSection from "../../../../components/seatSection/SeatSection";
import styled from "styled-components";
import { useAtomValue, useSetAtom } from "jotai";
import {
  isSectionSelectedAtom,
  isSeatSelectedAtom,
  progressAtom,
  stepTextNumberAtom,
  helpTextNumberAtom
} from "../../../../store/atom";
import SeatInfo from "../../../../components/seatInfo/SeatInfo";
import ErrorTooltip from "../../../../components/tooltip/ErrorTooltip";
import { SeatInfoCont } from "../../../../components/seatInfo/SeatInfoStyles";
const SelectSeatContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 80px;
`;

const SeatInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TooltipText = styled.div`
  width: 380px;
  font-family: PretendardM;
`;

const SelectSeatMelon = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const isSectionSelected = useAtomValue(isSectionSelectedAtom);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <SelectSeatContainer>
      {/* {isModalOpen && <SecureModal onClick={closeModal} />} */}
      {isSectionSelected ? (
        <SeatChart></SeatChart>
      ) : (
        <SeatSection></SeatSection>
      )}

      <SeatInfoContainer>
        <ErrorTooltip
          contents={
            <TooltipText>
              좌석 선택 이후 5분내로 결제가 완료되지 않을시 <br />
              선택하신 좌석의 선점기회를 잃게됩니다
            </TooltipText>
          }
        ></ErrorTooltip>
        <SeatInfo></SeatInfo>
      </SeatInfoContainer>
    </SelectSeatContainer>
  );
};
export default SelectSeatMelon;
