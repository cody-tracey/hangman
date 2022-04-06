import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import POKEMON from './assets/pokemon';

const App = () => {
  let words = [...POKEMON];
  // console.log(words)

  let w = words[Math.floor(Math.random() * words.length)];
  let n = w.name;

  //State Hooks
  let [tries, setTries] = useState(10);
  let [pokemonFacts,setPokemonFacts] = useState(w)
  let [pokemonWord, setPokemonWord] = useState(n);
  let [blanks, setBlanks] = useState("");
  let [used, setUsed] = useState([]);
 

  const randomizer = () => {
    let w = words[Math.floor(Math.random() * words.length)];
    setPokemonWord(w);
  };

  const createBlanks = () => {
     let holder = pokemonWord.split('').map(i => {
      if (i === ' ') return i
      else return '*';
    }).join('');

    setBlanks(holder);
  };

  const gameStart = () => {
    // randomizer();
    createBlanks();
  }

  const keyUpE = ({ key }) => {
    if (!used.includes(key)) return setUsed(used => [...used, key])
   
  }



  useEffect(() => {
    gameStart();
    console.log(pokemonWord, "")
    window.addEventListener('keyup', keyUpE);
    return () => {
      window.removeEventListener('keyup', keyUpE)
    }

  }, [used]);

  return (
    <Container>
      <p>Tries left: {tries}</p>
      <p>{blanks}</p>
      <p>Already Guessed: {used}</p>
    </Container>
  );
}

export default App;
