import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../backend/firebase"

interface getTestProps {
  id: string
}

const getTestsById = async (id: getTestProps) => {
    let tests:any = []
  const q = query(collection(db, "tests"), where("userId", "==", id))

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    tests.push(doc.data())
  })

  return tests
}

export default getTestsById
