import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import POKEMON from './assets/pokemon';

const App = () => {
  let words = [...POKEMON];

  //State Hooks
  let [tries, setTries] = useState(10);
  let [pokemonWord, setPokemonWord] = useState();
  let [blanks, setBlanks] = useState("");
  let [used, setUsed] = useState([]);

  const randomizer = () => {
    let w = words[Math.floor(Math.random() * words.length)];
    setPokemonWord(w);
  };

  const createBlanks = () => {
    let holder = pokemonWord.name.map(i => {
      if(i === ' ') return i
      else return '*';
    }).join('');

    setBlanks(holder);
  };


  return (
    <Container>

    </Container>
  );
}

export default App;
