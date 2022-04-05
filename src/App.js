import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import POKEMON from './assets/pokemon';

const App = () => {
  let words = [...POKEMON];
  // console.log(words)

  let w = words[Math.floor(Math.random() * words.length)];

  //State Hooks
  let [tries, setTries] = useState(10);
  let [pokemonWord, setPokemonWord] = useState(w);
  let [blanks, setBlanks] = useState("");
  let [used, setUsed] = useState([]);

  const randomizer = () => {
    let w = words[Math.floor(Math.random() * words.length)];
    setPokemonWord(w);
  };

  const createBlanks = () => {
    let name = pokemonWord.name.split('');
    let holder = name.map(i => {
      if (i === ' ') return i
      else return '*';
    }).join('');

    setBlanks(holder);
  };

  const gameStart = () => {
    // randomizer();
    createBlanks();
  }


  useEffect(() => {
    gameStart();
    console.log(pokemonWord, "")
  },[]);

  return (
    <Container>
      <p>Tries left: {tries}</p>
      <p>{blanks}</p>
      <p>Already Guessed: {used}</p>
    </Container>
  );
}

export default App;
