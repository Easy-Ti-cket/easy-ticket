import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { FirebaseError } from "firebase/app";
import { Timestamp } from "@firebase/firestore";

// 데이터 저장
const saveUserData = async (userName, themeSite, timeSpent) => {
  //저장할 데이터
  const data = {
    userName: userName,
    themeSite: themeSite,
    timeSpent: timeSpent,
    timeStamp: Timestamp.fromDate(new Date())
  };
  if (userName && themeSite) {
    try {
      await addDoc(collection(db, "users"), data);
      //세션스토리지 데이터 저장
      sessionStorage.setItem("record", JSON.stringify(data));
      console.log(`저장된 데이터 : ${JSON.stringify(data, null, 2)}`);
    } catch (e) {
      if (e instanceof FirebaseError) {
        // Firebase에서 발생한 오류 처리
        console.error("Firebase 오류:", e.code, e.message);
        switch (e.code) {
          case "permission-denied":
            console.error("권한이 없습니다. 데이터를 저장할 수 없습니다.");
            break;
          case "unavailable":
            console.error(
              "서비스가 현재 이용 불가능합니다. 나중에 다시 시도해주세요."
            );
            break;
          // 필요한 경우 다른 Firebase 오류 코드 추가
          default:
            console.error("알 수 없는 Firebase 오류가 발생했습니다.");
        }
      } else if (e instanceof TypeError) {
        // 타입 관련 오류 처리
        console.error("타입 오류:", e.message);
      } else {
        // 기타 오류 처리
        console.error("예상치 못한 오류:", e.message);
      }
    }
  } else {
    console.error(
      "유효하지 않은 입력 값입니다. userName과 themeSite가 필요합니다."
    );
  }
};

export default saveUserData;
