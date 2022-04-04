import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import POKEMON from './assets/pokemon';

const App = () => {
  let words = [...POKEMON];

  let [tries,setTries] = useState(10)
  
  return (
    <Container>

    </Container>
  );
}

export default App;
