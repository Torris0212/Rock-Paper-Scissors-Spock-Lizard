export default function Main(props) {
  const cards = ["Rock", "Paper", "Scissors", "Spock", "Lizard"]
  const cardElements = cards.map(card => (
    <div className="card">{card}</div>
  ))

  return (
    <main>
      <div className="row scores">
        <div>You: {props.myScore}</div>
        <div>Computer: {props.computerScore}</div>
      </div>
      <div className="row gestures">
        <div>
          <img src={props.myGesture} alt="" />
        </div>
        <div>
          <img src={props.computerGesture} alt="" />
        </div>
      </div>
      <div className="row cards">
        {cardElements}
      </div>
    </main>
  )
}