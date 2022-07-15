import React,{useState} from 'react';
import './App.css'
import {L,M,S} from './components/Buttons'

function App() {
  const [active, setActive] = useState(-1);
  return (
    <div className="App">
      <div className="container" onClick={() => setActive(1)}>
        <L active={active === 1} />
      </div>
      <div className="container" onClick={() => setActive(2)}>
        <M active={active === 2} />
      </div>
      <div className="container" onClick={() => setActive(3)}>
        <S active={active === 3} />
      </div>
     
    </div>
  );
}

export default App;
