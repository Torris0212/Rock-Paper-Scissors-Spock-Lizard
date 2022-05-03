import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

export default function ScoreBoard(props) {
  const scoreElements = props.results.map((result, index) => (
    <tr key={nanoid()}>
      <td>{index+1}</td>
      <td>{result}</td>
      <td>{result === "Win" ? "Lose" : result === "Tie" ? "Tie" : "Win"}</td>
    </tr>
  ))
  return (
    <div className="score-board">
      <h2>Score Board</h2>
      <table className="table">
        <thead>
          <tr>
          <th>#</th>
          <th>You</th>
          <th>Computer</th>
        </tr>
        </thead>
        <tbody>
          {scoreElements}
        </tbody>
      </table>
      <button className="reset" onClick={props.resetScores}>Reset</button>
    </div>
  )
}