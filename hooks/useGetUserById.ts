import { doc, getDoc } from "firebase/firestore"
import { db } from "../backend/firebase"
import getTestsById from "./useGetTests"


const getUserById = async (id: string) => {
  const docRef = doc(db, "Users", id.toString())
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    const data = docSnap.data()
    const tests = await getTestsById(id)
    
    data.tests = tests

    return data
  } else {
    console.log("No such document!")
  }
}

export default getUserById
