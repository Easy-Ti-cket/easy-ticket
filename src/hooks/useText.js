import {
  levelAtom,
  stepTextNumberAtom,
  helpTextNumberAtom,
  progressAtom
} from "../store/atom";
import { useAtomValue } from "jotai";
import step1Text from "./text/step/step1/step1Text";
import step2Text from "./text/step/step2/step2Text";
import step3Text from "./text/step/step3/step3Text";
import step4Text from "./text/step/step4/step4Text";
import help1Text from "./text/help/help1/help1Text";
import help2Text from "./text/help/help2/help2Text";
import help3Text from "./text/help/help3/help3Text";
import help4Text from "./text/help/help4/help4Text";
import { useEffect, useState } from "react";

const useText = () => {
  const progress = useAtomValue(progressAtom);
  const level = useAtomValue(levelAtom);

  const stepTextNumber = useAtomValue(stepTextNumberAtom);
  const helpTextNumber = useAtomValue(helpTextNumberAtom);

  const stepTextsArray = [step1Text, step2Text, step3Text, step4Text];
  const helpTextsArray = [help1Text, help2Text, help3Text, help4Text];

  const [filteredStepTexts, setFilteredStepTexts] = useState([]);
  const [filteredHelpTexts, setFilteredHelpTexts] = useState([]);
  useEffect(() => {
    if (progress === 0 || progress === 5) {
      return;
    }
    // 고급모드일 경우 고급모드 text만 필터링
    const currentStepTexts = stepTextsArray[progress - 1].filter((text) =>
      level === "high" ? text.high : text.low
    );
    const currentHelpTexts = helpTextsArray[progress - 1].filter((text) =>
      level === "high" ? text.high : text.low
    );
    setFilteredStepTexts(currentStepTexts);
    setFilteredHelpTexts(currentHelpTexts);
  }, [progress, level]);
  if (progress === 0 || progress === 5) {
    return {
      stepText: "",
      helpText: ""
    };
  }
  console.log(filteredHelpTexts[helpTextNumber]?.content);
  return {
    stepText: filteredStepTexts[stepTextNumber]?.content,
    helpText: filteredHelpTexts[helpTextNumber]?.content
  };
};

export default useText;
