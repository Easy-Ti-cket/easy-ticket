import { useEffect } from "react";
import { useAtom } from "jotai";
import { fakeAllowedSeatAtom, levelAtom } from "../store/atom";
import getRandomInt from "../util/getRandomInt";

const useFakeAllowedSeat = (gridIndex, row, col) => {
  const [fakeAllowedSeat, setFakeAllowedSeat] = useAtom(fakeAllowedSeatAtom);
  const [level, setLevel] = useAtom(levelAtom);
  //삭제 예정
  setLevel("high");
  useEffect(() => {
    setFakeAllowedSeat([]);
    if (level === "high") {
      for (let i = 0; i < 2; i++) {
        setFakeAllowedSeat((prev) => [
          ...prev,
          {
            gridIndex: gridIndex,
            row: getRandomInt(0, row),
            col: getRandomInt(0, col)
          }
        ]);
      }
    }
  }, []);
};

export default useFakeAllowedSeat;
