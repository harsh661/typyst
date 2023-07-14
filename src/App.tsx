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

  const getQuotes = () => {
    setInput("")
    setText("")
    setShow(false)
    fetch("https://api.quotable.io/random?minLength=200&maxLength=220")
      .then((res) => res.json())
      .then((data) => {
        if (uppercase) {
          setText(data.content)
        } else {
          setText(data.content.toLowerCase())
        }
      })
  }

  const handleInput = (e: any) => {
    let index = input.length - 1

    setInput(e.target.value)
    if (e.target.value === text[0]) {
      setStart(true)
    } else if (e.target.value === text) {
      getQuotes()
    }

    if (start && input[index] !== text[index]) {
      setErrors((prev) => prev + 1)
    }
  }

  const count = () => {
    setInterval(() => setTimer((prev) => prev - 1), 1000)
  }

  const onFinish = () => {
    setShow(true)
  }

  return (
    <div className="container">
      {show ? (
        <Result input={input} time={testTime} errors={errors} />
      ) : (
        <>
          <Setting
            time={timer}
            setTime={setTestTime}
            uppercase={uppercase}
            setUppercase={setUppercase}
          />

          <div className={`text_container`}>
            {start && (
              <Timer onFinish={onFinish} time={timer} onStart={count}/>
            )}

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

          <span
            className={`${show || !text ? "hidden" : "reset"}`}
            onClick={getQuotes}
          >
            &#8634;
          </span>

          <input
            onChange={handleInput}
            value={input}
            id="input"
            autoFocus
            className="input_text"
            spellCheck={false}
            disabled={timer == 0}
          />
        </>
      )}
    </div>
  )
}

export default App
