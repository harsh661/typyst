import React from "react"
import useGetResults from "../../hooks/useGetResults"

interface ResultProps {
    input: string
    errors: number
    time: number
    show: boolean
}

const Result: React.FC<ResultProps> = ({
    input, time, show, errors
}) => {

  const {speed, accuracy, cpm} = useGetResults({testTime: time, input, errors:errors})

  if(!show) return

  return (
    <div className="results">
        <div className="text">Speed</div>
        <div className="eval">{speed}<span>wpm</span></div>
        <div className="small_text">{cpm} <span>cpm</span></div>
        <hr style={{"width": '100%'}}/>
        <div className="text">Acc</div>
        <div className="eval">{accuracy}<span>%</span></div>
        <div className="small_text">{errors} <span>{errors > 1 ? 'errors': 'error'}</span></div>

        <a href="/" className="reset">&#8634;</a>
    </div>
  )
}

export default Result