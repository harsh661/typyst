import React, { useEffect } from "react"

interface TimerProps {
  time: number
  onStart: () => void
  onFinish: () => void
}

const Timer: React.FC<TimerProps> = ({ onFinish, onStart, time }) => {

  useEffect(() => {
    onStart()
  }, [])

  useEffect(() => {
    if(time === 0) {
      onFinish()
    }
  }, [time, onFinish])

  return (
    <div className="time eval">
      {time}
    </div>
  )
}

export default Timer
