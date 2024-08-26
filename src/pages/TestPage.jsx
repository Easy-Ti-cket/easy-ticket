import SeatChart from "../components/seatChart/SeatChart";
import SeatGrid from "../components/seatChart/seatGrid/SeatGrid";
import SeatSection from "../components/seatSection/SeatSection";
const TestPage = () => {
  return (
    <div>
      <SeatSection num={1}></SeatSection>
      <SeatChart />
      <SeatGrid> </SeatGrid>
    </div>
  );
};

export default TestPage;
