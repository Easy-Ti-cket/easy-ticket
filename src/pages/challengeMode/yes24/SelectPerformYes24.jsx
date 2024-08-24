import { useEffect } from "react";

const SelectPerformYes24 = () => {
  const [, setThemeSite] = useAtom(themeSiteAtom);

  useEffect(() => {
    setProgress(1);
    const [, setLevel] = useAtom(levelAtom);
    const [, setProgress] = useAtom(progressAtom);
    setThemeSite("interpark"); // Interpark 테마 적용
    setPosterId(0);
  }, [setLevel, setProgress, selectedPoster, setThemeSite]);
  return <h1>yes24 페이지입니다</h1>;
};
export default SelectPerformYes24;
