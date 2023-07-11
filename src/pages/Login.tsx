import { CgLogIn, CgUserAdd, CgGoogle } from "react-icons/cg"

const Login = () => {
  return (
    <div className="container">
      <div className="form_wrapper">
        <div className="form signup">
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>
            <CgUserAdd />
            Register
          </button>
        </div>
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
      </div>
    </div>
  )
}

export default Login
