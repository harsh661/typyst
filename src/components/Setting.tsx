import React from "react"
import {BiTimeFive} from 'react-icons/bi'

interface SettingProps {
  time: number
  setTime: (e: any) => void
}

const Setting: React.FC<SettingProps> = ({ time, setTime }) => {
  const handleChange = (e: any) => {
    setTime(e.target.value)
  }

  const times = [15, 30, 60, 120]

  return (
    <div className="settings">
      <BiTimeFive />

      {times.map((value) => (
        <label htmlFor={value.toString()} className={`btn ${time == value && "selected"}`}>
          {value}
          <input
            className="hidden"
            value={value}
            onChange={handleChange}
            id={value.toString()}
            type="radio"
            name="time"
          />
        </label>
      ))}
    </div>
  )
}

export default Setting
