import Login from "../components/Login"
import Register from "../components/Register"

const Form = () => {
  return (
    <div className="container">
      <div className="form_wrapper">
        <Register />
        <Login />
      </div>
    </div>
  )
}

export default Form
