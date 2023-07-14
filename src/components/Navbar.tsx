import { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../../backend/firebase"
import { UserContext } from "../context/UserContext"
import { BiUser } from "react-icons/bi"
import { FaQuoteLeft } from "react-icons/fa"
import { MdOutlineLogout } from "react-icons/md"

const Navbar = () => {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const currentUser = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
        }
        setUser(currentUser)
      }
    })
  }, [user])

  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate(0)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="nav_container">
      <Link to={"/"} className="logo">
        <span className="logo_icon">
          <FaQuoteLeft />
        </span>
        typyst
      </Link>
      <div className="icons">

        <Link to={`${user ? `/profile/${user.uid}` : "/login"}`}>
          <BiUser />
          <span className="small_text">{user?.displayName}</span>
        </Link>

        {user && (
          <a onClick={logOut}>
            <MdOutlineLogout />
          </a>
        )}

      </div>
    </div>
  )
}

export default Navbar
