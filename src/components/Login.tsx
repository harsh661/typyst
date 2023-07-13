import { FormEvent, useState } from "react"
import { CgLogIn, CgGoogle } from "react-icons/cg"
import { auth } from "../../backend/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  return (
    <form onSubmit={handleSubmit} className="form signin">
      <input
        type="email"
        placeholder="email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>
        <CgLogIn />
        Login
      </button>
      <div>
        <CgGoogle />
        Google
      </div>
    </form>
  )
}

export default Login
