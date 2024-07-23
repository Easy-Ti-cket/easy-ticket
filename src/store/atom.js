import { atom } from "jotai";
import getRandomInt from "../util/getRandomInt";

// 초 단위 타이머 상태
export const secondCountAtom = atom(0);
export const readSecondCount = atom((get) => get(secondCountAtom));
export const writeSecondCount = atom(null, (get, set, update) =>
  set(secondCountAtom, update(get(secondCountAtom)))
);

// 분 단위 타이머 상태
export const minuteCountAtom = atom(0);
export const readMinuteCount = atom((get) => get(minuteCountAtom));
export const writeMinuteCount = atom(null, (get, set, update) =>
  set(minuteCountAtom, update(get(minuteCountAtom)))
);

//난이도 상태 (low, middle, high)
export const levelAtom = atom("low");

//단계 별 상태 (0,1,2,3,4,5)
export const progressAtom = atom(0);

//보라색 좌석 위치 상태
export const allowedSeatAtom = atom({
  gridIndex: getRandomInt(0, 3),
  row: getRandomInt(0, 4),
  col: getRandomInt(0, 4)
});

//좌석 선택 여부 상태
export const isSeatSelectedAtom = atom(true);
