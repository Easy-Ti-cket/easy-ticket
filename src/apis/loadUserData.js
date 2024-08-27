import { doc, getDoc } from "firebase/firestore";

// 저장된 데이터 불러오기
const loadUserData = async (userName) => {
  const docRef = doc(db, "users", userName);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // console.log("No such document!");
    return null;
  }
};
