import React from 'react'

export default function QuizResult(props) {
  return (
    <div>
      Your  Score:{props.score}  <br />
      Total Score: {props.totalscore}
    </div>
  )
}
