import React from 'react'
import Nav from './components/Nav'
import Main from './components/Main'
import question from './images/question.jpg'
import rock from './images/rock.png'
import paper from './images/paper.png'
import scissors from './images/scissors.png'
import spock from './images/spock.png'
import lizard from './images/lizard.png'
import { getGesture } from './getData'
import './App.css'

function App() {
  const Images = {
    rock,paper,scissors,spock,lizard,question,
  }
  const [myGesture, setMyGesture] = React.useState(Images.question)
  const [computerGesture, setComputerGesture] = React.useState(Images.question)
  const [myScore, setMyScore] = React.useState(0)
  const [computerScore, setComputerScore] = React.useState(0)
  const [result, setResult] = React.useState()

  const updateMyGesture = (card) => {
    setMyGesture(Images[card])
    updateComputerGesture(card)
  }

  const updateComputerGesture = (myCard) => {
    getGesture().then(data => {
      setComputerGesture(Images[data.name])
      compareResult(myCard, data.name)
    })
    
  }

  const compareResult = (myCard, computerCard) => {
    if (myCard === computerCard) setResult('Tie')
    switch (myCard) {
      case 'rock':
        if (computerCard === 'paper') {setResult('Lose'); setComputerScore(prevScore => prevScore + 1)}
        if (computerCard === 'scissors') {setResult('Win'); setMyScore(prevScore => prevScore + 1)}
        if (computerCard === 'spock') {setResult('Lose'); setComputerScore(prevScore => prevScore + 1)}
        if (computerCard === 'lizard') {setResult('Win'); setMyScore(prevScore => prevScore + 1)}
        break;
      case 'scissors':
        if (computerCard === 'paper') {setResult('Win'); setMyScore(prevScore => prevScore + 1)}
        if (computerCard === 'rock') {setResult('Lose'); setComputerScore(prevScore => prevScore + 1)}
        if (computerCard === 'spock') {setResult('Lose'); setComputerScore(prevScore => prevScore + 1)}
        if (computerCard === 'lizard') {setResult('Win'); setMyScore(prevScore => prevScore + 1)}
        break;
      case 'paper':
        if (computerCard === 'scissors') {setResult('Lose'); setComputerScore(prevScore => prevScore + 1)}
        if (computerCard === 'rock') {setResult('Win'); setMyScore(prevScore => prevScore + 1)}
        if (computerCard === 'spock') {setResult('Win'); setMyScore(prevScore => prevScore + 1)}
        if (computerCard === 'lizard') {setResult('lose'); setComputerScore(prevScore => prevScore + 1)}
        break;
      case 'spock':
        if (computerCard === 'paper') {setResult('Lose'); setComputerScore(prevScore => prevScore + 1)}
        if (computerCard === 'rock') {setResult('Win'); setMyScore(prevScore => prevScore + 1)}
        if (computerCard === 'scissors') {setResult('Win'); setMyScore(prevScore => prevScore + 1)}
        if (computerCard === 'lizard') {setResult('Lose'); setComputerScore(prevScore => prevScore + 1)}
        break;
      case 'lizard':
        if (computerCard === 'paper') {setResult('Win'); setMyScore(prevScore => prevScore + 1)}
        if (computerCard === 'rock') {setResult('Lose'); setComputerScore(prevScore => prevScore + 1)}
        if (computerCard === 'spock') {setResult('Win'); setMyScore(prevScore => prevScore + 1)}
        if (computerCard === 'scissors') {setResult('Lose'); setComputerScore(prevScore => prevScore + 1)}
        break;
      default:
        setResult('');
    }
  }

  return (
    <div className="App">
      <Nav />
      <Main
        myGesture={myGesture}
        updateMyGesture={updateMyGesture}
        computerGesture={computerGesture}
        myScore={myScore}
        computerScore={computerScore}
        result={result} />
    </div>
  );
}

export default App;
