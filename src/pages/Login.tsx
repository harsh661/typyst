const Login = () => {
  return (
    <div className="container">
      <div className="form_wrapper">
        <div className="form signup">
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Register</button>
        </div>
        <div className="form signin">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Login</button>
          <button>Google</button>
        </div>
      </div>
    </div>
  )
}

export default Login
