import SeatChart from "../components/seatChart/SeatChart";
import SeatGrid from "../components/seatChart/seatGrid/SeatGrid";
import SeatSection from "../components/seatSection/SeatSection";
const TestPage = () => {
  return (
    <div>
      <SeatSection num={3}></SeatSection>
      <SeatChart num={1}></SeatChart>
    </div>
  );
};

export default TestPage;
