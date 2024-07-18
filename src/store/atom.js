import { atom } from "jotai";

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
export const difficultyAtom = atom("easy");
//정해진 구간 내 랜덤 정수 생성. util로 빼기
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
//보라색 좌석 상태
export const allowedSeatAtom = atom({
  gridIndex: getRandomInt(0, 3),
  row: getRandomInt(0, 4),
  col: getRandomInt(0, 4)
});
