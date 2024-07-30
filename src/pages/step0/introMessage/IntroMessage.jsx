import React from "react";
import { useAtom } from "jotai";
import { levelAtom } from "../../store/atom";
import { LowLevelText, MiddleLevelText, HighLevelText } from "./IntroText";

const IntroMessage = () => {
  const [level] = useAtom(levelAtom);

  const renderMessage = () => {
    switch (level) {
      case "low":
        return <LowLevelText />;
      case "middle":
        return <MiddleLevelText />;
      case "high":
        return <HighLevelText />;
      default:
        return null;
    }
  };

  return <>{renderMessage()}</>;
};

export default IntroMessage;
