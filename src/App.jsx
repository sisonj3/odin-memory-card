import { useEffect, useState } from 'react'
import './App.css'
import MemoryGrid from './components/MemoryGrid'

const artUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

// List of items already selected
let memory = [];

function App() {
  // States
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [sprites, setSprites] = useState([]);

  // Add check for same keys
  let changePokemon = () => {
    let list = [];
    // Use to check for duplicate keys
    let keys = [];

    for (let i = 0; i < 12; i++) {
      let dexNumber = Math.floor(Math.random() * 1025) + 1;

      // If dexNumber is in keys generate a new number
      while (keys.includes(dexNumber)) {
        dexNumber = Math.floor(Math.random() * 1025) + 1;
      }

      let pokemon = {
        sprite: `${artUrl}${dexNumber}.png`,
        index: dexNumber
      };

      list.push(pokemon);
      keys.push(dexNumber);
    }

    //console.log(list);
    setSprites(list);
  }

  let addPoint = () => {
    let newScore = score + 1;

    setScore(newScore);

    if (newScore > bestScore) {
      setBestScore(newScore);
    }
  }

  let scoring = (event) => {
    let num = event.target.alt;

    // Check if number is already in memory
    if (!memory.includes(num)) {
      // Add num to memory
      memory.push(num);
      console.log(memory);

      // Add point
      addPoint();
    } else {
      // Clear memory
      memory = [];
      setScore(0);
    }

    changePokemon();
    event.preventDefault();
  }

  // Initialize the images on the grid
  useEffect(() => {
    changePokemon();
  }, []);

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
        <MemoryGrid
          gridSprites={sprites}
          scoringFunction={scoring}
        />
      </main>

      
      
    </>
  )
}

export default App
