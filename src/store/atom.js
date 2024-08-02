import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import posters from "../components/poster/poster.json";
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

// 포스터 json 데이터
export const postersAtom = atom(posters);

// 선택된 포스터의 id 상태(고급, 실전만 해당)
export const selectedPosterAtom = atom(0);

//카드번호 정답
export const cardAnswerAtom = atom([]);

//보라색 좌석 위치 상태
export const allowedSeatAtom = atom({
  gridIndex: getRandomInt(0, 3),
  row: getRandomInt(0, 4),
  col: getRandomInt(0, 4)
});

//좌석 선택 여부 상태
export const isSeatSelectedAtom = atom(false);

//구역 선택
export const allowedSectionAtom = atom(getRandomInt(1, 4));

export const userNameAtom = atom("");

//연습모드 완료 횟수
export const practiceCountAtom = atomWithStorage("practiceCount", 0);

//좌석 매수 개수
export const seatCountAtom = atom(0);

//좌석 등급, 가격
export const seatInfoAtom = atom({
  grade: "",
  price: 0,
  date: ""
});
