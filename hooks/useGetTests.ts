import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../backend/firebase"


const getTestsById = async (id: string) => {
    let tests:any = []
  const q = query(collection(db, "tests"), where("userId", "==", id))

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    tests.push(doc.data())
  })

  return tests
}

export default getTestsById
