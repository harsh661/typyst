import { useParams } from "react-router-dom"
import getUserById from "../../hooks/useGetUserById"
import { useEffect, useState } from "react"
import Avatar from "../components/Avatar"
import Tests from "../components/Tests"
import { DocumentData } from "firebase/firestore"

const Profile = () => {
  const params = useParams()
  const [speed, setSpeed] = useState(0)
  const [accuracy, setAccuracy] = useState(0)
  const [user, setUser] = useState<DocumentData | undefined>()

  useEffect(() => {
    getUser()
  }, [params])

  useEffect(() => {
    user?.tests.forEach((test:any) => {
      setSpeed(prev => prev + test.speed)
      setAccuracy(prev => prev + test.accuracy)
    })
  }, [user])

  const getUser = async () => {
    const data = (await getUserById(params.id))
    setUser(data)
  }

  
  if (!user) return
  
  const testLength = user.tests.length

  return (
    <div className="profile_container">
      <div className="profile">
        <div className="about">
          <Avatar src={user.photoUrl} name={user.displayName} />
          <div className="heading">
            <h2>{user?.displayName}</h2>
            <span className="small_text">{user?.email}</span>
          </div>
        </div>
        <hr />
        <div className="stats">
          <div className="heading">
            <h2>{testLength}</h2>
            <span className="small_text">tests taken</span>
          </div>
          <div className="heading">
            <h2>{speed !== 0 ? speed/testLength : 0}</h2>
            <span className="small_text">avg wpm</span>
          </div>
          <div className="heading">
            <h2>{accuracy !== 0 ? accuracy/testLength : 100}%</h2>
            <span className="small_text">avg accuracy</span>
          </div>
        </div>
      </div>
      <Tests tests={user.tests}/>
    </div>
  )
}

export default Profile
