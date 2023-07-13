import { useEffect, useState } from "react"
import Timer from "./components/Timer"
import Result from "./components/Result"
import Setting from "./components/Setting"

function App() {
  const [text, setText] = useState<string>("")
  const [start, setStart] = useState(false)
  const [show, setShow] = useState(false)
  const [input, setInput] = useState<string>("")
  const [errors, setErrors] = useState<number>(0)
  const [testTime, setTestTime] = useState<number>(30)
  const [timer, setTimer] = useState<number>(testTime)
  const [uppercase, setUppercase] = useState<boolean>(false)

  useEffect(() => {
    getQuotes()
  }, [uppercase])

  useEffect(() => {
    setTimer(testTime)
  }, [testTime])

  const handleKeyPress = () => {
    if(start) {
      const wrongTexts = document.querySelectorAll(".incorrect")
      if (wrongTexts.length) {
        setErrors(prev => prev + 1)
      }
    }
  }

  const getQuotes = () => {
    setInput("")
    setText("")
    setShow(false)
    fetch("https://api.quotable.io/random?minLength=200&maxLength=220")
      .then((res) => res.json())
      .then((data) => {
        if(uppercase) {
          setText(data.content)
        } else {
          setText(data.content.toLowerCase())
        }
      })
  }

  const handleInput = (e: any) => {
    setInput(e.target.value)
    if (e.target.value === text[0]) {
      setStart(true)
    }
    if (e.target.value === text) {
      getQuotes()
    }
  }

  const onFinish = () => {
    setText("")
    setShow(true)
  }

  const count = () => {
    setInterval(() => setTimer((prev) => prev - 1), 1000)
  }

  return (
    <div className="container">
      {!show && 
      <Setting
        time={timer}
        setTime={setTestTime}
        uppercase={uppercase}
        setUppercase={setUppercase}
      />}

      <div className={`text_container`}>
        {start && <Timer onFinish={onFinish} time={timer} onStart={count} />}

        {text?.split("").map((letter, index) => (
          <span
            key={index}
            className={`items ${
              input[index] === letter
                ? "correct"
                : input[index] === undefined
                ? "text"
                : "incorrect"
            }`}
          >
            {letter}
          </span>
        ))}
        <label htmlFor="input" className="label" />
      </div>

      <span className={`${show || !text ? 'hidden': 'reset'}`} onClick={getQuotes}>
        &#8634;
      </span>

      <input
        onKeyUp={handleKeyPress}
        onChange={handleInput}
        value={input}
        id="input"
        autoFocus
        className="input_text"
        spellCheck={false}
        disabled={timer == 0}
      />

      <Result show={show} input={input} time={testTime} errors={errors} />
    </div>
  )
}

export default App
