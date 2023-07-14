import React, { useContext, useEffect } from "react"
import useGetResults from "../../hooks/useGetResults"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../backend/firebase"
import { UserContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom"

interface ResultProps {
  input: string
  errors: number
  time: number
}

const Result: React.FC<ResultProps> = ({ input, time, errors }) => {
  const {user} = useContext(UserContext)
  const navigate = useNavigate()
  const { speed, accuracy, cpm } = useGetResults({
    testTime: time,
    input,
    errors: errors,
  })

  useEffect(() => {
    uploadData()
  }, [])

  const uploadData = async () => {
    if(!user) return
    await addDoc(collection(db, "tests"), {
      userId: user.uid,
      speed: speed,
      accuracy: accuracy,
      errors: errors,
      time: time,
    })
  }
  
  return (
    <div className="results">
      <div className="text">Speed</div>
      <div className="eval">
        {speed}
        <span>wpm</span>
      </div>
      <div className="small_text">
        {cpm} <span>cpm</span>
      </div>
      <hr style={{ width: "100%", height: "2px" }} />
      <div className="text">Acc</div>
      <div className="eval">
        {accuracy}
        <span>%</span>
      </div>
      <div className="small_text">
        {errors} <span>{errors > 1 ? "errors" : "error"}</span>
      </div>

      <a onClick={()=>navigate(0)} className="reset">
        &#8634;
      </a>
    </div>
  )
}

export default Result