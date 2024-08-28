import { useEffect } from "react";
import { useAtom } from "jotai";
import { fakeAllowedSeatAtom, levelAtom } from "../store/atom";
import getRandomInt from "../util/getRandomInt";

const useFakeAllowedSeat = (gridIndex, row, col) => {
  const [fakeAllowedSeat, setFakeAllowedSeat] = useAtom(fakeAllowedSeatAtom);
  const [level, setLevel] = useAtom(levelAtom);

  useEffect(() => {
    setFakeAllowedSeat([]);
    if (level === "high") {
      for (let i = 0; i < getRandomInt(1, 2); i++) {
        setFakeAllowedSeat((prev) => [
          ...prev,
          {
            //gridIndex보다 작은 값으로 설정

            gridIndex: getRandomInt(0, gridIndex),
            row: getRandomInt(0, row),
            col: getRandomInt(0, col)
          }
        ]);
      }
    }
  }, []);
};

export default useFakeAllowedSeat;
