import { atom } from "jotai";

export const timerAtom = atom(0);
export const advancedTimerAtom = atom((get) => {
  const totalSeconds = get(timerAtom);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return { minutes, seconds };
});
