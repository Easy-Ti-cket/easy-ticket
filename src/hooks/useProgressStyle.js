import DefaultProgressStyle from "../components/progressBar/progressStyle/DefaultProgressStyle";
import InterParkProgressStyle from "../components/progressBar/progressStyle/InterParkProgressBarStyle";
import MelonProgressStyle from "../components/progressBar/progressStyle/MelonProgressStyle";
import { useAtomValue } from "jotai";
import { themeSiteAtom } from "../store/atom";

const useProgressStyle = () => {
  const themeSite = useAtomValue(themeSiteAtom);

  switch (themeSite) {
    case "interpark":
      return InterParkProgressStyle;
    case "melonticket":
      return MelonProgressStyle;
    default:
      return DefaultProgressStyle;
  }
};

export default useProgressStyle;
