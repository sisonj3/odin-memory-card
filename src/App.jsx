import { useState } from 'react'
import './App.css'

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  let addPoint = () => {
    let newScore = score + 1;

    setScore(newScore);

    if (newScore > bestScore) {
      setBestScore(newScore);
    }
  }

  let resetScore = () => {
    setScore(0);
  }

  return (
    <>
      <header>
        <div>
          <h1>Memory Game</h1>
          <span>Get points by clicking on an image but don't click on any more than once!</span>
        </div>
        
        <div>
          <span>Score: {score}</span>
          <span>Best Score: {bestScore}</span>
        </div>
      </header>

      <main>
        <button onClick={addPoint}>Add Point</button>
        <button onClick={resetScore}>Reset</button>
      </main>
    </>
  )
}

export default App
