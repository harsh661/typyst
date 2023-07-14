import { useParams } from "react-router-dom"
import getUserById from "../../hooks/useGetUserById"
import { useEffect, useState } from "react"
import Avatar from "../components/Avatar"

interface UserType {
  displayName?: string
  email?: string
  photoUrl?: string
  tests?: []
}

const Profile = () => {
  const params = useParams()
  const [user, setUser] = useState<UserType>({})

  useEffect(() => {
    getUser()
  }, [params])

  const getUser = async () => {
    const data = (await getUserById(params.id)) as Object
    setUser(data)
  }

  if (!user) return

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
            <h2>{3}</h2>
            <span className="small_text">tests taken</span>
          </div>
          <div className="heading">
            <h2>{45}</h2>
            <span className="small_text">avg wpm</span>
          </div>
          <div className="heading">
            <h2>{98}%</h2>
            <span className="small_text">avg accuracy</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
