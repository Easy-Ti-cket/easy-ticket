import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SecureModalContents from "../../../components/modal/modalContents/SecureModalContents";
import SeatChart from "../../../components/seatChart/SeatChart1";
import SeatSection from "../../../components/seatSection/SeatSection";
import { useAtomValue, useSetAtom, useAtom } from "jotai";
import {
  isSectionSelectedAtom,
  isSeatSelectedAtom,
  progressAtom,
  themeSiteAtom
} from "../../../store/atom";
import SeatInfo from "../../../components/seatInfo/SeatInfo";
import ErrorTooltip from "../../../components/tooltip/ErrorTooltip";

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
  font-size: 16px;
  font-family: PretendardM;
`;

const SelectSeatChallengeMode = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isSectionSelected, setIsSectionSelected] = useAtom(
    isSectionSelectedAtom
  );
  const setIsSeatSelected = useSetAtom(isSeatSelectedAtom);
  const setProgress = useSetAtom(progressAtom);
  const themeSite = useAtomValue(themeSiteAtom);

  useEffect(() => {
    setProgress(2);
    setIsSectionSelected(false);
    setIsSeatSelected(false);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //error css
  const [showChartError, setShowChartError] = useState(false);
  const [showSectionError, setShowSectionError] = useState(false);

  return (
    <SelectSeatContainer>
      {isModalOpen && <SecureModalContents onClick={closeModal} />}
      {isSectionSelected ? (
        <SeatChart showError={showChartError} />
      ) : (
        <SeatSection showError={showSectionError} />
      )}

      <SeatInfoContainer>
        {/* 에러 툴팁은 멜론티켓 페이지에서만 렌더링 */}
        {themeSite === "melonticket" && (
          <ErrorTooltip
            contents={
              <TooltipText>
                좌석 선택 이후 5분내로 결제가 완료되지 않을시 <br />
                선택하신 좌석의 선점기회를 잃게됩니다
              </TooltipText>
            }
          ></ErrorTooltip>
        )}
        {/*구역 선택 시엔 sectionError를,  좌석 선택 시엔 chartError 다룸*/}
        <SeatInfo
          setShowError={
            isSectionSelected ? setShowChartError : setShowSectionError
          }
        />
      </SeatInfoContainer>
    </SelectSeatContainer>
  );
};
export default SelectSeatChallengeMode;
