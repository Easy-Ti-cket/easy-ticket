import React, { useState, useEffect } from "react";
import SeatSection from "../../../../components/seatSection/SeatSection";
import SeatInfo from "../../../../components/seatInfo/SeatInfo";
import SeatChart from "../../../../components/seatChart/SeatChart";
import SecureModal from "../../../../components/secureModal/SecureModal";
import styled from "styled-components";
import { useAtomValue, useSetAtom } from "jotai";
import { isSectionSelectedAtom, progressAtom } from "../../../../store/atom";

const SelectSeatcontainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;6
  align-items: center;
  gap: 80px;
`;

const SelectSeatInterpark = () => {
  const isSectionSelected = useAtomValue(isSectionSelectedAtom);
  const setProgress = useSetAtom(progressAtom);
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => setProgress(2), [setProgress]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <SecureModal onClick={closeModal} />}
      <SelectSeatcontainer>
        {isSectionSelected ? <SeatChart /> : <SeatSection num={0} />}
        <SeatInfo />
      </SelectSeatcontainer>
    </>
  );
};

export default SelectSeatInterpark;
