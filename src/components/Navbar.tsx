import { LuGithub } from "react-icons/lu"
import { BiUser } from "react-icons/bi"
import { FaQuoteLeft } from "react-icons/fa"

const Navbar = () => {
  return (
    <div className="nav_container">
      <p className="logo">
        <span className="logo_icon">
          <FaQuoteLeft />
        </span>
        typyst
      </p>
      <div className="icons">
        <a href="https://github.com/harsh661/typyst">
          <LuGithub />
        </a>
        <a>
          <BiUser />
        </a>
      </div>
    </div>
  )
}

export default Navbar
