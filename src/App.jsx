import { useEffect, useState } from 'react'
import './App.css'
import MemoryGrid from './components/MemoryGrid'

const artUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [sprites, setSprites] = useState([{sprite: `${artUrl}${1}.png`, index: 1}]);

  let changePokemon = () => {
    let list = []

    for (let i = 0; i < 12; i++) {
      let dexNumber = Math.floor(Math.random() * 1025) + 1;

      let pokemon = {
        sprite: `${artUrl}${dexNumber}.png`,
        index: dexNumber
      };

      list.push(pokemon);        
    }

    console.log(list);
    setSprites(list);
  }

  let addPoint = () => {
    let newScore = score + 1;

    setScore(newScore);

    if (newScore > bestScore) {
      setBestScore(newScore);
    }
  }

  let resetGame = () => {
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

      <button onClick={addPoint}>Add Point</button>

      <main>
        <button onClick={changePokemon}>Start</button>

        <MemoryGrid
          gridSprites={sprites}
        />
      </main>

      
      
    </>
  )
}

export default App
