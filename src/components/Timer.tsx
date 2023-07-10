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

  if(time < 0 ) {
    onFinish()
    return
  }

  return (
    <div className="time eval">
      {time}
    </div>
  )
}

export default Timer
