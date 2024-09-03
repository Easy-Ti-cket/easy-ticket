import DefaultProgressStyle from "../components/progressBar/progressStyle/DefaultProgressStyle";
import InterParkProgressStyle from "../components/progressBar/progressStyle/InterParkProgressBarStyle";
import MelonProgressStyle from "../components/progressBar/progressStyle/MelonProgressStyle";
import Yes24ProgressStyle from "../components/progressBar/progressStyle/Yes24ProgressStyle";
import TicketLinkProgressStyle from "../components/progressBar/progressStyle/TicketLinkProgressStyle";
import { useAtomValue } from "jotai";
import { themeSiteAtom } from "../store/atom";

const useProgressStyle = () => {
  const themeSite = useAtomValue(themeSiteAtom);

  switch (themeSite) {
    case "interpark":
      return InterParkProgressStyle;
    case "melonticket":
      return MelonProgressStyle;
    case "yes24":
      return Yes24ProgressStyle;
    case "ticketlink":
      return TicketLinkProgressStyle;
    default:
      return DefaultProgressStyle;
  }
};

export default useProgressStyle;
