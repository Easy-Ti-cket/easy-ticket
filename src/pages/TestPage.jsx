import SeatChart from "../components/seatChart/SeatChart";
import SeatGrid from "../components/seatChart/seatGrid/SeatGrid";
import SeatSection1 from "../components/seatSection/SeatSection1";
const TestPage = () => {
  return (
    <div>
      <SeatSection1></SeatSection1>
      <SeatChart />
      <SeatGrid> </SeatGrid>
    </div>
  );
};

export default TestPage;
