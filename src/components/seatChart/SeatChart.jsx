import styled from "styled-components";
import SeatGrid from "./seatGrid/SeatGrid";
import { useAtom } from "jotai";
import {
  allowedSeatAtom,
  fakeAllowedSeatAtom,
  levelAtom
} from "../../store/atom";
import convertPriceObjectToArray from "../../util/convertPriceObjectToArray";
import DefaultSeatChart from "./DefaultSeatChart";
import SeatChart1 from "./SeatChart1";
import SeatChart2 from "./SeatChart2";
import { useEffect, useState } from "react";
import getRandomInt from "../../util/getRandomInt";
import { useLocation } from "react-router-dom";

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

const SeatChart = () => {
  const path = useLocation().pathname;
  const [type, setType] = useState("default");
  useEffect(() => {
    if (path.includes("challenge")) {
      setType("challenge");
    }
  }, []);
  const SelectedSeatChart = getSeatChartNum(type);
  return (
    <SeatChartContainer>
      <SelectedSeatChart></SelectedSeatChart>
    </SeatChartContainer>
  );
};

export default SeatChart;
