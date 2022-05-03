export default function Game(props) {
  const cards = ["rock", "paper", "scissors", "spock", "lizard"]
  const cardElements = cards.map(card => (
    <div
      key={card}
      id={card}
      className="card"
      onClick={() => props.updateMyGesture(card)}>
        {card}
    </div>
  ))

  return (
    <div className="game">
      <div className="row scores">
        <div>You: {props.myScore}</div>
        <div>Computer: {props.computerScore}</div>
      </div>
      <div className="row gestures">
        <div>
          <img src={props.myGesture} alt="" />
        </div>
        <div>
          <h2>{props.results[props.results.length - 1]}</h2>
        </div>
        <div>
          <img src={props.computerGesture} alt="" />
        </div>
      </div>
      <div className="row cards">
        {cardElements}
      </div>
    </div>
  )
}