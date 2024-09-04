import React from "react";
import { useAtomValue } from "jotai";
import { themeSiteAtom } from "../../../../store/atom";
import {
  InterparkText,
  MelonTicketText,
  TicketLinkText,
  Yes24Text
} from "../introMessage/introText/IntroText";

const ChallengeIntroMessage = () => {
  const themeSite = useAtomValue(themeSiteAtom);

  const renderMessage = () => {
    switch (themeSite) {
      case "interpark":
        return <InterparkText />;
      case "melonticket":
        return <MelonTicketText />;
      case "ticketlink":
        return <TicketLinkText />;
      case "yes24":
        return <Yes24Text />;
      default:
        return null;
    }
  };

  return <>{renderMessage()}</>;
};

export default ChallengeIntroMessage;
