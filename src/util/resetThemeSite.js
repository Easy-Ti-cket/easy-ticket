import { useAtomValue } from "jotai";
//import themeSiteAtom from ""

const resetThemeSite = () => {
  //const setThemeSite = useSetAtom(themeSiteAtom);
  sessionStorage.removeItem("themeSite");
};

export default resetThemeSite;
