import React from 'react'
import Nav from './components/Nav'
import Main from './components/Main'
import question from './images/question.jpg'
import rock from './images/rock.png'
import paper from './images/paper.png'
import scissors from './images/scissors.png'
import spock from './images/spock.png'
import lizard from './images/lizard.png'
import './App.css';

function App() {
  const [myGesture, setMyGesture] = React.useState(question)
  const [computerGesture, setComputerGesture] = React.useState(question)
  const [myScore, setMyScore] = React.useState(0)
  const [computerScore, setComputerScore] = React.useState(0)
  return (
    <div className="App">
      <Nav />
      <Main
        myGesture={myGesture}
        computerGesture={computerGesture}
        myScore={myScore}
        computerScore={computerScore} />
    </div>
  );
}

export default App;
