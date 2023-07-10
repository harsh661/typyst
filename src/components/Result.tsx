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

  const {speed, accuracy} = useGetResults({testTime: time, input, errors:errors})

  if(!show) return

  return (
    <div className="results">
        <div className="text">Speed</div>
        <div className="eval">{speed}<span>wpm</span></div>
        <hr />
        <div className="text">Acc</div>
        <div className="eval">{accuracy}<span>%</span></div>

        <a href="/" className="reset">&#8634;</a>
    </div>
  )
}

export default Result