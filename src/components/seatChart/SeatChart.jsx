import styled from "styled-components";
import DefaultSeatChart from "./DefaultSeatChart";
import SeatChart1 from "./SeatChart1";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ErrorText from "../errorText/errorText";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
//SeatChart 전체 컨테이너
const SeatChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  //임시로 크기 지정, contentsBox배치 시 달라질 수 있음
  width: 500px;
  height: 500px;
  border: ${(props) => props.$showError && "2px dashed var(--point-color)"};
  border-radius: 8px;
`;
//num으로 하는게 맞나?
const getSeatChartNum = (type) => {
  switch (type) {
    case "challenge":
      return SeatChart1;
    default:
      return DefaultSeatChart;
  }
};

const SeatChart = ({ showError = false }) => {
  const path = useLocation().pathname;
  const [type, setType] = useState("default");
  useEffect(() => {
    if (path.includes("challenge")) {
      setType("challenge");
    }
  }, []);
  const SelectedSeatChart = getSeatChartNum(type);
  return (
    <Wrap>
      {showError && <ErrorText text="좌석을 선택해 주세요" />}
      <SeatChartContainer $showError={showError}>
        <SelectedSeatChart></SelectedSeatChart>
      </SeatChartContainer>
    </Wrap>
  );
};

export default SeatChart;
