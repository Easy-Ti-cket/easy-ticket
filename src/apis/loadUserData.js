import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

// 저장된 데이터 불러오기
const loadUserData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const recordsArray = querySnapshot.docs.map((doc) => ({
      userName: doc.id,
      ...doc.data()
    }));
    // console.log(`fetching data : ${JSON.strigfy(recordsArray,null,2)}`);
    return recordsArray;
  } catch (error) {
    // console.log("No such document!")
  }
};

export default loadUserData;
