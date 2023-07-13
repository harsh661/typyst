import { CgLogIn, CgGoogle } from "react-icons/cg"

const Login = () => {
  return (
    <div className="form signin">
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <button>
        <CgLogIn />
        Login
      </button>
      <button>
        <CgGoogle />
        Google
      </button>
    </div>
  )
}

export default Login
