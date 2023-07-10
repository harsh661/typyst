import React from "react"
import useGetResults from "../../hooks/useGetResults"

interface ResultProps {
    input: string
    time: number
    show: boolean
}

const Result: React.FC<ResultProps> = ({
    input, time, show
}) => {

  const speed = useGetResults({testTime: time, input})

  if(!show) return

  return (
    <div className="results">
        <div className="text">Speed</div>
        <div className="eval">{speed}<span>wpm</span></div>
        <hr />
        <div className="text">Acc</div>
        <div className="eval">{99}<span>%</span></div>

        <a href="/" className="reset">&#8634;</a>
    </div>
  )
}

export default Result