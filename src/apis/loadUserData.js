import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

// 저장된 데이터 불러오기
const loadUserData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const recordsArray = querySnapshot.docs.map((doc) => ({
      userName: doc.id,
      ...doc.data()
    }));

    // console.log(`fetching data : ${JSON.stringify(recordsArray, null, 2)}`);
    return recordsArray;
  } catch (error) {
    console.error("Error fetching documents: ", error);
    return [];
  }
};

export default loadUserData;
