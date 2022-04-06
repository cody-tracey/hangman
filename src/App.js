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
  let [pokemonFacts,setPokemonFacts] = useState(w)
  let [pokemonWord, setPokemonWord] = useState(n);
  let [blanks, setBlanks] = useState("");
  let [used, setUsed] = useState([]);
  const [win,setWin] = useState(false);
 

  const randomizer = () => {
    let w = words[Math.floor(Math.random() * words.length)];
    let n = w.name;
    setPokemonFacts(w)
    setPokemonWord(n)
  };

  const createBlanks = () => {
     let holder = pokemonWord.split('').map(i => {
      if (i === ' ') return i
      else return '*';
    }).join('');

    setBlanks(holder);
  };

  const gameStart = () => {
    randomizer();
    createBlanks();
    setUsed([])
    console.log('start')
  }

  const keyUpE = ({ key }) => {
    if (!used.includes(key)) return setUsed(used => [...used, key])
  }

  const winner = () => {
    setWin(true);
  }


  useEffect(() => {
    setWin(false);
    gameStart();
    console.log(pokemonWord,'test')    
  }, [win]);

  useEffect(() => {
    window.addEventListener('keyup', keyUpE);
    return () => {
      window.removeEventListener('keyup', keyUpE)
    }
  },[used])

  return (
    <Container>
      <p>Tries left: {tries}</p>
      <p>{blanks}</p>
      <p>Already Guessed: {used}</p>
      <button onClick={winner}>Click</button>
    </Container>
  );
}

export default App;
