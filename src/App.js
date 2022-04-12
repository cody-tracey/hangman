import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import POKEMON from './assets/pokemon';

const App = () => {
  let words = [...POKEMON];

  let w = words[Math.floor(Math.random() * words.length)];
  let n = w.name;

  //State Hooks
  let [tries, setTries] = useState(10);
  let [pokemonFacts, setPokemonFacts] = useState(w)
  let [pokemonWord, setPokemonWord] = useState(n);
  let [blanks, setBlanks] = useState("");
  let [used, setUsed] = useState([]);
  const [results, setResults] = useState([]);




  const randomizer = () => {
    let w = words[Math.floor(Math.random() * words.length)];
    let n = w.name;
    setPokemonFacts(w);
    setPokemonWord(n);
  };

  const createBlanks = () => {
    let holder = pokemonWord.split('').map(i => {
      if (i === ' ') return i
      else return '_ ';
    }).join('');

    setBlanks(holder);
  };

  const gameStart = () => {
    randomizer();
    setUsed([])
  }

  const keyUpE = ({ key }) => {
    if (!used.includes(key)) return setUsed(used => [...used, key])
    console.log(key,pokemonWord)
    if(pokemonWord.includes(key)) console.log("includes")
  }

  const winner = (res) => {
    setResults([...results, res]);
  }


  useEffect(() => {
    gameStart();
  }, [results]);

  useEffect(() => {
    window.addEventListener('keyup', keyUpE);
    return () => {
      window.removeEventListener('keyup', keyUpE)
    }
  }, [used]);

  useEffect(() => {
    createBlanks();
  }, [pokemonWord])

  return (
    <Container>

      <p>Tries left: {tries}</p>
      <p>{blanks}</p>
      <p>{pokemonWord.split('').join(' ')}</p>
      <p>Already Guessed: {used}</p>
      <button onClick={winner}>Click</button>
    </Container>
  );
}

export default App;
