import { doc, setDoc } from "firebase/firestore";
import { useAtomValue } from "jotai";
import { userNameAtom, themeSiteAtom, minuteCountAtom } from "../../store/atom";
import { db } from "../../firebase-config";

// 데이터 저장
const saveUserData = async () => {
  const userName = useAtomValue(userNameAtom);
  const themeSite = useAtomValue(themeSiteAtom);
  const timeSpent = useAtomValue(minuteCountAtom);

  if (userName && themeSite) {
    try {
      await setDoc(doc(db, "users", userName), {
        themeSite: themeSite,
        timeSpent: timeSpent
      });
      // console.log("데이터가 저장되었습니다.");
    } catch (e) {
      console.error("데이터 저장 실패: ", e);
    }
  }
};

export default saveUserData;
