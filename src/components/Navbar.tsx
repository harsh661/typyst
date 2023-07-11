import { LuGithub } from "react-icons/lu"
import { BiUser } from "react-icons/bi"
import { FaQuoteLeft } from "react-icons/fa"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="nav_container">
      <Link to={'/'} className="logo">
        <span className="logo_icon">
          <FaQuoteLeft />
        </span>
        typyst
      </Link>
      <div className="icons">
        <a href="https://github.com/harsh661/typyst">
          <LuGithub />
        </a>
        <Link to={'/login'}>
          <BiUser />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
