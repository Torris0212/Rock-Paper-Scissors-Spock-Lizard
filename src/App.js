import React from 'react'
import Nav from './components/Nav'
import Game from './components/Game'
import question from './images/question.jpg'
import rock from './images/rock.png'
import paper from './images/paper.png'
import scissors from './images/scissors.png'
import spock from './images/spock.png'
import lizard from './images/lizard.png'
import { getGesture } from './getData'
import ScoreBoard from './components/ScoreBoard'
import './App.css'

function App() {
  const Images = {
    rock,paper,scissors,spock,lizard,question,
  }
  const [myGesture, setMyGesture] = React.useState(Images.question)
  const [computerGesture, setComputerGesture] = React.useState(Images.question)
  const [myScore, setMyScore] = React.useState(0)
  const [computerScore, setComputerScore] = React.useState(0)
  const [results, setResults] = React.useState([])

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
    if (results.length > 9) results.shift();
    if (myCard === computerCard) setResults(prevResults => [...prevResults, 'Tie'])
    switch (myCard) {
      case 'rock':
        if (computerCard === 'paper') {
          setResults(prevResults => [...prevResults, 'Lose']);
          setComputerScore(prevScore => prevScore + 1)
        }
        if (computerCard === 'scissors') {
          setResults(prevResults => [...prevResults, 'Win']);
          setMyScore(prevScore => prevScore + 1)
        }
        if (computerCard === 'spock') {
          setResults(prevResults => [...prevResults, 'Lose']);
          setComputerScore(prevScore => prevScore + 1)
        }
        if (computerCard === 'lizard') {
          setResults(prevResults => [...prevResults, 'Win']);
          setMyScore(prevScore => prevScore + 1)
        }
        break;
      case 'scissors':
        if (computerCard === 'paper') {
          setResults(prevResults => [...prevResults, 'Win']);
          setMyScore(prevScore => prevScore + 1)
        }
        if (computerCard === 'rock') {
          setResults(prevResults => [...prevResults, 'Lose']);
          setComputerScore(prevScore => prevScore + 1)
        }
        if (computerCard === 'spock') {
          setResults(prevResults => [...prevResults, 'Lose']);
          setComputerScore(prevScore => prevScore + 1)
        }
        if (computerCard === 'lizard') {
          setResults(prevResults => [...prevResults, 'Win']);
          setMyScore(prevScore => prevScore + 1)
        }
        break;
      case 'paper':
        if (computerCard === 'scissors') {
          setResults(prevResults => [...prevResults, 'Lose']);
          setComputerScore(prevScore => prevScore + 1)
        }
        if (computerCard === 'rock') {
          setResults(prevResults => [...prevResults, 'Win']);
          setMyScore(prevScore => prevScore + 1)
        }
        if (computerCard === 'spock') {
          setResults(prevResults => [...prevResults, 'Win']);
          setMyScore(prevScore => prevScore + 1)
        }
        if (computerCard === 'lizard') {
          setResults(prevResults => [...prevResults, 'Lose']);
          setComputerScore(prevScore => prevScore + 1)
        }
        break;
      case 'spock':
        if (computerCard === 'paper') {
          setResults(prevResults => [...prevResults, 'Lose']);
          setComputerScore(prevScore => prevScore + 1)
        }
        if (computerCard === 'rock') {
          setResults(prevResults => [...prevResults, 'Win']);
          setMyScore(prevScore => prevScore + 1)
        }
        if (computerCard === 'scissors') {
          setResults(prevResults => [...prevResults, 'Win']);
          setMyScore(prevScore => prevScore + 1)
        }
        if (computerCard === 'lizard') {
          setResults(prevResults => [...prevResults, 'Lose']);
          setComputerScore(prevScore => prevScore + 1)
        }
        break;
      case 'lizard':
        if (computerCard === 'paper') {
          setResults(prevResults => [...prevResults, 'Win']);
          setMyScore(prevScore => prevScore + 1)
        }
        if (computerCard === 'rock') {
          setResults(prevResults => [...prevResults, 'Lose']);
          setComputerScore(prevScore => prevScore + 1)
        }
        if (computerCard === 'spock') {
          setResults(prevResults => [...prevResults, 'Win']);
          setMyScore(prevScore => prevScore + 1)
        }
        if (computerCard === 'scissors') {
          setResults(prevResults => [...prevResults, 'Lose']);
          setComputerScore(prevScore => prevScore + 1)
        }
        break;
      default:
        setResults('');
    }
  }

  const resetScores = () => {
    setResults([]);
  }

  return (
    <div className="App">
      <Nav />
      <main className="row">
        <Game
          myGesture={myGesture}
          updateMyGesture={updateMyGesture}
          computerGesture={computerGesture}
          myScore={myScore}
          computerScore={computerScore}
          results={results} />
        <ScoreBoard
          results={results}
          resetScores={resetScores} />
      </main>
    </div>
  );
}

export default App;
