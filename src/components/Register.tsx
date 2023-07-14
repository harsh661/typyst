import { auth, db } from "../../backend/firebase"
import { FormEvent, useState } from "react"
import { CgUserAdd } from "react-icons/cg"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { doc, setDoc } from "firebase/firestore"

const Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPlassword] = useState<string>("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
              const user = userCredentials.user
            if(auth.currentUser) {
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then( async () => {
                  await setDoc(doc(db, "Users", userCredentials.user.uid), {
                    email: user.email,
                    displayName: user.displayName,
                    photoUrl: user.photoURL
                  })
                })
                .catch(err => {
                    console.log(err)
                })
            }
            navigate('/')
        })
        .catch(err => {
            console.log(err)
        })
  }
  return (
    <form onSubmit={handleSubmit} className="form signup">
      <input
        type="text"
        placeholder="name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
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
        onChange={(e) => setPlassword(e.target.value)}
      />
      <button>
        <CgUserAdd />
        Register
      </button>
    </form>
  )
}

export default Register
