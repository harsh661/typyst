import React, { Dispatch, SetStateAction } from "react"
import {BiTimeFive} from 'react-icons/bi'

interface SettingProps {
  time: number
  setTime: (e: any) => void
  uppercase: boolean
  setUppercase: Dispatch<SetStateAction<boolean>>
}

const Setting: React.FC<SettingProps> = ({ time, setTime, uppercase, setUppercase }) => {
  const handleChange = (e: any) => {
    setTime(e.target.value)
  }

  const times = [15, 30, 60, 120]

  return (
    <div className="settings">
      <div onClick={()=>setUppercase(prev=>!prev)} className={`btn ${uppercase && 'selected'}`}>Abc</div>
      <span className="divider"/>
      <BiTimeFive />

      {times.map((value) => (
        <label key={value} htmlFor={value.toString()} className={`btn ${time == value && "selected"}`}>
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
