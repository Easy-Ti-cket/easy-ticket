import { levelAtom, stepTextNumberAtom, progressAtom } from "../store/atom";
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

const useText = (type) => {
  const progress = useAtomValue(progressAtom);
  const level = useAtomValue(levelAtom);
  const stepTextNumber = useAtomValue(stepTextNumberAtom);

  const stepTextsArray = [step1Text, step2Text, step3Text, step4Text];
  const helpTextsArray = [help1Text, help2Text, help3Text, help4Text];
  const textsArray = type === "help" ? helpTextsArray : stepTextsArray;

  const [filteredTexts, setFilteredTexts] = useState([]);

  useEffect(() => {
    if (progress === 0) return;
    // 고급모드일 경우 고급모드 text만 필터링
    const currentTexts = textsArray[progress - 1].filter((text) =>
      level === "high" ? text.high : text.low
    );

    setFilteredTexts(currentTexts);
  }, [progress, level, stepTextNumber]);

  if (progress === 0 || !filteredTexts[stepTextNumber]) {
    return null;
  }

  return filteredTexts[stepTextNumber]?.content;
};

export default useText;
