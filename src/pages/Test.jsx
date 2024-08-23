import ProgressBar from "../components/ProgressBar";
import Button from "../components/button/Button";
import SelectCalender from "../components/calender/SelectCalender";
const Text = () => {
  return (
    <>
      <ProgressBar />
      <Button text={"다음단계"}></Button>
      <SelectCalender />
    </>
  );
};

export default Text;
