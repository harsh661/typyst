import React from "react"

interface SettingProps {
  time: number
  setTime: (e: any) => void
}

const Setting: React.FC<SettingProps> = ({ time, setTime }) => {
  const handleChange = (e: any) => {
    setTime(e.target.value)
  }

  return (
    <div className="settings">
      <i className="fa fa-clock-o" style={{'fontSize': '24px'}}></i>
      <label htmlFor="15" className={`btn ${time == 15 && "selected"}`}>
        15
        <input
          className="hidden"
          value={15}
          onChange={handleChange}
          id="15"
          type="radio"
          name="time"
        />
      </label>
      <label htmlFor="30" className={`btn ${time == 30 && "selected"}`}>
        30
        <input
          className="hidden"
          value={30}
          onChange={handleChange}
          id="30"
          type="radio"
          name="time"
        />
      </label>
      <label htmlFor="60" className={`btn ${time == 60 && "selected"}`}>
        60
        <input
          className="hidden"
          value={60}
          onChange={handleChange}
          id="60"
          type="radio"
          name="time"
        />
      </label>
    </div>
  )
}

export default Setting
